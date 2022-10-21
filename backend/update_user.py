from db import db_session
from models import User

user = User.query.first()
user.gmail = 'vas@gm.com'
db_session.commit()
