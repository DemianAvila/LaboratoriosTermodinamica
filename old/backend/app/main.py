
from fastapi import FastAPI, Request
from endpoints import (
    get_practicas,
    signin_login,
    preguntas,
    modelos3d,
    test_db_connection)
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI(secure=True)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost",
        "http://localhost:8080",
        "https://lab-termidinamica.onrender.com",
        "https://demianavila.github.io",
        "http://localhost:81",
        "http://localhost:82",
        "https://frontend-dev-kti7arbkqq-uc.a.run.app",
        "https://orange-broccoli-gr4rwjrvp96hv9j6-80.preview.app.github.dev",
        "https://orange-broccoli-gr4rwjrvp96hv9j6-80.app.github.dev",

    ],
    
    allow_methods=["OPTIONS", "DELETE", "POST", "GET", "PATCH", "PUT"],
    allow_headers=["*"],
)



app.include_router(get_practicas.router)
app.include_router(signin_login.router)
app.include_router(preguntas.router)
app.include_router(modelos3d.router)
app.include_router(test_db_connection.router)

