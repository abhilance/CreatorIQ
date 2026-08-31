from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

# We will replace this with your actual database URL in the next step!
SQLALCHEMY_DATABASE_URL = "postgresql+psycopg2://neondb_owner:npg_OpG9s3DmnlWh@ep-shy-dust-aeond53w-pooler.c-2.us-east-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require"

engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

# Dependency to get the database session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()