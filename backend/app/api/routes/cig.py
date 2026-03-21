from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from datetime import date

from app.api.deps import get_db, get_current_user
from app.schemas.cig_entry import CigCreate
from app.services.cig_service import (
    add_cig_entry,
    get_daily_entries,
    get_monthly_entries
)

router = APIRouter(prefix="/cigs", tags=["Cigs"])


# ➕ Add cig
@router.post("/add")
async def add_cig(
    data: CigCreate,
    db: AsyncSession = Depends(get_db),
    user=Depends(get_current_user)
):
    entry = await add_cig_entry(db, user.id, data.date, data.count)
    return {
    "message": "Entry added",
    "entry": {
        "date": entry.date,
        "count": entry.count
    }
}


# 📅 Daily
@router.get("/daily")
async def daily(
    db: AsyncSession = Depends(get_db),
    user=Depends(get_current_user)
):
    return await get_daily_entries(db, user.id)


# 📊 Monthly
@router.get("/monthly")
async def monthly(
    year: int,
    month: int,
    db: AsyncSession = Depends(get_db),
    user=Depends(get_current_user)
):
    return await get_monthly_entries(db, user.id, year, month)