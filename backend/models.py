from sqlmodel import Field, SQLModel
from typing import Optional

class Author(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str = Field(index=True, max_length=100)
    phone_number: str = Field(max_length=15)  # Формат для телефона
    email: str
    description: str
    link: Optional[str] = None  # Ссылка на автора

    def __str__(self):
        return self.name


class Collection(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str = Field(max_length=100)
    author_id: int = Field(foreign_key="author.id")

    def __str__(self):
        return self.name


class Jewelry(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str = Field(max_length=100)
    price: float
    description: str
    collection_id: Optional[int] = Field(default=None, foreign_key="collection.id")
    author_id: int = Field(foreign_key="author.id")
    author_link: Optional[str] = None  # Ссылка на автора
    three_d_file: Optional[str] = None  # Путь к файлу 3D

    def __str__(self):
        return self.name
