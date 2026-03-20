import uuid
from sqlalchemy import Column, Integer, Date, DateTime, ForeignKey
from sqlalchemy.dialects.postgresql import UUID
from datetime import datetime

from app.db.base import Base

class CigEntry(Base):
    __tablename__ = "cig_entries"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)

    user_id = Column(UUID(as_uuid=True), ForeignKey("users.id"), nullable=False)

    date = Column(Date, nullable=False)
    count = Column(Integer, nullable=False)

    created_at = Column(DateTime, default=datetime.utcnow)