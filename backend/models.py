from sqlmodel import Field, SQLModel
from typing import Optional
from datetime import datetime

class Author(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str = Field(index=True, max_length=100)
    phone_number: str = Field(max_length=15)
    email: str = Field(index=True) 
    description: str
    link: Optional[str] = None

    def __str__(self):
        return self.name

class JewelryCategory(SQLModel, table=True):
    __tablename__ = "jewelry_category" 
    
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str = Field(max_length=50, index=True)  
    parent_id: Optional[int] = Field(default=None, foreign_key="jewelry_category.id")
    description: Optional[str] = None


class Collection(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str = Field(max_length=100, index=True)
    author_id: int = Field(foreign_key="author.id")
    description: Optional[str] = None 
    created_at: Optional[datetime] = Field(default=None)

    def __str__(self):
        return self.name


class Material(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str = Field(max_length=50, unique=True, index=True)
    type: str = Field(max_length=30, index=True) 
    description: Optional[str] = None 


class Jewelry(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str = Field(max_length=100, index=True)
    price: float = Field(gt=0) 
    description: str
    collection_id: Optional[int] = Field(default=None, foreign_key="collection.id")
    author_id: int = Field(foreign_key="author.id")
    category_id: Optional[int] = Field(default=None, foreign_key="jewelry_category.id") 
    author_link: Optional[str] = None
    three_d_file: Optional[str] = None
    weight: Optional[float] = Field(default=None, ge=0)
    dimensions: Optional[str] = None  # Размеры изделия
    sku: Optional[str] = Field(default=None, unique=True)  # Артикул товара
    created_at: Optional[datetime] = Field(default=None)

    def __str__(self):
        return self.name


class JewelryImage(SQLModel, table=True):
    __tablename__ = "jewelry_image"
    
    id: Optional[int] = Field(default=None, primary_key=True)
    jewelry_id: int = Field(foreign_key="jewelry.id")
    file_path: str
    is_primary: bool = Field(default=False)
    alt_text: Optional[str] = None 


class JewelryMaterial(SQLModel, table=True):
    __tablename__ = "jewelry_material"
    
    jewelry_id: int = Field(foreign_key="jewelry.id", primary_key=True)
    material_id: int = Field(foreign_key="material.id", primary_key=True)
    quantity: Optional[float] = Field(default=None, ge=0)