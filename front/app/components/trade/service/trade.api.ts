import  instance  from "@/app/components/common/configs/axios-config"
import { ITrade } from "../model/trade"


export const findAllTradesAPI = async (id:number)=>{
    try{
    const response = await instance().get('/trades/list',{
        params:{id}
    })
    return response.data
    }catch(error){
    console.log(error)
    }}


export const findTradeByIdAPI = async (id:number)=>{
    try{
        const response = await instance().get('/trades/detail',{params:{id}})
        return response.data
    }catch(error){
    console.log(error)
    }}


export const deleteTradeAPI = async (id:number)=>{
    try{
        const response = await instance().delete('/trades/delete',{params:{id}})
        return response.data
    }catch(error){
        console.log(error)
    }}

 
export const tradeCountAPI = async ()=>{
    try{
        const response = await instance().get('/trades/count',{})
        return response.data
    }catch(error){
    console.log(error)
    }}        
    
    
export const saveTradeAPI = async (trade:ITrade)=>{
    try{
        const response = await instance().post('/trades',trade)
        console.log(JSON.stringify(trade))
        return response.data
    }catch(error){
        console.log(error)
    }}        
        
export const modifyTradeAPI = async (trade:ITrade)=>{
    try{
        const response = await instance().put('/trades/modify',trade)
        console.log(JSON.stringify(trade))
        return response.data
    }catch(error){
        console.log(error)
    }}        