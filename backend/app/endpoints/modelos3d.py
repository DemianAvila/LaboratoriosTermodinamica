import re
import logging
import traceback
from fastapi import APIRouter, Header, Response, status
from .modules.remove_key import remove_key
from .modules.active_session import active_session_function
from .config.get_mongo_client import get_mongo_client

router = APIRouter()



@router.get("/modelo3d", tags=["modelos"])
async def practicas(response: Response, practica_id: int, token: str = Header()):
    try:
        db = get_mongo_client()
        if not active_session_function(token, db)["active_session"]:
            response.status_code = status.HTTP_403_FORBIDDEN
            return {
                "description": "Session logged out"
            }
        
        modelos = [remove_key(practica, "_id") for practica in db["3d-models"].find(
            {
                "filename": {
                    "$regex": re.compile(r'^practica'+str(practica_id)+r'.*')
                } 
            }
        )]
        return {
            "models": modelos
        }

    except:
        response.status_code = status.HTTP_408_REQUEST_TIMEOUT
        return {
            "description": "Could not access the database"
        }