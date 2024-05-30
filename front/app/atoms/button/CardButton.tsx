import { IAccount } from "@/app/components/account/model/account";
import { PG } from "@/app/components/common/enums/PG";
import exp from "constants";
import Link from "next/link";




export default function CardButton ({id,acno,actype}:IAccount) {
 return(<li >
 <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link href={`${PG.TRADE}/list/${id}`}>
            <img className="rounded-t-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3K56kCiNxL7fSxa36KwXPP2NbqKNHpZYUyg&s" alt="" />
        </Link>
        <div className="p-5">
            <Link href={`${PG.TRADE}/list/${id}`}>
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    계좌번호 : {acno}</h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{actype}</p>
            <Link href={`${PG.TRADE}/list/${id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center
             text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none
              focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                계좌상세보기
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
            </Link>
        </div>
    </div>
 </li>)
}



exp