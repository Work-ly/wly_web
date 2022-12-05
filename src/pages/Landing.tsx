/*
 * file: src/pages/Landing.tsx
 * author: Josue Teodoro Moreira <teodoro.josue@protonmail.ch>
 * date: July 31, 2022
 */ 

import React, { useState } from 'react'
import './Landing.css'
import Logo from '../dist/images/Logo.svg'
import Shade from '../dist/images/shade.svg'
import Design from '../dist/images/Design_example.png'


interface Props { }

function a() {
  alert('Coming Soon')

}

function Landing(props: Props) {
  return (
    <>
      <div className='w-screen bg-dark-02'>
        <img src={Shade} className="fixed z-0 h-full pointer-events-none" />
        <div className='fixed z-50 flex flex-row items-center justify-between w-full h-20 landing-navbar xl:h-28 bg-gradient-to-b from-dark to-transparent'>

          <div className='flex items-center justify-around w-2/5 h-full ml-10 text-white text-md xl:text-lg '>
            <a href='/' className='hover:underline xl:text-xl ' >Home</a>
            <a className='hover:underline hover:cursor-pointer ' onClick={a}>About us</a>
            <a className='hover:underline hover:cursor-pointer ' onClick={a}>Become a Worker.ly</a>
          </div>
          <div className='flex items-center justify-around w-64 h-16 m-10 links text-md xl:w-96 '>
            <a className='flex items-center justify-center h-12 text-white transition-all duration-300 ease-linear border-2 rounded-lg shadow-xl bg-dark w-28 hover:border-b-2 hover:rounded-md hover:bg-white hover:text-dark hover:border-2 hover:border-white xl:text-xl xl:h-20 xl:w-48 xl:rounded-xl xl:border-4 ' href='/login'>Log In</a>

            <a className='flex items-center justify-center h-12 text-white transition-all duration-150 ease-in rounded-lg shadow-xl bg-purple-primary-light hover:bg-purple-secondary-light w-28 xl:text-xl xl:w-48 xl:h-20 xl:m-8 xl:rounded-xl ' href='/signup'>Sign Up </a>
          </div>

        </div>


        <div className='fade relative flex flex-row w-full h-[100vh] content items-center snap-always snap-center pointer-events-none'>
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
        <div className="h-[100vh] relative snap-always snap-center pointer-events-none">
          <div className="title h-[5%] flex justify-center items-center">
            <p className='text-white md:text-lg xl:text-xl'>An intuitive and simple design</p>
          </div>
          <div className="image h-[68%] flex justify-center items-center">
            <img src={Design} alt="" className='w-[70%]' />
          </div>
          <div className="down-text h-[18%] flex justify-center items-center">
            <p className='text-center w-[35%] text-white md:text-md xl:text-xl xl:w-[40%]'>Focusing on your experience, Work.ly brings you a simple design, which guarantees you a game changer in terms of optimizing time </p>
          </div>
        </div>
        <div className="h-[100vh]  relative flex flex-col justify-center ">
          <div className="flex items-start justify-center w-full h-2/3">
            <div className="card w-[80%] h-[75%] flex justify-around items-center">
              <div className="card-01 w-[30%] h-[90%] bg-dark-02 border-[1px] border-white rounded-lg transiton-all duration-200 group ease-out
              hover:scale-105 hover:shadow-[0px_1px_10px_rgba(255,255,255,0.25)]
              ">
                <div className="h-[30%] w-full flex justify-center items-end transition-all duration-200 ease-out
                 ">
                  <p className='text-center text-white pointer-events-none md:text-md xl:text-xl'> A huge lack of tools</p>
                </div>
                <div className="h-[70%] flex justify-center items-center transition-all duration-250 ease-out
                
                ">
                  <p className="w-[90%] text-white text-center md:text-sm xl:text-lg pointer-events-none">Focusing on your experience, Work<span className='text-purple-primary-light'>.</span>ly brings you a simple design, which guarantees you a game changer in terms of optimizing time </p>
                </div>
              </div>
              <div className="card-02 w-[30%] h-[90%] bg-dark-02 border-[1px] border-white rounded-lg transiton-all duration-200 group ease-out
              hover:scale-105 hover:shadow-[0px_1px_10px_rgba(255,255,255,0.25)]
              ">
                <div className="h-[30%] w-full flex justify-center items-end transition-all duration-200 ease-out
                 ">
                  <p className='text-center text-white pointer-events-none md:text-md xl:text-xl'> A huge lack of tools</p>
                </div>
                <div className="h-[70%] flex justify-center items-center transition-all duration-250 ease-out
                
                ">
                  <p className="w-[90%] text-white text-center md:text-sm xl:text-lg pointer-events-none">Focusing on your experience, Work<span className='text-purple-primary-light'>.</span>ly brings you a simple design, which guarantees you a game changer in terms of optimizing time </p>
                </div>
              </div>
              <div className="card-03 w-[30%] h-[90%] bg-dark-02 border-[1px] border-white rounded-lg transiton-all duration-200 group ease-out
              hover:scale-105 hover:shadow-[0px_1px_10px_rgba(255,255,255,0.25)]
              ">
                <div className="h-[30%] w-full flex justify-center items-end transition-all duration-200 ease-out
                 ">
                  <p className='text-center text-white pointer-events-none md:text-md xl:text-xl'> A huge lack of tools</p>
                </div>
                <div className="h-[70%] flex justify-center items-center transition-all duration-250 ease-out
                
                ">
                  <p className="w-[90%] text-white text-center md:text-sm xl:text-lg pointer-events-none">Focusing on your experience, Work<span className='text-purple-primary-light'>.</span>ly brings you a simple design, which guarantees you a game changer in terms of optimizing time </p>
                </div>
              </div>
            </div>
          </div>


        </div>

      </div>
    </>
  )
}

export default Landing