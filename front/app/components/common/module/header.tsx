'use client';
import { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useRouter } from 'next/navigation';
import { PG } from '@/app/components/common/enums/PG';
import Link from 'next/link';
import Linkbutton, { pages } from '@/app/atoms/button/LinkButton';
import { parseCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import { destroyCookie, parseCookies } from 'nookies';
import { useDispatch } from 'react-redux';
import { findUserById, logout } from '../../users/service/user-service';
import { useSelector } from 'react-redux';
import { getUserById } from '../../users/service/user-slice';
import { jwtDecode } from 'jwt-decode';


function Header() {

  const [showProfile,setShowProfile] = useState(false)
  const dispatch = useDispatch()
  const router = useRouter()
  const getuser = useSelector(getUserById)
  
  useEffect(()=>{
    console.log(getuser);
    if(parseCookies().accessToken){
      setShowProfile(true)
    }else{
      setShowProfile(false)
    }
    dispatch(findUserById(parseCookies()?.accessToken ? jwtDecode<any>(parseCookies().accessToken).userId : 0))
  },[parseCookies().accessToken])


  const logoutHandler = ()=>{
    console.log('로그아웃 적용 전: ' + parseCookies().accessToken)
    dispatch(logout())
    .then((res:any)=>{
      destroyCookie(null,'accessToken')
      setShowProfile(false)
      router.push('/')
    })
    .catch((err:any)=>{
      console.log('로그아웃 실행에서 에러 발생 : ' + err)
    })
  }

  
  return (<>

    {showProfile &&
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/pages/home" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="data:image/jpeg;base64,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" className="h-8" alt="jsggun Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">J.S.GGUN</span>
        </Link>
        {showProfile && <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
            <span className="sr-only">Open user menu</span>
            <img className="w-8 h-8 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_RlT-ytB9A_TQFLKMqVYpdJiiRbckTCThmw&usqp=CAU" />
          </button>
          {showProfile &&
          <div className="flex px-4 py-3 float-end">
            <Link href={`${PG.USER}/detail/${jwtDecode<any>(parseCookies()?.accessToken)?.userId}`}><span className="block text-sm text-gray-900 dark:text-white">{getuser.name}</span></Link>
            <span className="block text-sm  text-gray-500 truncate dark:text-gray-400 mx-5">{getuser.username}</span>
            <span className="block text-sm  text-gray-500 truncate dark:text-gray-400" onClick={logoutHandler}> <a href="#">log out</a> </span>
          </div>
          
        }
        {/* <ul className="py-2" aria-labelledby="user-menu-button">
              <li>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
              </li>
            </ul> */}
          <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        }
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

            {pages.map((item) => (
              <Linkbutton key={item.id} title={item.title} path={item.path} />
            ))}
          </ul>
        </div>
      </div>
    </nav>}

  </>
  )
}

export default Header;