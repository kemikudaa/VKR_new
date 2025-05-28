from fastapi import FastAPI, HTTPException, Depends, Query
from sqlalchemy.orm import Session
from models import Author, Collection, Jewelry, JewelryCategory, Material, JewelryImage, JewelryMaterial
from dan import (
    AuthorCreate, AuthorRead, CollectionCreate, CollectionRead, 
    JewelryCreate, JewelryRead, JewelryCategoryCreate, JewelryCategoryRead,
    MaterialCreate, MaterialRead, JewelryImageCreate, JewelryImageRead,
    JewelryMaterialCreate, JewelryMaterialRead
)
from db import SessionLocal, init_db
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from sqlmodel import select, Session as SQLModelSession
from typing import Optional, List

app = FastAPI(title="Jewelry Platform API", version="1.0.0")

origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.mount("/models", StaticFiles(directory="models"), name="models")
app.mount("/images", StaticFiles(directory="images"), name="images")

@app.get("/")
def read_root():
    return {"message": "Jewelry Platform API", "version": "1.0.0"}

@app.on_event("startup")
def on_startup():
    init_db()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# ==================== АВТОРЫ ====================

@app.post("/authors/", response_model=AuthorRead)
def create_author(author: AuthorCreate, db: Session = Depends(get_db)):
    db_author = Author(
        name=author.name, 
        phone_number=author.phone_number, 
        email=author.email,
        description=author.description, 
        link=author.link
    )
    db.add(db_author)
    db.commit()
    db.refresh(db_author)
    return db_author

@app.get("/authors/", response_model=List[AuthorRead])
def get_authors(db: Session = Depends(get_db)):
    authors = db.query(Author).all()
    return authors

@app.get("/authors/{author_id}", response_model=AuthorRead)
def get_author_by_id(author_id: int, db: Session = Depends(get_db)):
    author = db.query(Author).filter(Author.id == author_id).first()
    if author is None:
        raise HTTPException(status_code=404, detail="Author not found")
    return author

# ==================== КАТЕГОРИИ ====================

@app.post("/categories/", response_model=JewelryCategoryRead)  
def create_category(category: JewelryCategoryCreate, db: Session = Depends(get_db)):
    db_category = JewelryCategory(
        name=category.name,
        parent_id=category.parent_id,
        description=category.description
    )
    db.add(db_category)
    db.commit()
    db.refresh(db_category)
    return db_category

@app.get("/categories/", response_model=List[JewelryCategoryRead])
def get_categories(db: Session = Depends(get_db)):
    categories = db.query(JewelryCategory).all()
    return categories

@app.get("/categories/{category_id}", response_model=JewelryCategoryRead)
def get_category_by_id(category_id: int, db: Session = Depends(get_db)):
    category = db.query(JewelryCategory).filter(JewelryCategory.id == category_id).first()
    if category is None:
        raise HTTPException(status_code=404, detail="Category not found")
    return category

# ==================== МАТЕРИАЛЫ ====================

@app.post("/materials/", response_model=MaterialRead)
def create_material(material: MaterialCreate, db: Session = Depends(get_db)):
    existing_material = db.query(Material).filter(Material.name == material.name).first()
    if existing_material:
        raise HTTPException(status_code=400, detail="Material with this name already exists")
    
    db_material = Material(
        name=material.name,
        type=material.type,
        description=material.description
    )
    db.add(db_material)
    db.commit()
    db.refresh(db_material)
    return db_material

@app.get("/materials/", response_model=List[MaterialRead])
def get_materials(
    material_type: Optional[str] = Query(None, description="Filter by material type"),
    db: Session = Depends(get_db)
):
    query = db.query(Material)
    if material_type:
        query = query.filter(Material.type == material_type)
    materials = query.all()
    return materials

@app.get("/materials/{material_id}", response_model=MaterialRead)
def get_material_by_id(material_id: int, db: Session = Depends(get_db)):
    material = db.query(Material).filter(Material.id == material_id).first()
    if material is None:
        raise HTTPException(status_code=404, detail="Material not found")
    return material

