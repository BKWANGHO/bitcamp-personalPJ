"use client"; 

import { createSlice } from "@reduxjs/toolkit";
import { findAllTrades, findTradeById, findTradesBypdName, saveTrade, tradeCount } from "./trade.service";
import { ITrade } from "../model/trade";


const tradeThunks = [findAllTrades]

const status = {
    pending : 'pending',
    fulfilled : 'fulfilled',
    rejected:'rejected'
}

interface TradeState{
    json : ITrade
    array : Array<ITrade>
    message : string
}



export const initialState:TradeState={
    json : {} as ITrade,
    array :[],
    message:""
}

const handlePending =(state :any)=> {
 
}
const handleFulfilled =(state :any, {payload}:any) => {
 state.array = payload
}

const handleRejected =(state :any)=> {

}

export const tradeSlice = createSlice({
    name : 'trades',
    initialState,
    reducers:{},
    extraReducers : builder=> {
        const {pending,rejected} = status;

        builder
        .addCase(findAllTrades.fulfilled, (state :any, {payload}:any) => {state.array = payload}) 
        .addCase(findTradeById.fulfilled, (state :any, {payload}:any) => {state.json = payload}) 
        .addCase(tradeCount.fulfilled, (state :any, {payload}:any) => {state.count = payload}) 
        .addCase(findTradesBypdName.fulfilled, (state :any, {payload}:any) => {state.array = payload}) 
        
        
    }  
})
export const getAllTrades =(state:any )=> state.trade.array;
export const getTradeById =(state:any )=> state.trade.json;
export const getArtilceCount =(state:any )=> state.trade.count;

export const{} = tradeSlice.actions

export default tradeSlice.reducer;