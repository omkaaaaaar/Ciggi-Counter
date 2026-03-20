from sqlalchemy.orm import declarative_base

Base = declarative_base()

# IMPORT MODELS HERE (IMPORTANT)
from app.models.user import User
from app.models.cig_entry import CigEntry