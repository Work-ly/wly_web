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
      <div className=' w-screen h-[300vh] bg-black'>
        <img src={Shade} className="fixed z-0 h-full" />
        <div className='fixed z-50 flex flex-row items-center w-full h-20 landing-navbar xl:h-28 justify-between 
        '>

          <div className='flex items-center justify-around w-2/5 h-full ml-10 text-white text-md xl:text-lg
          
          '>
            <a href='/' className='hover:underline xl:text-xl '>Home</a>
            <a className='hover:underline hover:cursor-pointer '>About us</a>
            <a className='hover:underline hover:cursor-pointer '>Become a Worker.ly</a>
          </div>
          <div className='flex items-center justify-around h-16 m-10 links text-md w-64 xl:w-96 '>
            <a className='flex items-center justify-center h-12 text-white transition-all duration-300 ease-linear border-2 rounded-lg w-28 hover:border-b-2 hover:rounded-md hover:bg-white hover:text-dark hover:border-2 hover:border-white xl:text-xl xl:h-20 xl:w-48 xl:rounded-xl xl:border-4 ' href='/login'>Log In</a>

            <a className='flex items-center justify-center h-12 text-white transition-all duration-150 ease-in rounded-lg bg-purple-primary-light hover:bg-purple-secondary-light w-28 xl:text-xl xl:w-48 xl:h-20 xl:m-8 xl:rounded-xl ' href='/signup'>Sign Up </a>
          </div>

        </div>


        <div className='fade absolute flex flex-row w-full h-[100vh] content items-center'>
          <div className="flex items-center justify-around w-full h-64">
            <div className="w-1/2 h-full ml-10 xl:ml-20">
              <img src={Logo} className="absolute z-10 w-1/4 xl:mr-20" />
            </div>
            <div className='flex flex-col items-end h-64 text-white'>
              <p className='text-xll xl:text-[8rem]'>Work<span className='text-purple-primary-light'>.</span>ly</p>
              <p className='text-lg xl:text-[2rem]'> Team-up to bring every of your</p>
              <p className='text-lg xl:text-[2rem]'>own dreams to life. </p>
            </div>


          </div>
        </div>


      </div>
    </>
  )
}

export default Landing