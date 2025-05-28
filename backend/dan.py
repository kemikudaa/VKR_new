from pydantic import BaseModel
from typing import Optional
from datetime import datetime


class AuthorCreate(BaseModel):
    name: str
    phone_number: str
    email: str
    description: str
    link: Optional[str] = None

    class Config:
        orm_mode = True

class AuthorRead(AuthorCreate):
    id: int

    class Config:
        orm_mode = True


class JewelryCategoryBase(BaseModel):
    name: str
    parent_id: Optional[int] = None
    description: Optional[str] = None

class JewelryCategoryCreate(JewelryCategoryBase):
    pass

class JewelryCategoryRead(JewelryCategoryBase):
    id: int
    
    class Config:
        orm_mode = True


class MaterialBase(BaseModel):
    name: str
    type: str  # metal, stone, other
    description: Optional[str] = None

class MaterialCreate(MaterialBase):
    pass

class MaterialRead(MaterialBase):
    id: int
    
    class Config:
        orm_mode = True


class CollectionCreate(BaseModel):
    name: str
    author_id: int
    description: Optional[str] = None
    created_at: Optional[datetime] = None

    class Config:
        orm_mode = True

class CollectionRead(CollectionCreate):
    id: int

    class Config:
        orm_mode = True

class JewelryCreate(BaseModel):
    name: str
    price: float
    description: str
    collection_id: Optional[int] = None
    author_id: int
    category_id: Optional[int] = None  
    author_link: Optional[str] = None
    three_d_file: Optional[str] = None
    weight: Optional[float] = None  
    dimensions: Optional[str] = None  
    sku: Optional[str] = None  
    created_at: Optional[datetime] = None  

    class Config:
        orm_mode = True

class JewelryRead(JewelryCreate):
    id: int

    class Config:
        orm_mode = True


class JewelryImageBase(BaseModel):
    file_path: str
    is_primary: bool = False
    alt_text: Optional[str] = None

class JewelryImageCreate(JewelryImageBase):
    pass

class JewelryImageRead(JewelryImageBase):
    id: int
    jewelry_id: int
    
    class Config:
        orm_mode = True


class JewelryMaterialBase(BaseModel):
    material_id: int
    quantity: Optional[float] = None

class JewelryMaterialCreate(JewelryMaterialBase):
    pass

class JewelryMaterialRead(JewelryMaterialBase):
    jewelry_id: int
    
    class Config:
        orm_mode = True