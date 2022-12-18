from fastapi import APIRouter, Header, Response, status
from .modules.remove_key import remove_key
from .modules.active_session import active_session_function
from .config.get_mongo_client import get_mongo_client

router = APIRouter()



@router.get("/practicas/", tags=["practicas"])
async def practicas(response: Response, token: str = Header()):
    try:
        db = get_mongo_client()
        if not active_session_function(token, db)["active_session"]:
            response.status_code = status.HTTP_403_FORBIDDEN
            return {
                "description": "Session logged out"
            }
        practicas = [remove_key(practica, "_id") for practica in db.practicas.find()]
        return {
            "description": "Success",
            "practicas": practicas
        }
    except:
        response.status_code = status.HTTP_408_REQUEST_TIMEOUT
        return {
            "description": "Could not access the database"
        }


    


@router.get("/get_avances", tags=["practicas"])
async def get_avances(response: Response, email: str, token: str = Header()):
    try:
        db = get_mongo_client()
        if not active_session_function(token, db)["active_session"]:
            response.status_code = status.HTTP_403_FORBIDDEN
            return {
                "description": "Session logged out"
            }
        user_info = db.users.find_one({"email":email})
        return {
            "description": "Success",
            "avance_practicas": user_info["avance_practicas"]
        }
    except:
        response.status_code = status.HTTP_408_REQUEST_TIMEOUT
        return {
            "description": "Could not access the database"
        }


