from pydantic import BaseModel

# What we expect from the user when they sign up
class UserCreate(BaseModel):
    email: str
    password: str

# What we send back (Notice we NEVER send back the password!)
class UserResponse(BaseModel):
    id: int
    email: str
    is_active: bool

    class Config:
        from_attributes = True