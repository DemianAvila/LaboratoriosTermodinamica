from fastapi import APIRouter
from .modules.remove_key import remove_key
from .config.get_mongo_client import get_mongo_client

router = APIRouter()



@router.get("/practicas/", tags=["practicas"])
async def practicas():
    db = get_mongo_client()
    practicas = [remove_key(practica, "_id") for practica in db.practicas.find()]

    return {
        "practicas": practicas
    }


@router.get("/get_avances", tags=["practicas"])
async def get_avances(email: str):
    db = get_mongo_client()
    user_info = db.users.find_one({"email":email})


    return {
        "avance_practicas": user_info["avance_practicas"]
    }

