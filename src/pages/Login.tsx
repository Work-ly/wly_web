/*
 * file: src/pages/Login.tsx
 * author: Josue Teodoro Moreira <teodoro.josue@protonmail.ch>
 * date: August 02, 2022
 */

import React, { useContext } from 'react'

import { Input } from '../components/Input'
import { LoginButton } from '../components/LoginButton'

import { redirectToGithub } from '../util/Github'
import { UserContext } from '../User';

import wly from '../dist/images/W.LY.svg'
import Shade from '../dist/images/shade.svg'
import User from '../dist/images/user_login.png'

import { BsGithub } from "react-icons/bs";
import { BsGoogle } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

export interface Props { }

function Login(props: Props): JSX.Element {
  const { user, setUser } = useContext(UserContext)

  const navigate = useNavigate()

  const registerUser = async () => {
    const url: string = 'http://' +
      process.env.REACT_APP_WLY_BACK_HOST + ':' +
      process.env.REACT_APP_WLY_BACK_PORT + '/user'

    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    }).then((response) => {
      if (response.ok) {
        console.log(user)
      } else {
        setUser(null)
      }
    })
  }

  const getUser = async () => {
    redirectToGithub().then((newUser) => {
      setUser(newUser)
      registerUser()
    })
  }

  if (user != null) {
    navigate('/home')
    return <></>
  } else {
    return (
      <>
        <div className="w-screen h-screen text-sm bg-black">

          <img src={Shade} className="fixed z-0 h-full "/>
          <div className="fixed z-10 w-screen h-12 logo t-0">
            <a href='/'>
              <img src={wly} className="absolute z-10 w-16 mt-6 ml-6" />
            </a>
          </div>

          <div className="absolute flex w-screen h-screen z-1">
            <div className="flex items-center justify-between w-full">
              <div className='flex flex-col items-center justify-center w-1/2'>
                <div className='w-1/2 flex flex-col justify-center space-y-8 
               xl:w-[330px] xl:mr-24
                2xl:w-[600px] 2xl:h-[900px]'>
                  <Input onChange={(e: any) => {}}label="Email" type="text" placeholder="user 123"/>
                  <Input onChange={(e: any) => {}}label="Password" type="password" placeholder="•••••••••••••••••••••" />

                  <LoginButton onClick={() => {}}/>
                  <div className='flex items-center justify-center text-xs text-white'>
                    <a href='/signup' className='underline transition-colors ease-out decoration-solid duration-250 hover:text-purple-secondary-light 2xl:text-lg'>Create an account instead</a>

                  </div>

                  <div className='flex flex-row justify-center w-1/2 m-auto mt-4'>
                    <button onClick={getUser} className='flex items-center justify-center w-8 h-8 mr-5 text-white transition-colors duration-300 ease-out border-2 rounded-full hover:text-purple-primary-light 2xl:w-14 2xl:h-14 2xl:text-xl ' ><BsGithub /></button>
                    <button className='flex items-center justify-center w-8 h-8 text-white transition-colors duration-300 ease-out border-2 rounded-full hover:text-purple-primary-light 2xl:w-14 2xl:h-14 2xl:text-xl ' ><BsGoogle /></button>
                  </div>
                </div>

              </div>



              <div className='mr-20'>
                <p className='text-xl text-right text-white 2xl:text-xl2'>One more step</p>
                <p className='text-xl text-right text-white 2xl:text-xl2'>before you can build,</p>
                <p className='text-xl text-right text-white 2xl:text-xl2'>the Work.ly way.</p>
              </div>
            </div>
          </div>
        </div>


      </>
    )
  }
}

export default Login