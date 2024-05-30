import pymysql
import pandas as pd



class TradeRepository():
    
    def __init__(self):
        self.conn = pymysql.connect(
            host='localhost',
            port=3306,
            user='root',
            password='password',
            database='turingdb',
            charset='utf8'
            )   
        self.cur = self.conn.cursor()
        
        
    def save(self,dataFrame:pd.DataFrame):
        query = "INSERT INTO trades(ord_dt,ord_gno_brno,odno,ord_dvsn_name,sll_buy_dvsn_cd,sll_buy_dvsn_cd_name,pdno,prdt_name,ord_qty,ord_tmd,tot_ccld_qty,avg_prvs,tot_ccld_amt,ord_dvsn_cd) values(%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)"
        value = (dataFrame['ord_dt'],dataFrame['ord_gno_brno'],dataFrame['odno'],dataFrame['ord_dvsn_name'],dataFrame['sll_buy_dvsn_cd'],
                 dataFrame['sll_buy_dvsn_cd_name'],dataFrame['pdno'],dataFrame['prdt_name'],dataFrame['ord_qty'],dataFrame['ord_tmd'],
                 dataFrame['tot_ccld_qty'],dataFrame['avg_prvs'],dataFrame['tot_ccld_amt'],dataFrame['ord_dvsn_cd'])
        save = self.cur.execute(query,value)
        print(save)
        self.conn.commit()
        self.conn.close()
        