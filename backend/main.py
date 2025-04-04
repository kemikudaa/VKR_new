from fastapi import FastAPI, HTTPException, Depends
from sqlalchemy.orm import Session
from sqlmodel import Session as SQLSession, create_engine
from models import Author, Collection, Jewelry
from dan import AuthorCreate, AuthorRead, CollectionCreate, CollectionRead, JewelryCreate, JewelryRead
from db import SessionLocal

app = FastAPI()

# Функция для получения сессии
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Эндпоинт для создания автора
@app.post("/authors/", response_model=AuthorRead)
def create_author(author: AuthorCreate, db: Session = Depends(get_db)):
    db_author = Author(name=author.name, phone_number=author.phone_number, email=author.email,
                       description=author.description, link=author.link)
    db.add(db_author)
    db.commit()
    db.refresh(db_author)
    return db_author

# Эндпоинт для получения всех авторов
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
