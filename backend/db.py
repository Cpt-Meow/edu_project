from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import scoped_session, sessionmaker

engine = create_engine("postgresql://rxsssfnr:UStZGT8zT3nNF4cicf68C44G3L3tjzXU@mouse.db.elephantsql.com/rxsssfnr") # noqa
db_session = scoped_session(sessionmaker(bind=engine))

Base = declarative_base()
Base.query = db_session.query_property()
