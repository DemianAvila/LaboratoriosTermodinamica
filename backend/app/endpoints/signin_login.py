from fastapi import APIRouter, Response, status
from pydantic import BaseModel
from .config.get_mongo_client import get_mongo_client
import jwt
import time   
import logging 
import traceback

class JWT(BaseModel):
    token: str
    

router = APIRouter()



@router.post("/signin_or_login", tags=["auth"])
async def signin_or_login(response: Response,token: JWT):
    try:
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
        respuestas = []
        for pregunta in db.cuestionario_previo.find():
            logging.warning("----------------------------------------")
            logging.warning(pregunta)
            logging.warning("----------------------------------------")
            if pregunta["question_type"] == "multiple_question":
                for field in pregunta["fields"]:
                    respuestas.append(
                        {
                            "pregunta_id": field["_id"],
                            "answer": ""
                        }
                    )
            elif pregunta["question_type"] == "answer_list":
                answers = []
                for type_ in pregunta["needed_answers"]:
                    answers.append(
                        {
                            "type": type_,
                            "answer": ""
                        }
                    )
                
                respuestas.append(
                    {
                        "pregunta_id": pregunta["_id"],
                        "answers": answers
                    }
                )
            elif pregunta["question_type"] == "open":
                respuestas.append(
                    {
                        "pregunta_id": pregunta["_id"],
                        "answer": {
                            "answer": "",
                            "type": pregunta["answer_type"] 
                        }
                    }
                )
            else:
                respuestas.append(
                        {
                            "pregunta_id": pregunta["_id"],
                            "answer": ""
                        }
                    )
            
            
        if not user_exists:
            db.users.insert_one(
                {
                    "nombre": decoded_jwt["name"],
                    "email": decoded_jwt["email"],
                    "avance_practicas": avances,
                    "respuestas": respuestas
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
    except Exception as e:
        logging.warning(traceback.format_exc())
        response.status_code = status.HTTP_408_REQUEST_TIMEOUT
        return {
            "description": "Could not access the database"
        }





@router.post("/active_session", tags=["auth"])
async def active_session(response: Response,token: JWT):
    try:
        db = get_mongo_client()

        #CHECK IF JWT IS IN SESSION
        session = db.sessions.find_one(
            {
                "jwt": token.token
            }
        )
        #IF LEN 0, THERE IS NO ACTIVE SESSION
        return {
            "active_session": False if not session else True
        }
    except:
        logging.warning(traceback.format_exc())
        response.status_code = status.HTTP_408_REQUEST_TIMEOUT
        return {
            "description": "Could not access the database"
        }


