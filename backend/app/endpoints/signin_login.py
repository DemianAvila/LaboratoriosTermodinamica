from fastapi import APIRouter
from pydantic import BaseModel
from .modules.remove_key import remove_key
from .config.get_mongo_client import get_mongo_client
import logging
import jwt
import time    

class JWT(BaseModel):
    token: str
    

router = APIRouter()



@router.post("/signin_or_login", tags=["auth"])
async def signin_or_login(token: JWT):
    db = get_mongo_client()
    #DECODE JWT
    decoded_jwt = jwt.decode(token.token, options={"verify_signature": False})
    #DOES THE EMAIL EXISTS IN THE USERS COLLECTION?
    user_exists = False if not db.users.find_one({"email": decoded_jwt["email"]}) else True
    #IF IT DOESNT EXISTS, CREATE AND INITIALIZE
    avances = []
    for practica in db.practicas.find():
        avances.append({
            "id_prac": practica["id"],
            "avance": 0
        })
    if not user_exists:
        db.users.insert_one(
            {
                "nombre": decoded_jwt["name"],
                "email": decoded_jwt["email"],
                "avance_practicas": avances
            }
        )
    #WRITE THE JWT TOKEN IN THE SESSION DB
    db.sessions.insert_one({
        "jwt": token.token,
        "init": int(time.time())
    })

    return {
        "token": token.token,
        "email": decoded_jwt["email"]
    }




@router.post("/active_session", tags=["auth"])
async def active_session(token: JWT):
    db = get_mongo_client()

    #CHECK IF JWT IS IN SESSION
    session = db.sessions.find_one(
        {
            "jwt": token.token
        }
    )
    logging.warning("---------------")
    for sess in db.sessions.find():
        logging.warning(sess)
    logging.warning("---------------")
    #IF LEN 0, THERE IS NO ACTIVE SESSION
    return {
        "active_session": False if not session else True
    }

