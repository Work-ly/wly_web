/*
 * file: src/pages/Landing.tsx
 * author: Josue Teodoro Moreira <teodoro.josue@protonmail.ch>
 * date: July 31, 2022
 */

import React from 'react'
import './Landing.css'
import Logo from '../dist/images/Logo.svg'
import Shade from '../dist/images/shade.svg'

interface Props { }


function Landing(props: Props) {
  return (
    <>
      <div className='bg-black h-screen w-screen'>
        <img src={Shade} className="z-0 h-full fixed" />
        <div className='fixed landing-navbar w-screen h-20 flex items-center z-50 '>
          
          <div className='text-white text-md w-2/5 flex justify-around items-center ml-10'>
            <a href='/'className='hover:underline '>Home</a>
            <a href='/'className='hover:underline '>About us</a>
            <a href='/'className='hover:underline '>Become a Worker.ly</a>
          </div>
          <div className='links flex justify-around items-center h-16 m-10 text-md fixed right-0'>
            <a className='justify-center rounded-lg text-white border-2 h-12 w-28 flex items-center  transition-all duration-300 
          ease-linear hover:border-b-2 hover:rounded-md hover:bg-white hover:text-dark hover:border-2 hover:border-white
          ' href='/login'>Log In</a>

            <a className='bg-purple-primary-light hover:bg-purple-secondary-light transition-all duration-150 ease-in h-12 flex
          items-center w-28 justify-center rounded-lg text-white' href='/signup'>Sign Up </a>
          </div>

        </div>

        <div className='content h-screen w-screen fixed flex flex-row'>
          <div className="left-content w-1/2 h-screen flex justify-center items-center">
            <img src={Logo} className="w-1/4 absolute z-10 mr-10" />
          </div>
          <div className='right-content w-1/2 text-white flex justify-center items-center'>
            <div className='w-2/3 h-64 flex items-end flex-col'>
              <p className='text-xll'>Work<span className='text-purple-primary-light'>.</span>ly</p>
              <p className='text-lg'> Team-up to bring every of your</p>
              <p className='text-lg'>own dreams to life. </p>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Landing