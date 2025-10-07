from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow frontend to connect
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

items = []

@app.get("/items")
def get_items():
    return items

@app.post("/items")
def add_item(item: dict):
    items.append(item)
    return item

@app.get("/")
def read_root():
    return {"message": "Hello from FastAPI in Docker!"}

@app.get("/items")
def get_items():
    return [{"id": 1, "name": "Item One"}, {"id": 2, "name": "Item Two"}]