# ==================== КОЛЛЕКЦИИ ====================

@app.post("/collections/", response_model=CollectionRead)
def create_collection(collection: CollectionCreate, db: Session = Depends(get_db)):
    author = db.query(Author).filter(Author.id == collection.author_id).first()
    if not author:
        raise HTTPException(status_code=404, detail="Author not found")
    
    db_collection = Collection(
        name=collection.name, 
        author_id=collection.author_id,
        description=collection.description,
        created_at=collection.created_at
    )
    db.add(db_collection)
    db.commit()
    db.refresh(db_collection)
    return db_collection

@app.get("/collections/", response_model=List[CollectionRead])
def get_collections(
    author_id: Optional[int] = Query(None, description="Filter by author ID"),
    db: Session = Depends(get_db)
):
    query = db.query(Collection)
    if author_id:
        query = query.filter(Collection.author_id == author_id)
    collections = query.all()
    return collections

@app.get("/collections/{collection_id}", response_model=CollectionRead)
def get_collection_by_id(collection_id: int, db: Session = Depends(get_db)):
    collection = db.query(Collection).filter(Collection.id == collection_id).first()
    if collection is None:
        raise HTTPException(status_code=404, detail="Collection not found")
    return collection

# ==================== ЮВЕЛИРНЫЕ ИЗДЕЛИЯ ====================

@app.post("/jewelries/", response_model=JewelryRead)
def create_jewelry(jewelry: JewelryCreate, db: Session = Depends(get_db)):
    # Проверяем существование автора
    author = db.query(Author).filter(Author.id == jewelry.author_id).first()
    if not author:
        raise HTTPException(status_code=404, detail="Author not found")
    
    # Проверяем существование коллекции (если указана)
    if jewelry.collection_id:
        collection = db.query(Collection).filter(Collection.id == jewelry.collection_id).first()
        if not collection:
            raise HTTPException(status_code=404, detail="Collection not found")
    
    # Проверяем существование категории (если указана)
    if jewelry.category_id:
        category = db.query(JewelryCategory).filter(JewelryCategory.id == jewelry.category_id).first()
        if not category:
            raise HTTPException(status_code=404, detail="Category not found")
    
    db_jewelry = Jewelry(
        name=jewelry.name, 
        price=jewelry.price, 
        description=jewelry.description,
        collection_id=jewelry.collection_id, 
        author_id=jewelry.author_id,
        category_id=jewelry.category_id,
        author_link=jewelry.author_link, 
        three_d_file=jewelry.three_d_file,
        weight=jewelry.weight,
        dimensions=jewelry.dimensions,
        sku=jewelry.sku,
        created_at=jewelry.created_at
    )
    db.add(db_jewelry)
    db.commit()
    db.refresh(db_jewelry)
    return db_jewelry

@app.get("/jewelries/", response_model=List[JewelryRead])
def get_jewelries(
    author_id: Optional[int] = Query(None, description="Filter by author ID"),
    collection_id: Optional[int] = Query(None, description="Filter by collection ID"),
    category_id: Optional[int] = Query(None, description="Filter by category ID"),
    min_price: Optional[float] = Query(None, description="Minimum price"),
    max_price: Optional[float] = Query(None, description="Maximum price"),
    search: Optional[str] = Query(None, description="Search in name and description"),
    limit: int = Query(50, description="Limit results"),
    offset: int = Query(0, description="Offset results"),
    db: Session = Depends(get_db)
):
    query = db.query(Jewelry)
    
    if author_id:
        query = query.filter(Jewelry.author_id == author_id)
    if collection_id:
        query = query.filter(Jewelry.collection_id == collection_id)
    if category_id:
        query = query.filter(Jewelry.category_id == category_id)
    if min_price:
        query = query.filter(Jewelry.price >= min_price)
    if max_price:
        query = query.filter(Jewelry.price <= max_price)
    if search:
        query = query.filter(Jewelry.name.contains(search) | Jewelry.description.contains(search))
    
    jewelries = query.offset(offset).limit(limit).all()
    return jewelries

