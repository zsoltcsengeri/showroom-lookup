from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import json

app = FastAPI()

# Middleware to allow frontend to connect (CORS)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load data from JSON file
with open("data.json", "r") as f:
    showrooms = json.load(f)

# Create endpoint
@app.get("/showrooms")
def get_showrooms(city: str):
    filtered = [
        {
            "name": s["name"],
            "type": s["type"],
            "address": f'{s["address"]["street"]}, {s["address"]["postcode"]}',
            "open_hours": s["open_hours"],
            "contact_email": s["contact_email"]
        }
        for s in showrooms if s["city"].lower() == city.lower()
    ]
    return filtered

