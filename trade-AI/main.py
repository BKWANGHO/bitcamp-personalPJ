

import threading
from fastapi import FastAPI, Request
from pydantic import BaseModel
import uvicorn
from starlette.middleware.cors import CORSMiddleware
import yaml
from app.api.trade.repository.tradeRepository import TradeRepository
from app.api.trade.service.trade_service import TradeService

app = FastAPI()
    
origins = [
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
service = TradeService()

stocks = ["005930","000660","000990","033640","093370",
                  "066570","010120","260870","118990","217820","035510"]

with open('config.yaml', encoding='UTF-8') as f:
    cfg = yaml.load(f, Loader=yaml.FullLoader)

url = cfg['URL_BASE']


@app.get("/")
async def tradeJin():
        key_JIN = cfg['APP_KEY_JIN']
        secret_JIN = cfg['APP_SECRET_JIN']
        cano_JIN = cfg['CANO_JIN']
        
        key_SOO = cfg['APP_KEY_SOO']
        secret_SOO = cfg['APP_SECRET_SOO']
        cano_SOO = cfg['CANO_SOO']
        
        key_HO = cfg['APP_KEY_HO']
        secret_HO = cfg['APP_SECRET_HO']
        cano_HO = cfg['CANO_HO']
        
        key_JU = cfg['APP_KEY_JU']
        secret_JU = cfg['APP_SECRET_JU']
        cano_JU = cfg['CANO_JU']
        
        key_HOJU = cfg['APP_KEY_HOJU']
        secret_HOJU = cfg['APP_SECRET_HOJU']
        cano_HOJU = cfg['CANO_HOJU']
        
        key_HOHYUN = cfg['APP_KEY_HOHYUN']
        secret_HOHYUN = cfg['APP_SECRET_HOHYUN']
        cano_HOHYUN = cfg['CANO_HOHYUN']
        
        
        thread_1 = threading.Thread(target = service.start, args=(key_JIN,secret_JIN,cano_JIN,url,2,0.1,stocks))
        thread_2 = threading.Thread(target = service.start, args=(key_SOO,secret_SOO,cano_SOO,url,3,0.05,stocks))
        thread_3 = threading.Thread(target = service.start, args=(key_HO,secret_HO,cano_HO,url,1,0.1,stocks))
        thread_4 = threading.Thread(target = service.start, args=(key_JU,secret_JU,cano_JU,url,4,0.01,stocks))
        thread_5 = threading.Thread(target = service.start, args=(key_HOJU,secret_HOJU,cano_HOJU,url,5,0.3,stocks))
        thread_6 = threading.Thread(target = service.start, args=(key_HOHYUN,secret_HOHYUN,cano_HOHYUN,url,6,0.2,stocks))
        
        thread_1.start()
        thread_2.start()
        thread_3.start()
        thread_4.start()
        thread_5.start()
        thread_6.start()
        
        '''
        삼성전자 : 005930
        sk하이닉스 : 000660
        DB하이텍 : 000990
        네패스 : 033640
        후성 : 093370
        LG전자 : 066570
        LS일렉트릭 : 010120
        SK시그넷 : 260870
        모트렉스 : 118990
        원익피앤이 : 217820
        신세계I&C : 035510
        '''
    
    
    
if __name__ == "__main__":
    uvicorn.run(app, host="localhost", port=8000)
    