@app.get("/jewelries/{jewelry_id}", response_model=dict)
def get_jewelry_by_id(jewelry_id: int, db: SQLModelSession = Depends(get_db)):
    jewelry = db.execute(select(Jewelry).where(Jewelry.id == jewelry_id)).scalars().first()

    if jewelry is None:
        raise HTTPException(status_code=404, detail="Jewelry not found")

    # Получаем связанные данные
    collection = None
    if jewelry.collection_id:
        collection = db.execute(select(Collection).where(Collection.id == jewelry.collection_id)).scalars().first()
    
    author = db.execute(select(Author).where(Author.id == jewelry.author_id)).scalars().first()
    
    category = None
    if jewelry.category_id:
        category = db.execute(select(JewelryCategory).where(JewelryCategory.id == jewelry.category_id)).scalars().first()
    
    # Получаем изображения
    images = db.execute(select(JewelryImage).where(JewelryImage.jewelry_id == jewelry_id)).scalars().all()
    
    # Получаем материалы
    materials_query = db.execute(
        select(Material, JewelryMaterial.quantity)
        .join(JewelryMaterial, Material.id == JewelryMaterial.material_id)
        .where(JewelryMaterial.jewelry_id == jewelry_id)
    ).all()

    return {
        "id": jewelry.id,
        "name": jewelry.name or "Имя не указано",
        "price": jewelry.price if jewelry.price else "Цена не указана",
        "description": jewelry.description or "Описание не указано",
        "weight": jewelry.weight,
        "dimensions": jewelry.dimensions,
        "sku": jewelry.sku,
        "created_at": jewelry.created_at,
        "collection": {
            "id": collection.id if collection else None,
            "name": collection.name if collection else "Коллекция не указана"
        },
        "author": {
            "id": author.id if author else None,
            "name": author.name if author else "Автор не указан",
            "link": author.link if author and author.link else "Ссылка на автора не указана"
        },
        "category": {
            "id": category.id if category else None,
            "name": category.name if category else "Категория не указана"
        },
        "images": [
            {
                "id": img.id,
                "file_path": img.file_path,
                "is_primary": img.is_primary,
                "alt_text": img.alt_text
            } for img in images
        ],
        "materials": [
            {
                "id": material.id,
                "name": material.name,
                "type": material.type,
                "description": material.description,
                "quantity": quantity
            } for material, quantity in materials_query
        ],
        "three_d_file": jewelry.three_d_file if jewelry.three_d_file else None
    }

# ==================== ИЗОБРАЖЕНИЯ ====================

@app.post("/jewelries/{jewelry_id}/images/", response_model=JewelryImageRead)
def create_jewelry_image(
    jewelry_id: int, 
    image: JewelryImageCreate, 
    db: Session = Depends(get_db)
):
    jewelry = db.query(Jewelry).filter(Jewelry.id == jewelry_id).first()
    if not jewelry:
        raise HTTPException(status_code=404, detail="Jewelry not found")
    
    # Если это основное изображение, убираем флаг у других
    if image.is_primary:
        db.query(JewelryImage).filter(
            JewelryImage.jewelry_id == jewelry_id,
            JewelryImage.is_primary == True
        ).update({"is_primary": False})
    
    db_image = JewelryImage(
        jewelry_id=jewelry_id,
        file_path=image.file_path,
        is_primary=image.is_primary,
        alt_text=image.alt_text
    )
    db.add(db_image)
    db.commit()
    db.refresh(db_image)
    return db_image

