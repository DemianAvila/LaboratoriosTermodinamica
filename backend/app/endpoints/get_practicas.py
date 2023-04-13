from fastapi import APIRouter, Header, Response, status
from .modules.remove_key import remove_key
from .modules.active_session import active_session_function
from .config.get_mongo_client import get_mongo_client

router = APIRouter()



@router.get("/practicas", tags=["practicas"])
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


@router.get("/get_texture", tags=["metadata"])
async def get_avances(response: Response, texture: str, token: str = Header()):
    try:
        db = get_mongo_client()
        if not active_session_function(token, db)["active_session"]:
            response.status_code = status.HTTP_403_FORBIDDEN
            return {
                "description": "Session logged out"
            }
        user_info = db.textures.find_one({"name": texture})
        if not user_info:
            response.status_code = status.HTTP_408_REQUEST_TIMEOUT
            return {
                "description": "Texture doesn't exists"
            }


        user_info = remove_key(user_info, "_id")
        return {
            "description": "Success",
            "texture": user_info
        }
    except:
        response.status_code = status.HTTP_408_REQUEST_TIMEOUT
        return {
            "description": "Could not access the database"
        }


@router.get("/get_metadata", tags=["metadata"])
async def get_avances(response: Response, practica_id: int, token: str = Header()):
    try:
        db = get_mongo_client()
        if not active_session_function(token, db)["active_session"]:
            response.status_code = status.HTTP_403_FORBIDDEN
            return {
                "description": "Session logged out"
            }
        user_info = db.metadata.find_one({"practica_id":practica_id})
        if not user_info:
            response.status_code = status.HTTP_408_REQUEST_TIMEOUT
            return {
                "description": "This practice id doesn't exists"
            }

        user_info = remove_key(user_info, "_id")
        return {
            "description": "Success",
            "metadata": user_info
        }
    except:
        response.status_code = status.HTTP_408_REQUEST_TIMEOUT
        return {
            "description": "Could not access the database"
        }