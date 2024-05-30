"use client"; 

import { createSlice } from "@reduxjs/toolkit";
import { findAllAccounts } from "./account-service";
import { IAccount } from "../model/account";


const accountThunks = [findAllAccounts]


interface AccountState{
    json : IAccount
    array : Array<IAccount>
}

export const initialState:AccountState={
    json : {} as IAccount,
    array :[]
}

const status = {
    pending : 'pending',
    fulfilled : 'fulfilled',
    rejected:'rejected'
}

const handlePending =(state :any)=> {
 
}
const handleFulfilled =(state :any, {payload}:any) => {
 state.array = payload
}

const handleRejected =(state :any)=> {

}

export const accountSlice = createSlice({
    name : 'accounts',
    initialState,
    reducers:{},
    extraReducers : builder=> {
        const {pending,rejected} = status;

        builder
        .addCase(findAllAccounts.fulfilled,(state :any, {payload}:any) => {state.array = payload})
    }
})
export const getAllaccounts =(state:any )=> state.account.array;



export const{} = accountSlice.actions

export default accountSlice.reducer;