from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from datetime import date

from app.models.cig_entry import CigEntry


# ➕ Add entry
async def add_cig_entry(db: AsyncSession, user_id, date: date, count: int):
    entry = CigEntry(
        user_id=user_id,
        date=date,
        count=count
    )

    db.add(entry)
    await db.commit()
    await db.refresh(entry)

    return entry


# 📅 Get daily entries
async def get_daily_entries(db: AsyncSession, user_id):
    result = await db.execute(
        select(CigEntry).where(CigEntry.user_id == user_id)
    )
    return result.scalars().all()


# 📊 Get monthly total
async def get_monthly_entries(db: AsyncSession, user_id, year: int, month: int):
    result = await db.execute(
        select(CigEntry).where(
            CigEntry.user_id == user_id,
            CigEntry.date >= date(year, month, 1),
            CigEntry.date < date(year, month + 1, 1)
        )
    )
    return result.scalars().all()