import sys
import os

sys.path.append(os.path.dirname(os.path.dirname(os.path.dirname((os.path.dirname(os.path.dirname(os.path.abspath(__file__))))))))



import json
import pandas as pd


class Reader():
    def __init__(self):
        pass

    def createDF(self, data):
        return pd.DataFrame(data,index=None)
    
    def csv(self,file) -> object:
        return pd.read_csv(f'{file}',encoding='UTF-8', thousands=',')
    
    def xls(self,file,header,usecols) -> object:
        return pd.read_csv(f'{file}', header=header, usecols=usecols)

    def json(self,file) -> object:
        return json.load(open(f'{file}.json',encoding='UTF-8'))
    