@app.get("/jewelries/{jewelry_id}/images/", response_model=List[JewelryImageRead])
def get_jewelry_images(jewelry_id: int, db: Session = Depends(get_db)):
    jewelry = db.query(Jewelry).filter(Jewelry.id == jewelry_id).first()
    if not jewelry:
        raise HTTPException(status_code=404, detail="Jewelry not found")
    
    images = db.query(JewelryImage).filter(JewelryImage.jewelry_id == jewelry_id).all()
    return images

@app.delete("/images/{image_id}")
def delete_jewelry_image(image_id: int, db: Session = Depends(get_db)):
    image = db.query(JewelryImage).filter(JewelryImage.id == image_id).first()
    if not image:
        raise HTTPException(status_code=404, detail="Image not found")
    
    db.delete(image)
    db.commit()
    return {"message": "Image deleted successfully"}

# ==================== СВЯЗИ МАТЕРИАЛОВ ====================

@app.post("/jewelries/{jewelry_id}/materials/", response_model=JewelryMaterialRead)
def add_material_to_jewelry(
    jewelry_id: int,
    material_data: JewelryMaterialCreate,
    db: Session = Depends(get_db)
):
    jewelry = db.query(Jewelry).filter(Jewelry.id == jewelry_id).first()
    if not jewelry:
        raise HTTPException(status_code=404, detail="Jewelry not found")
    
    material = db.query(Material).filter(Material.id == material_data.material_id).first()
    if not material:
        raise HTTPException(status_code=404, detail="Material not found")
    
    existing = db.query(JewelryMaterial).filter(
        JewelryMaterial.jewelry_id == jewelry_id,
        JewelryMaterial.material_id == material_data.material_id
    ).first()
    
    if existing:
        raise HTTPException(status_code=400, detail="Material already added to this jewelry")
    
    db_jewelry_material = JewelryMaterial(
        jewelry_id=jewelry_id,
        material_id=material_data.material_id,
        quantity=material_data.quantity
    )
    db.add(db_jewelry_material)
    db.commit()
    db.refresh(db_jewelry_material)
    return db_jewelry_material

@app.get("/jewelries/{jewelry_id}/materials/", response_model=List[dict])
def get_jewelry_materials(jewelry_id: int, db: Session = Depends(get_db)):
    jewelry = db.query(Jewelry).filter(Jewelry.id == jewelry_id).first()
    if not jewelry:
        raise HTTPException(status_code=404, detail="Jewelry not found")
    
    materials = db.query(Material, JewelryMaterial.quantity).join(
        JewelryMaterial, Material.id == JewelryMaterial.material_id
    ).filter(JewelryMaterial.jewelry_id == jewelry_id).all()
    
    return [
        {
            "material_id": material.id,
            "name": material.name,
            "type": material.type,
            "description": material.description,  
            "quantity": quantity
        }
        for material, quantity in materials
    ]

@app.delete("/jewelries/{jewelry_id}/materials/{material_id}")
def remove_material_from_jewelry(
    jewelry_id: int, 
    material_id: int, 
    db: Session = Depends(get_db)
):
    jewelry_material = db.query(JewelryMaterial).filter(
        JewelryMaterial.jewelry_id == jewelry_id,
        JewelryMaterial.material_id == material_id
    ).first()
    
    if not jewelry_material:
        raise HTTPException(status_code=404, detail="Material not found in this jewelry")
    
    db.delete(jewelry_material)
    db.commit()
    return {"message": "Material removed from jewelry successfully"}

# ==================== СТАТИСТИКА ====================

@app.get("/statistics/")
def get_statistics(db: Session = Depends(get_db)):
    """Получение статистики по платформе"""
    authors_count = db.query(Author).count()
    collections_count = db.query(Collection).count()
    jewelries_count = db.query(Jewelry).count()
    categories_count = db.query(JewelryCategory).count()
    materials_count = db.query(Material).count()
    images_count = db.query(JewelryImage).count()
    
    return {
        "authors": authors_count,
        "collections": collections_count,
        "jewelries": jewelries_count,
        "categories": categories_count,
        "materials": materials_count,
        "images": images_count
    }
