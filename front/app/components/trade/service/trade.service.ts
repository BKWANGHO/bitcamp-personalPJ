import { createAsyncThunk } from "@reduxjs/toolkit";
import { tradeCountAPI, deleteTradeAPI, findAllTradesAPI, findTradeByIdAPI, modifyTradeAPI, saveTradeAPI, findTradesBypdNameAPI } from "./trade.api";
import { ITrade } from "../model/trade";

export const findAllTrades : any = createAsyncThunk(
    'trades/findAllTrades',
     async (id:number)=>{
    const data:any = await findAllTradesAPI(id);
    
    return data
})

export const findTradesBypdName : any = createAsyncThunk(
    'trades/findTradesBypdName',
     async (prdtName:string)=>{
    const data:any = await findTradesBypdNameAPI(prdtName);
    console.log('t서비스'+prdtName)
    return data
})

export const findTradeById : any = createAsyncThunk(
    'trades/findTradeById',
     async (id:number)=>{
    const data:any = await findTradeByIdAPI(id);
    return data
})
export const deleteTrade : any = createAsyncThunk(
    'trades/deleteTrade',
     async (id:number)=>{
    const data:any = await deleteTradeAPI(id);
    return data
})

export const tradeCount : any = createAsyncThunk(
    'trades/tradeCount',
     async ()=>{
    const data:any = await tradeCountAPI();
    return data
})

export const saveTrade : any = createAsyncThunk(
    'trades/saveTrade',
     async (trade:ITrade)=>{
    const data:any = await saveTradeAPI(trade);
    return data
})

export const modifyArtilce : any = createAsyncThunk(
    'users/modifyArtilce',
     async (dto:ITrade)=>{
    const data:any = await modifyTradeAPI(dto);
    return data
})