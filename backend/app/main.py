
from fastapi import FastAPI
from endpoints import get_practicas
app = FastAPI()

app.include_router(get_practicas.router)

