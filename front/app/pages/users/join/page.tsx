'use client'
import { PG } from "@/app/components/common/enums/PG";
import { IUser } from "@/app/components/users/model/user.model";
import { joinUser } from "@/app/components/users/service/user-service";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";




export default function Join() {

    const router = useRouter();
    const dispatch = useDispatch();
    const [user, setUser] = useState({} as IUser)


    const handleUsername = (e: any) => {
        const {
            target: { value, name }
        } = e;
        setUser(dto => ({ ...dto, [name]: value }));
    }

    const handleSubmit = () => {
        console.log(user)
        dispatch(joinUser(user))
            .then((res: any) => {
                console.log(res.payload)
                if (res.payload.message === 'SUCCESS') {
                    router.push('/')
                }
            })
    }



    return (<>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-pink-500 dark:text-white">
                <img className="hover:animate-spin w-8 h-8 mr-2 animate-[wiggle_1s_ease-in-out_infinite]" src="https://img.freepik.com/premium-vector/palms-icon-logo-vector-design-template_827767-3845.jpg" alt="logo"></img>
                회원가입창
            </a>
            <div className="w-full bg-purple-300 bg-opacity-50 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Create an account
                    </h1>
                    <form className="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input type="text" onChange={handleUsername} name="username" id="username" className="animate-pulse bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com"></input>
                        </div>
                        <div>
                            <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" onChange={handleUsername} name="password" id="password" placeholder="••••••••" className="animate-pulse bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ></input>
                        </div>
                        <div>
                            <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                            <input type="password" onChange={handleUsername} name="password" id="password" placeholder="••••••••" className="animate-pulse bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                        </div>
                        <div>
                            <label htmlFor="text" className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white">이름</label>
                            <input type="name" name="name" onChange={handleUsername} id="name" placeholder="name" className="animate-pulse bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ></input>
                        </div>
                        <div>
                            <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">직업</label>
                            <input type="text" name="job" onChange={handleUsername} id="job" placeholder="job" className="animate-pulse bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ></input>
                        </div>
                        <div>
                            <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">전화번호</label>
                            <input type="text" name="phone" onChange={handleUsername} id="phone" placeholder="01012345678" className="animate-pulse bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ></input>
                        </div>
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"></input>
                            </div>
                            <div className="ml-3 text-sm">
                                <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                            </div>
                        </div>
                        <button type="button" onClick={handleSubmit} className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Already have an account? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>









    </>)
}