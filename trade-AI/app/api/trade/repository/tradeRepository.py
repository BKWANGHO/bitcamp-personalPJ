import pymysql



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
        
        
    def createTable(self):
        print('ghkrdls')
        q = "INSERT INTO users(id,address, job,name,password,username) values(%s,%s,%s,%s,%s,%s)"
        v = (2,"서울","백수","bae","1234","bbbbb")
        qu = "CREATE TABLE trades()"
        a = self.cur.execute(q,v)
        print(a)
        # self.cur.execute("CREATE TABLE trades()")
        self.conn.commit()
        self.conn.close()
        
    def save(self):
        
        pass
        