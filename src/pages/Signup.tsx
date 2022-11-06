/*
 * file: src/pages/Signup.tsx
 * author: Felipe Gomes da Silva <felipe.gsilva@protonmail.com>
 * date: October 19, 2022
 */

import React from 'react'
import { Input } from '../components/Input'
import { LoginButton } from '../components/LoginButton'

import wly from '../dist/images/W.LY.svg'
import Shade from '../dist/images/purple_shade.svg'

import { BsGithub } from 'react-icons/bs'
import { BsGoogle } from 'react-icons/bs'

interface Props { }


function Signup(props: Props) {
  return (
    <>
      <div className="h-screen w-screen bg-black text-sm">
        <img src={Shade} className="z-0 h-full fixed" />

        <div className="fixed logo w-screen h-12 t-0 z-10">
          <a href='/'>
            <img src={wly} className="w-16 ml-6 mt-6 z-10" />
          </a>
        </div>

        <div className="absolute w-screen h-screen flex z-1">
          <div className="w-full flex justify-between  items-center">
            <div className='a w-1/2 flex flex-col items-center'>
              <div className='w-1/2 h-[500px] flex flex-col justify-center space-y-8 
              xl:w-[330px] xl:mr-24
              2xl:w-[600px] 2xl:h-[900px]'>
                <Input label="Username" type="text" placeholder="user 123" />
                <Input label="Email" type="text" placeholder="user 123" />
                <Input label="Password" type="password" placeholder="•••••••••••••••••••••" />

                <LoginButton />
                <div className='text-white text-xs m-auto mt-1'>
                  <a href='/login' className='underline decoration-solid transition-colors duration-250 ease-out
                hover:text-purple-secondary-light 2xl:text-lg'>Login instead</a>

                </div>

                <div className='w-1/2 mt-4 m-auto flex flex-row justify-center'>
                    <button className='text-white w-8 h-8 rounded-full border-2 flex justify-center items-center mr-5 transition-colors duration-300 ease-out
                   hover:text-purple-primary-light 2xl:w-14 2xl:h-14 2xl:text-xl
                  ' ><BsGithub /></button>
                    <button className='text-white w-8 h-8 rounded-full border-2 flex justify-center items-center transition-colors duration-300 ease-out
                  hover:text-purple-primary-light 2xl:w-14 2xl:h-14 2xl:text-xl
                  ' ><BsGoogle /></button>
                  </div>
              </div>

            </div>



            <div className='mr-20'>
            <p className='text-xl text-white text-right 2xl:text-xl2'>One more step</p>
                <p className='text-xl text-white text-right 2xl:text-xl2'>before you can build,</p>
                <p className='text-xl text-white text-right 2xl:text-xl2'>the Work.ly way.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup