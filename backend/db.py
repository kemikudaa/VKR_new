from sqlmodel import create_engine, SQLModel
from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine

# Настройки для подключения к базе данных SQLite
SQLALCHEMY_DATABASE_URL = "sqlite:///./test.db"  # Путь к вашей базе данных

# Создание движка SQLAlchemy
engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False})

# Создание сессии
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Функция для создания всех таблиц
def init_db():
    SQLModel.metadata.create_all(bind=engine)
