from fastapi import APIRouter, Response, status, Header
from pydantic import BaseModel
from bson.objectid import ObjectId
from .modules.active_session import active_session_function
from .config.get_mongo_client import get_mongo_client
import logging    
import traceback
import jwt

router = APIRouter()

class Answers(BaseModel):
    answers: list

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
                    respuesta = list(
                        filter(
                            lambda x: x["pregunta_id"] == field["_id"],
                            user["respuestas"]
                        )
                    )
                    field.update({"answer": respuesta[0]["answer"]})
                    field["id"] = str(field.pop("_id", None))
            else:
                respuesta = list(
                        filter(
                            lambda x: x["pregunta_id"] == pregunta["_id"],
                            user["respuestas"]
                        )
                    )
                
                if pregunta["question_type"] in ["answer_list", "many"] :
                    pregunta.update({"answers": respuesta[0]["answers"]})
                else:
                    pregunta.update({"answer": respuesta[0]["answer"]})
                
            
            pregunta["id"] = str(pregunta.pop("_id", None))   
       
        return {
            "description": "Success",
            "practica_id": practica_id,
            "cuestionario_previo": preguntas
        }
            
    except Exception as e:
        response.status_code = status.HTTP_408_REQUEST_TIMEOUT
        return {
            "description": "Could not access the database"
        }


@router.post("/post_respuestas", tags=["practicas"])
async def post_respuestas(response: Response,  
    answers: Answers,
    token: str = Header()):
    
    try:
        db = get_mongo_client()
        if not active_session_function(token, db)["active_session"]:
            response.status_code = status.HTTP_403_FORBIDDEN
            return {
                "description": "Session logged out"
            }
        
        #DECODE THE JWT
        decoded_jwt = jwt.decode(token, options={"verify_signature": False})
        #FIND DE USER'S MAIL
        user = db.users.find_one({"email": decoded_jwt["email"]}) 
        #EXTRACT THE ANSWERS OUT OF IT
        user_id = user["_id"]

        
        #FOR EACH ANSWER
        for answer in answers.answers:
            if  answer['question_type'] == 'multiple_question':
                for sub_ans in answer['fields']:
                    update_ans = {
                        "answer": sub_ans["answer"],
                        "pregunta_id": ObjectId(sub_ans['id'])
                    }
                    db.users.update_one(
                        {
                            "_id": ObjectId(user_id),
                            "respuestas.pregunta_id": ObjectId(sub_ans['id'])
                        },
                        { 
                            "$set": {
                                "respuestas.$": update_ans 
                            } 
                        }
                    )
            elif  answer['question_type'] == 'answer_list':
                update_ans = {}
                update_ans['pregunta_id'] = ObjectId(answer['id'])
                update_ans['answers'] = answer['answers']
                db.users.update_one(
                    {
                        "_id": ObjectId(user_id),
                        "respuestas.pregunta_id": ObjectId(answer['id'])
                    },
                    { 
                        "$set": {
                            "respuestas.$": update_ans
                        } 
                    }
                )
            elif answer['question_type'] == 'table':
                update_ans = {}
                update_ans['pregunta_id'] = ObjectId(answer['id'])
                try:
                    update_ans['answer'] = answer['answers']
                except:
                    update_ans['answer'] = answer['answer']
                db.users.update_one(
                    {
                        "_id": ObjectId(user_id),
                        "respuestas.pregunta_id": ObjectId(answer['id'])
                    },
                    { 
                        "$set": {
                            "respuestas.$": update_ans
                        } 
                    }
                )
            elif answer['question_type'] == 'many':
                update_ans = {}
                update_ans['pregunta_id'] = ObjectId(answer['id'])
                update_ans['answers'] = answer['answers']
                db.users.update_one(
                    {
                        "_id": ObjectId(user_id),
                        "respuestas.pregunta_id": ObjectId(answer['id'])
                    },
                    { 
                        "$set": {
                            "respuestas.$": update_ans
                        } 
                    }
                )
            else:
                update_ans = {
                    "answer": answer["answer"],
                    "pregunta_id": ObjectId(answer['id'])
                }
                db.users.update_one(
                    {
                        "_id": ObjectId(user_id),
                        "respuestas.pregunta_id": ObjectId(answer['id'])
                    },
                    { 
                        "$set": {
                            "respuestas.$": update_ans
                        } 
                    }
                )
        response.status_code = status.HTTP_201_CREATED
        return {
            "description": "Saved"
        }

    except Exception as e:
        response.status_code = status.HTTP_408_REQUEST_TIMEOUT
        return {
            "description": "Could not access the database"
        }
     
