'use client'
import { findAllTrades } from '@/app/components/trade/service/trade.service';
import { getAllTrades } from '@/app/components/trade/service/trade.slice';
import { parseCookies } from 'nookies';
import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form"
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import tradesColums from '@/app/components/trade/module/trade-columns';



export default function TradeHistory({params}: any) {
  const [Message, setMessage] = useState('')
  const dispatch = useDispatch()
  const tradeList = useSelector(getAllTrades)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  // const { register, handleSubmit, formState: { errors } } = useForm();
  
  useEffect(() => {
    dispatch(findAllTrades(params.id))
    .then((res:any)=>{
      console.log(res.payload)
    })
  }, [])

  const onSubmit = (data:any) => {
    console.log('입력값 : ' + JSON.stringify(data))
    fetch('http://localhost:8000/', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // access token 

      },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((data) => setMessage(data.answer))
      .catch((error) => console.log("error:", error));
  }
  // 리액트 쿼리로 실시간 뿌려주기

  return (
    <div className="w-full h-full max-w-[1200px] mx-auto">
      <div className="text-center text-black-500 text-[64px] font-bold font-['Inter'] mb-[32px]">AI 매도/매수</div>
      <div className="px-[32px] text-center">
        <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
          <input type="hidden" value={"계좌번호확인"}
            {...register('CANO', { required: true })} readOnly />
          <div className="text-black-400 flex-center text-[32px] font-normal font-['Newsreader'] my-[48px] w-full">
            <button className="h-[72px] w-[127px] bg-violet-500 rounded-lg  text-center ml-[16px]
           text-white text-2xl font-['Inter']" type='submit' >시 작</button>
          </div>
        </form>
        <div className="w-full bg-stone-50 rounded-3xl border-2
         border-neutral-200 p-[48px]">
          <p className='h-[300px]'>
            {tradeList && <DataGrid
                rows={tradeList}
                columns={tradesColums()}
                pageSizeOptions={[5, 10, 20]}
                checkboxSelection
              />}
          </p>
        </div>
      </div>
    </div>



  );
}


