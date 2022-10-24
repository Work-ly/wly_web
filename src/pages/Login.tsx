/*
 * file: src/pages/Login.tsx
 * author: Josue Teodoro Moreira <teodoro.josue@protonmail.ch>
 * date: August 02, 2022
 */

import { useContext } from 'react'

import { redirectToGithub } from '../util/Github'
import { UserContext } from '../User';

import wly from '../dist/images/W.LY.svg'
import Shade from '../dist/images/shade.svg'
import User from '../dist/images/user_login.png'

import { BsGithub } from "react-icons/bs";
import { BsGoogle } from "react-icons/bs";

export interface Props { }

function Login(props: Props): JSX.Element {
  const { user, setUser } = useContext(UserContext)

  // TODO: CORS
  const registerUser = async () => {
    const url: string = 'http://' +
      process.env.REACT_APP_WLY_USER_HOST + ':' +
      process.env.REACT_APP_WLY_USER_PORT + '/user'

    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user?.data)
    }).then((response) => {
      if (response.ok) {
        console.log('logged in')
      } else {
        user!.isLoggedIn = false
      }
    })
  }

  const getUser = async () => {
    redirectToGithub().then((newUser) => {
      setUser(newUser)
      registerUser()
    })
  }

  if (user?.isLoggedIn) {
    return (
      <p className='text-white'>Logged In as {user.data?.name}</p>
    )
  } else {
    return (
      <>
        <div className="h-screen w-screen bg-black text-sm">

          <img src={Shade} className="z-0 h-full fixed"/>
          <div className="logo w-screen h-12 t-0 z-1">
            <a href='/'>
              <img src={wly} className="w-16 absolute ml-6 mt-6 z-10" />
            </a>
          </div>

          <div className="absolute w-screen h-max flex z-1">

            <div className='left w-1/2 h-full z-1'>
              <div className='w-5/6 h-full flex flex-auto flex-col'>

                <div className='w-full mt-32 flex flex-col items-center justify-center'>
                  <p className='w-1/2 text-white'>Username:</p>
                  <input className='w-1/2 h-12 rounded-md p-2 transition-all duration-200 ease-in 
                  hover:rounded-lg hover:shadow-xl 
                  focus:outline-none
                  ' type={"text"}
                  placeholder='GuestUser0101'></input>
                </div>

                <div className='w-full mt-4 flex flex-col items-center justify-center'>
                  <p className='w-1/2 text-white'>Password:</p>
                  <input className='w-1/2 h-12 rounded-md p-2 transition-all duration-200 ease-in 
                  hover:rounded-lg hover:shadow-xl
                  focus:outline-none' type={"password"} 
                  placeholder='•••••••••••••••••••••'></input>
                </div>

                <button className='w-1/2 h-12 rounded-md m-auto mt-10 bg-purple-secondary-dark text-white text-md transition-all duration-200 ease-in 
                hover:bg-dark hover:shadow-md
                focus:outline-none
                '>Sign In</button>
                <div className='text-white text-xs m-auto mt-1'>
                <a href='/signup' className='underline decoration-solid transition-colors duration-250 ease-out
                hover:text-purple-secondary-light'>Create an account instead</a>

                </div>

                <div className='w-1/2 mt-8 m-auto flex flex-row justify-center'>
                  <button className='text-white w-8 h-8 rounded-full border-2 flex justify-center items-center mr-5 transition-colors duration-300 ease-out
                   hover:text-purple-primary-light
                  ' onClick={getUser}><BsGithub /></button>
                  <button className='text-white w-8 h-8 rounded-full border-2 flex justify-center items-center transition-colors duration-300 ease-out
                  hover:text-purple-primary-light
                  ' onClick={getUser}><BsGoogle /></button>
                </div>


              </div>
            </div>

            <div className="right w-1/2 h-full z-1">
              <div className='w-full h-full flex flex-auto flex-col'>
                <div className='h-1/2 w-full mt-10 flex justify-end'>
                  <div className='w-1/2 mr-10'>
                    <p className='text-xl text-white text-right'>One more step</p>
                    <p className='text-xl text-white text-right'>before you can build,</p>
                    <p className='text-xl text-white text-right'>the Work.ly way.</p>
                  </div>
                </div>

                <div className='h-full w-full flex justify-end'>
                  <img src={User} className="w-2/3 z-10 "/>
                </div>
              </div>

            </div>

          </div>
        </div>



      </>
    )
  }
}

export default Login