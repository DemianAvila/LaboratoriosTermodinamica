from fastapi import APIRouter,Response, status
from .config.get_mongo_client import get_mongo_client
import traceback
import logging

router = APIRouter()

@router.get("/test", tags=["test"])
async def practicas(response: Response):
    try:
        db = get_mongo_client()
        return {
            "description": "ok",
            "full": str(db),
            "colls": str(db.list_collection_names()),
            "data": open("./endpoints/config/config_file.json").read()
        }
    except:
        logging.warning("=================")
        logging.warning(traceback.format_exc())
        logging.warning("=================")
        response.status_code = status.HTTP_408_REQUEST_TIMEOUT
        return {
            "description": "Could not access the database",
            "data": open("./endpoints/config/config_file.json").read(),
            "full": str(traceback.format_exc()),
        }
