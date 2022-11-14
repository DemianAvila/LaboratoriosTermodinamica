from fastapi import APIRouter
from .config.get_mongo_client import get_mongo_client

router = APIRouter()

@router.get("/practicas/", tags=["practicas"])
async def practicas():
    db = get_mongo_client()

    return db.practicas.find()
