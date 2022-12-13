import logging
from typing import Union
from fastapi import FastAPI
from endpoints.config.get_mongo_client import get_mongo_client


app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}



@app.get("/practicas/", tags=["practicas"])
async def practicas():
    db = get_mongo_client()
    logging.warning("-----------------")
    #logging.warning(db.practicas.find())
    for practica in db.practicas.find():
        logging.warning(practica)
    logging.warning("-----------------")
    return {
        "a": "b"
    }
