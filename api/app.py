from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://127.0.0.1:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Définition d'un modèle Pydantic pour les données de connexion
class User(BaseModel):
    username: str
    password: str

# Point de terminaison pour la demande de connexion
@app.post("/login")
async def login(user: User):

    print(user.username)
    if user.username == "utilisateur" and user.password == "motdepasse":
        return {"message": "Connexion réussie"}
    else:
        raise HTTPException(status_code=401, detail="Nom d'utilisateur ou mot de passe incorrect")

# Point de terminaison pour une requête simple
@app.get("/")
async def read_root():
    return {"message": "Hello World"}