
from fastapi import FastAPI
from endpoints import (
    get_practicas,
    signin_login,
    preguntas,
    modelos3d)
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(get_practicas.router)
app.include_router(signin_login.router)
app.include_router(preguntas.router)
app.include_router(modelos3d.router)

