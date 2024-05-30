'use client'
import { IAccount } from "@/app/components/account/model/account";
import { createAccount } from "@/app/components/account/service/account-service";
import { PG } from "@/app/components/common/enums/PG";
import { IUser } from "@/app/components/users/model/user.model";
import { joinUser } from "@/app/components/users/service/user-service";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import { parseCookies } from "nookies";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";




export default function Join() {

    const router = useRouter();
    const dispatch = useDispatch();
    const [account, setAccount] = useState({} as IAccount)

    const { register, handleSubmit, formState: { errors } } = useForm();


    const onSubmit = (data: any) => {
        console.log(data)
        dispatch(createAccount(data))
            .then((res: any) => {
                console.log(res.payload)
                if (res.payload.message === 'SUCCESS') {
                    router.push(`${PG.ACCOUNT}/list`)
                }
            })
    }

    return (<>
        <div>
            <div className="bg-cover bg-center bg-fixed" style={{ backgroundImage: 'url(https://png.pngtree.com/thumb_back/fw800/background/20191116/pngtree-blue-stock-market-data-k-line-background-illustration-image_322386.jpg)' }}>
                <div className="h-screen flex justify-center items-center">
                    <div className="bg-white mx-4 p-8 rounded shadow-md w-full md:w-1/2 lg:w-1/3">
                        <h1 className="text-3xl font-bold mb-8 text-center">Create Account</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input type="hidden" value={jwtDecode<any>(parseCookies().accessToken).userId}
                                {...register('user', { required: true })} readOnly />
                            <div className="mb-4">
                                <label className="block font-semibold text-gray-700 mb-2" htmlFor="password">
                                    Password
                                </label>
                                <input {...register('acpw', { required: true, maxLength: 30 })}
                                    className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="password" type="password" placeholder="Enter your password" />
                            </div>
                            <div className="mb-4">
                                <label className="block font-semibold text-gray-700 mb-2" htmlFor="password">
                                    Confirm Password
                                </label>
                                <input {...register('acpw', { required: true, maxLength: 30 })}
                                    className="border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                    id="password" type="password" placeholder="Confirm Password" />
                            </div>
                            <div className="mb-4">
                                <label className="block font-semibold text-gray-700 mb-2" htmlFor="text">
                                    Bank
                                </label>
                                <input {...register('bank', { required: true, maxLength: 30 })}
                                    className="border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                    id="bank" type="bank" placeholder="Enter your Bank" />
                            </div>
                            {/* <select {...register('board', { required: true })}
                                id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                                     focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                                         dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                name="board"
                                defaultValue={1}>
                                {boardList.map((v: IBoard) => (<option key={v.id} value={v.id}>{v.content}</option>))}
                            </select> */}
                            <div className="mb-6">
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="submit">
                                    Create
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>)

}
