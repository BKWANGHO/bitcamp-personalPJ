'use client'
import { findAllTrades, findTradesBypdName } from '@/app/components/trade/service/trade.service';
import { getAllTrades } from '@/app/components/trade/service/trade.slice';
import { parseCookies } from 'nookies';
import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form"
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import tradesColums from '@/app/components/trade/module/trade-columns';
import { ITrade } from '@/app/components/trade/model/trade';



export default function TradeHistory({ params }: any) {
  const [message, setMessage] = useState('')
  const dispatch = useDispatch()
  const tradeList = useSelector(getAllTrades)

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm()

  // const { register, handleSubmit, formState: { errors } } = useForm();

  useEffect(() => {
    
    dispatch(findAllTrades(params.id))
      .then((res: any) => {
        console.log(res.payload)
      })
  }, [])

  const pySubmit = (e: any) => {
    fetch('http://localhost:8000/', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // access token 
      },
      // body: JSON.stringify(watch("acno"))
    })
      // .then((response) => response.json())
      // .then((data) => setMessage(data.answer))
      // .catch((error) => console.log("error:", error));
  }

  const onSubmit = (data:any) => {
    dispatch(findTradesBypdName(data.prdtName))
  }
  // 리액트 쿼리로 실시간 뿌려주기

  return (
    <div className="w-full h-full max-w-[1200px] mx-auto">
      <div className="px-[32px] text-center">
        <div className="text-center text-black-500 text-[64px] font-bold font-['Inter'] mb-[32px]">자동 매도/매수</div>

        <input type="hidden" value={"계좌번호확인"} />
        {/* // {...register('CANO', { required: true })} readOnly /> */}
        <div className="text-black-400 flex-center text-[32px] font-normal font-['Newsreader'] my-[48px] w-full">
          <button onClick={pySubmit} className="h-[72px] w-[127px] bg-violet-500 rounded-lg  text-center ml-[16px]
           text-white text-2xl font-['Inter']" type='button' >시 작</button>
        </div>

        <div className="w-full bg-stone-50 rounded-3xl border-2
         border-neutral-200 p-[48px] h-auto"  >
          <div className="text-center text-black-500 text-[30px] font-bold font-['Inter'] mb-[15px]">자동 거래내역 검색</div>

          <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto mb-[15px]">
            <label htmlFor="text" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input type="prdtName" id="prdtName"   {...register('prdtName', { required: true })} 
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="검색 종목을 입력하세요" required />
              <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>
          </form>

          <div className='h-auto text-center'>
            {tradeList && <DataGrid
              rows={tradeList}
              columns={tradesColums()}
              pageSizeOptions={[5, 10, 20]}
              checkboxSelection
            />}
          </div>
        </div>
      </div>
    </div>



  );
}


