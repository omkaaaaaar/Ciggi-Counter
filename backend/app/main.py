from fastapi import FastAPI, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import text
from app.api.deps import get_db

app = FastAPI(title="Ciggi Counter API 🚬")

@app.get("/")
async def root(db: AsyncSession = Depends(get_db)):
    result = await db.execute(text("SELECT 1"))
    return {"message": "DB Connected ✅", "result": result.scalar()}