import { Link, Typography } from '@mui/material'
import { GridRowId, GridColDef } from '@mui/x-data-grid'
import { rowSelectionStateInitializer } from '@mui/x-data-grid/internals'
import { IAccount } from '../model/account'
import { PG } from '../../common/enums/PG'


interface CellType {
    row: IAccount
}



export default function accountsColums(): GridColDef[] {

    return [
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'id',
            headerName: 'ID',
            renderCell: ({ row }: CellType) => <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}>  {row.id}</Typography>

        },
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'accountname',
            headerName: '계좌번호',
            renderCell: ({ row }: CellType) => <Typography textAlign="center"
                sx={{ fontSize: "1.5rem" }}><Link href={`${PG.ACCOUNT}/detail/${row.id}`} > {row.acno}</Link></Typography>


        },
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'accountType',
            headerName: '계좌 타입',
            renderCell: ({ row }: CellType) => <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}>  {row.actype}</Typography>

        },
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'regDate',
            headerName: '생성일',
            renderCell: ({ row }: CellType) => <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}>  {row.regDate}</Typography>
        },
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'modDate',
            headerName: '수정일',
            renderCell: ({ row }: CellType) => <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}>  {row.modDate}</Typography>
        }



    ]

}