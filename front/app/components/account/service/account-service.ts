import { createAsyncThunk } from "@reduxjs/toolkit";
import { createAccountAPI, findAllAccountsAPI } from "./account-api";
import { IAccount } from "../model/account";

export const findAllAccounts : any = createAsyncThunk(
    'accounts/findAllaccounts',
     async (id:number)=>{
    const data:any = await findAllAccountsAPI(id);
    return data
})

export const createAccount:any = createAsyncThunk(
    'accounts/createAccount',
    async (dto:IAccount)=>{
    const data : any =await createAccountAPI(dto);
    console.log('서비스 확인'+JSON.stringify(dto))
    return data
    })
