from fastapi import FastAPI, HTTPException, Depends
from sqlalchemy.orm import Session
from models import Author, Collection, Jewelry
from dan import AuthorCreate, AuthorRead, CollectionCreate, CollectionRead, JewelryCreate, JewelryRead
from db import SessionLocal, init_db
from fastapi.staticfiles import StaticFiles


from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()


origins = [
    "http://localhost:3000",  # Адрес фронтенд-приложения
    "http://127.0.0.1:3000",  # Если на другом порту
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Разрешенные источники
    allow_credentials=True,
    allow_methods=["*"],  # Разрешаем все HTTP методы
    allow_headers=["*"],  # Разрешаем все заголовки
)

from sqlmodel import select, Session as SQLModelSession
from typing import Optional


app.mount("/models", StaticFiles(directory="models"), name="models")

@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.on_event("startup")
def on_startup():
    init_db()
        

# Функция для получения сессии
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/authors/", response_model=AuthorRead)
def create_author(author: AuthorCreate, db: Session = Depends(get_db)):
    db_author = Author(name=author.name, phone_number=author.phone_number, email=author.email,
                       description=author.description, link=author.link)
    db.add(db_author)
    db.commit()
    db.refresh(db_author)
    return db_author

@app.get("/authors/", response_model=list[AuthorRead])
def get_authors(db: Session = Depends(get_db)):
    authors = db.query(Author).all()
    return authors

# Эндпоинт для создания коллекции
@app.post("/collections/", response_model=CollectionRead)
def create_collection(collection: CollectionCreate, db: Session = Depends(get_db)):
    db_collection = Collection(name=collection.name, author_id=collection.author_id)
    db.add(db_collection)
    db.commit()
    db.refresh(db_collection)
    return db_collection

# Эндпоинт для получения всех коллекций
@app.get("/collections/", response_model=list[CollectionRead])
def get_collections(db: Session = Depends(get_db)):
    collections = db.query(Collection).all()
    return collections

# Эндпоинт для создания ювелирного изделия
@app.post("/jewelries/", response_model=JewelryRead)
def create_jewelry(jewelry: JewelryCreate, db: Session = Depends(get_db)):
    db_jewelry = Jewelry(name=jewelry.name, price=jewelry.price, description=jewelry.description,
                         collection_id=jewelry.collection_id, author_id=jewelry.author_id,
                         author_link=jewelry.author_link, three_d_file=jewelry.three_d_file)
    db.add(db_jewelry)
    db.commit()
    db.refresh(db_jewelry)
    return db_jewelry

# Эндпоинт для получения всех ювелирных изделий
@app.get("/jewelries/", response_model=list[JewelryRead])
def get_jewelries(db: Session = Depends(get_db)):
    jewelries = db.query(Jewelry).all()
    return jewelries

@app.get("/jewelries/{jewelry_id}", response_model=dict)
def get_jewelry_by_id(jewelry_id: int, db: SQLModelSession = Depends(get_db)):

    jewelry = db.execute(select(Jewelry).where(Jewelry.id == jewelry_id)).scalars().first()

    if jewelry is None:
        raise HTTPException(status_code=404, detail="Jewelry not found")

    collection = db.execute(select(Collection).where(Collection.id == jewelry.collection_id)).scalars().first()
    author = db.execute(select(Author).where(Author.id == jewelry.author_id)).scalars().first()

    return {
        "name": jewelry.name or "Имя не указано",
        "price": jewelry.price if jewelry.price else "Цена не указана",
        "description": jewelry.description or "Описание не указано",
        "collection": collection.name if collection else "Коллекция не указана",
        "author": {
            "name": author.name if author else "Автор не указан",
            "link": author.link if author and author.link else "Ссылка на автора не указана"
        },
        "three_d_file": jewelry.three_d_file if jewelry.three_d_file else None
    }