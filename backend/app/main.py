from fastapi import FastAPI, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import text
from app.api.deps import get_db

from app.db.database import engine
from app.db.base import Base

from app.api.routes import auth

from app.api.routes import cig

from app.models import user, cig_entry

from fastapi.middleware.cors import CORSMiddleware



app = FastAPI(title="Ciggi Counter API 🚬")

@app.get("/")
async def root(db: AsyncSession = Depends(get_db)):
    result = await db.execute(text("SELECT 1"))
    return {"message": "DB Connected ✅", "result": result.scalar()}

@app.on_event("startup")
async def create_tables():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

app.include_router(auth.router)

app.include_router(cig.router)


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # For now (dev)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)