'use client'
import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form"


type Inputs = {
  question: string
  category: string
  exampleRequired?: string
}

export default function Home() {
  const [Message, setMessage] = useState('')

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log('입력값 : ' + JSON.stringify(data))
    fetch('http://localhost:8000', {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((data) => setMessage(data.answer))
      .catch((error) => console.log("error:", error));
  }



  return (
    <div className="w-full h-full max-w-[1200px] mx-auto">
      <div className="text-center text-black-500 text-[64px] font-bold font-['Inter'] mb-[32px]">자동 매도/매수</div>
      <div className="px-[32px] text-center">
        <form onSubmit={handleSubmit(onSubmit)} className='w-full'>

          <div className="text-black-400 flex-center text-[32px] font-normal font-['Newsreader'] my-[48px] w-full">
            <button className="h-[72px] w-[127px] bg-violet-500 rounded-lg  text-center ml-[16px]
           text-white text-2xl font-['Inter']" type='submit' >시 작</button>
          </div>
        </form>
        <div className="w-full bg-stone-50 rounded-3xl border-2
         border-neutral-200 p-[48px]">
          <p className='h-[300px]'>
            {Message}
          </p>
        </div>
      </div>
    </div>



  );
}


