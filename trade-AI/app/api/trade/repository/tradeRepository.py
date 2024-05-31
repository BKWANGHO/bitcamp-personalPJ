import pymysql
import pandas as pd
from sqlalchemy import create_engine


class TradeRepository():
    
    def __init__(self):

        self.MYSQL_HOSTNAME = 'localhost' # you probably don't need to change this
        self.MYSQL_USER = 'root'
        self.MYSQL_PASSWORD = 'password'
        self.MYSQL_DATABASE = 'turingdb'

        self.connection_string = f'mysql+pymysql://{self.MYSQL_USER}:{self.MYSQL_PASSWORD}@{self.MYSQL_HOSTNAME}/{self.MYSQL_DATABASE}'

        self.db = create_engine(self.connection_string)
        
        
    def save(self,dataFrame:pd.DataFrame):
        
        dataFrame.to_sql(con=self.db, name='trades', if_exists='append', index=False)
        
        