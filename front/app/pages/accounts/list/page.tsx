'use client'

import CardButton from "@/app/atoms/button/CardButton"
import { IAccount } from "@/app/components/account/model/account"
import { findAllAccounts } from "@/app/components/account/service/account-service"
import { getAllaccounts } from "@/app/components/account/service/account-slice"
import { IUser } from "@/app/components/users/model/user.model"
import { jwtDecode } from "jwt-decode"
import { parseCookies } from "nookies"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

export default function AccountCards() {

    const dispatch = useDispatch()
    const allAccounts: IAccount[] = useSelector(getAllaccounts)

    const userId = parseCookies()?.accessToken ? jwtDecode<any>(parseCookies()?.accessToken).userId : 0

    useEffect(() => {
        dispatch(findAllAccounts(userId))
    }, [])

    


    return (<>
        <h1>계좌 목록</h1>
        <ul className="flex flex-wrap gap-[16px]" >
            {allAccounts && allAccounts.map((v) => (
                <CardButton key={v.id} id={v.id}
                    acno={v.acno}
                    actype={v.actype} />
            ))}
        </ul>
    </>
    )
}