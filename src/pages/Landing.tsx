/*
 * file: src/pages/Landing.tsx
 * author: Josue Teodoro Moreira <teodoro.josue@protonmail.ch>
 * date: July 31, 2022
 */

import React, { useState } from 'react'
import './Landing.css'
import Logo from '../dist/images/Logo.svg'
import Shade from '../dist/images/shade.svg'


interface Props { }

function Landing(props: Props) {
  return (
    <>
      <div className='w-screen h-screen bg-black'>
        <img src={Shade} className="fixed z-0 h-full" />
        <div className='fixed z-50 flex items-center w-screen h-20 landing-navbar 2xl:h-28 '>

          <div className='flex items-center justify-around w-2/5 ml-10 text-white text-md'>
            <a href='/' className='hover:underline 2xl:text-xl '>Home</a>
            <a className='hover:underline hover:cursor-pointer 2xl:text-xl'>About us</a>
            <a className='hover:underline hover:cursor-pointer 2xl:text-xl'>Become a Worker.ly</a>
          </div>
          <div className='fixed right-0 flex items-center justify-around h-16 m-10 links text-md 2xl:w-96'>
            <a className='flex items-center justify-center h-12 text-white transition-all duration-300 ease-linear border-2 rounded-lg w-28 hover:border-b-2 hover:rounded-md hover:bg-white hover:text-dark hover:border-2 hover:border-white 2xl:text-xl 2xl:h-20 2xl:w-48 2xl:rounded-xl 2xl:border-4 ' href='/login'>Log In</a>

            <a className='flex items-center justify-center h-12 text-white transition-all duration-150 ease-in rounded-lg bg-purple-primary-light hover:bg-purple-secondary-light w-28 2xl:text-xl 2xl:w-48 2xl:h-20 2xl:m-8 2xl:rounded-xl ' href='/signup'>Sign Up </a>
          </div>

        </div>

        <div className='fixed flex flex-row w-screen h-screen content'>
          <div className="flex items-center justify-center w-1/2 h-screen left-content">
            <img src={Logo} className="absolute z-10 w-1/4 mr-10 xl:mr-20" />
          </div>
          <div className='flex items-center justify-center w-1/2 text-white right-content'>
            <div className='flex flex-col items-end w-2/3 h-64'>
              <p className='text-xll 2xl:text-[8rem]'>Work<span className='text-purple-primary-light'>.</span>ly</p>
              <p className='text-lg 2xl:text-[2rem]'> Team-up to bring every of your</p>
              <p className='text-lg 2xl:text-[2rem]'>own dreams to life. </p>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Landing