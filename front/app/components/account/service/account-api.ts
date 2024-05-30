
import  instance  from "@/app/components/common/configs/axios-config"
import { IAccount } from "../model/account"


export const findAllAccountsAPI = async (id:number)=>{

try{
    const response = await instance().get('/accounts/list',{
        params:{id}
    })
return response.data
}catch(error){
console.log(error)

}}

export const createAccountAPI = async (dto:IAccount)=>{

    try {
        const response = await instance().post('/accounts/save',dto)
            
        console.log('api 확인'+JSON.stringify(dto))
        return response.data
    }catch(error){
        console.log(error)
    }
}
