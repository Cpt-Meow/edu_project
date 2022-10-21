from db import db_session
from models import User

user = User(name='Вася', login='vasya', email='vasya@gm.com', password='123')
db_session.add(user)
db_session.commit()
