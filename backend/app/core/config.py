from dotenv import load_dotenv
import os

# FORCE load .env from backend root
load_dotenv(".env")

print("LOADED DATABASE_URL:", os.getenv("DATABASE_URL"))

class Settings:
    DATABASE_URL: str = os.getenv("DATABASE_URL")

    SECRET_KEY: str = os.getenv("SECRET_KEY", "fallback-secret")
    ALGORITHM: str = os.getenv("ALGORITHM", "HS256")
    ACCESS_TOKEN_EXPIRE_MINUTES: int = int(
        os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES", 60)
    )

settings = Settings()