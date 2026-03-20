from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select

from app.models.user import User
from app.core.security import hash_password, verify_password, create_access_token


# 📝 Register
async def register_user(db: AsyncSession, email: str, password: str):
    print("RAW PASSWORD:", password)
    print("PASSWORD LENGTH:", len(password))

    result = await db.execute(select(User).where(User.email == email))
    existing_user = result.scalar_one_or_none()

    if existing_user:
        raise Exception("User already exists")

    new_user = User(
        email=email,
        password_hash=hash_password(password)
    )

    db.add(new_user)
    await db.commit()
    await db.refresh(new_user)

    return new_user


# 🔐 Login
async def login_user(db: AsyncSession, email: str, password: str):
    result = await db.execute(select(User).where(User.email == email))
    user = result.scalar_one_or_none()

    if not user or not verify_password(password, user.password_hash):
        raise Exception("Invalid credentials")

    token = create_access_token({"sub": str(user.id)})

    return token