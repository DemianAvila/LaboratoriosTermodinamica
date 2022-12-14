import logging
from fastapi import APIRouter
from .modules.remove_key import remove_key
from .config.get_mongo_client import get_mongo_client

router = APIRouter()

@router.get("/practicas/", tags=["practicas"])
async def practicas():
    db = get_mongo_client()
    practicas = [remove_key(practica, "_id") for practica in db.practicas.find()]
    
    logging.warning("------------------")
    logging.warning(practicas)
    logging.warning("------------------")
    return {
        "practicas": practicas
    }


