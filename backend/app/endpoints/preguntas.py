from fastapi import APIRouter, Response, status, Header
from .modules.active_session import active_session_function
from .config.get_mongo_client import get_mongo_client
import logging    
import traceback

router = APIRouter()



@router.get("/get_preguntas", tags=["practicas"])
async def practicas(response: Response, 
    practica_id: int, 
    email: str, 
    token: str = Header()):

    try:
        db = get_mongo_client()
        if not active_session_function(token, db)["active_session"]:
            response.status_code = status.HTTP_403_FORBIDDEN
            return {
                "description": "Session logged out"
            }
        #GET QUESTIONS
        preguntas = list(db.cuestionario_previo.find({"practica_id": practica_id}))
        if not preguntas:
            response.status = status.HTTP_404_NOT_FOUND
            return {
                "description": "No questions for that practice"
            }
        #GET ANSWERS FOR A USER
        user = db.users.find_one({"email": email})
        if not user:
            response.status = status.HTTP_404_NOT_FOUND
            return {
                "description": "Not registered user"
            }
        for pregunta in preguntas:
            if pregunta["question_type"] == "multiple_question":
                for field in pregunta["fields"]:
                    logging.warning(field)
                    respuesta = list(
                        filter(
                            lambda x: x["pregunta_id"] == field["_id"],
                            user["respuestas"]
                        )
                    )
                    field.update({"respuesta": respuesta[0]["respuesta"]})
                    field["id"] = str(field.pop("_id", None))
            else:
                respuesta = list(
                        filter(
                            lambda x: x["pregunta_id"] == pregunta["_id"],
                            user["respuestas"]
                        )
                    )
                pregunta.update({"respuesta": respuesta[0]["respuesta"]})
            
            pregunta["id"] = str(pregunta.pop("_id", None))

                


            
        logging.warning("----------------------------")
        logging.warning(preguntas)
        logging.warning("----------------------------")
        return {
            "description": "Success",
            "practica_id": practica_id,
            "cuestionario_previo": []
        }
            
    except Exception as e:
        logging.warning("-------------------")
        logging.warning(str(e))
        logging.warning(traceback.format_exc())
        logging.warning("-------------------")
        response.status_code = status.HTTP_408_REQUEST_TIMEOUT
        return {
            "description": "Could not access the database"
        }

