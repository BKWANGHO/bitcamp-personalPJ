

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


@app.get("/JIN")
async def tradeJin():
        key_JIN = cfg['APP_KEY_JIN']
        secret_JIN = cfg['APP_SECRET_JIN']
        cano_JIN = cfg['CANO_JIN']
        print("Jin 시작")
        service.start(key_JIN,secret_JIN,cano_JIN,url,2,stocks)
        
@app.get("/SOO")
async def tradeSoo():
        key_SOO = cfg['APP_KEY_SOO']
        secret_SOO = cfg['APP_SECRET_SOO']
        cano_SOO = cfg['CANO_SOO']
        print("Soo 시작")
        service.start(key_SOO,secret_SOO,cano_SOO,url,3,stocks)

@app.get("/HO")
async def tradeHo():
        key_HO = cfg['APP_KEY_HO']
        secret_HO = cfg['APP_SECRET_HO']
        cano_HO = cfg['CANO_HO']
        print("HO 시작")
        service.start(key_HO,secret_HO,cano_HO,url,1,stocks)
        
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
    