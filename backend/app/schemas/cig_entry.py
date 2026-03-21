from pydantic import BaseModel
from datetime import date

class CigCreate(BaseModel):
    date: date
    count: int

class CigResponse(BaseModel):
    date: date
    count: int