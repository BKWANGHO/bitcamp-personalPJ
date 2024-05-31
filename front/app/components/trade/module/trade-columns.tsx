import { Link, Typography } from '@mui/material'
import { rowSelectionStateInitializer } from '@mui/x-data-grid/internals'
import { ITrade } from '../model/trade'
import { GridColDef } from '@mui/x-data-grid'
import { PG } from '../../common/enums/PG'
import { MyTypography } from '../../common/style/cell'
import { useDispatch } from 'react-redux'
import { deleteTrade } from '../service/trade.service'


interface CellType{
    row : ITrade 
}




export default function tradesColums(): GridColDef[] {
    const dispatch = useDispatch()

    return [
        {
        flex: 0.04,
        headerAlign: 'center',
        minWidth: 30,
        sortable: false,
        field: 'id',
        headerName: 'ID',
        renderCell : ({row}:CellType) => MyTypography(row.id,"1rem")
    },
    {
        flex: 0.04,
        headerAlign: 'center',
        minWidth: 30,
        sortable: false,
        field: 'day',
        headerName: '거래일',
        renderCell : ({row}:CellType) => MyTypography(row.ordDt,"1rem")  
    }, 
     {
        flex: 0.04,
        headerAlign: 'center',
        minWidth: 30,
        sortable: false,
        field: 'time',
        headerName: '거래시각',
        renderCell : ({row}:CellType) => MyTypography(row.ordTmd,"1rem")  
    },
    {
        flex: 0.04,
        headerAlign: 'center',
        minWidth: 30,
        sortable: false,
        field: 'productName',
        headerName: '상품명',
        renderCell : ({row}:CellType) => MyTypography(<Link href={`https://m.stock.naver.com/domestic/stock/${row.pdno}/total`}>{row.prdtName}</Link>,"1rem")
    },
    {
        flex: 0.04,
        headerAlign: 'center',
        minWidth: 30,
        sortable: false,
        field: 'Qty',
        headerName: '주문수량',
        renderCell : ({row}:CellType) => MyTypography(row.ordQty,"1rem")
        
    },
    {
        flex: 0.04,
        headerAlign: 'center',
        minWidth: 30,
        sortable: false,
        field: 'prvs',
        headerName: '체결가',
        renderCell : ({row}:CellType) => MyTypography(row.avgPrvs,"1rem")
    },
    {
        flex: 0.04,
        headerAlign: 'center',
        minWidth: 30,
        sortable: false,
        field: 'totPrvs',
        headerName: '총체결가',
        renderCell : ({row}:CellType) => MyTypography(row.totCcldAmt,"1rem")
    },


]




}