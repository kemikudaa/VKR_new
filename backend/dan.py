from pydantic import BaseModel
from typing import Optional


# Схема для создания автора
class AuthorCreate(BaseModel):
    name: str
    phone_number: str
    email: str
    description: str
    link: Optional[str] = None

    class Config:
        orm_mode = True


# Схема для получения данных о авторе
class AuthorRead(AuthorCreate):
    id: int

    class Config:
        orm_mode = True


# Схема для создания коллекции
class CollectionCreate(BaseModel):
    name: str
    author_id: int

    class Config:
        orm_mode = True


# Схема для получения данных о коллекции
class CollectionRead(CollectionCreate):
    id: int

    class Config:
        orm_mode = True


# Схема для создания ювелирного изделия
class JewelryCreate(BaseModel):
    name: str
    price: float
    description: str
    collection_id: Optional[int] = None
    author_id: int
    author_link: Optional[str] = None
    three_d_file: Optional[str] = None

    class Config:
        orm_mode = True


# Схема для получения данных о ювелирном изделии
class JewelryRead(JewelryCreate):
    id: int

    class Config:
        orm_mode = True
