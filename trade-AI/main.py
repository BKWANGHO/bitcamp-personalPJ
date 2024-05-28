

from fastapi import FastAPI
import uvicorn
from starlette.middleware.cors import CORSMiddleware
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
@app.post("/")
async def trade():
        
        stocks = ["005930","000660","000990","033640","093370",
                  "066570","010120","260870","118990","217820","035510"]
        service.start(stocks)
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
    
@app.get("/trade")
async def getTrade():
    getTrade = service.get_trade()
    print(getTrade)
    
    
if __name__ == "__main__":
    uvicorn.run(app, host="localhost", port=8000)
    