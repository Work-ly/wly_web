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
      <img src={Shade} className="z-0 w-2/3 fixed" />
      <div className='landing-navbar h-20 flex items-center fixed right-0 z-50'>
        <div className='links w-64 flex justify-around items-center h-16 m-10 text-md'>
          <a className='justify-center rounded-lg text-white border-2 h-12 w-28 flex items-center  transition-all duration-300 
          ease-linear hover:border-b-2 hover:rounded-md hover:bg-white hover:text-dark hover:border-2 hover:border-white
          ' href='/login'>Log In</a>

          <a className='bg-purple-primary-light hover:bg-purple-secondary-light transition-all duration-150 ease-in h-12 flex
          items-center w-28 justify-center rounded-lg text-white' href='/signup'>Sign Up </a>
        </div>
      </div>

      <div className='content h-screen w-screen fixed'>
        <div className="left-content w-1/2 h-screen flex justify-center items-center fixed">
          <img src={Logo} className="w-1/2 absolute z-10" />
        </div>
        <div className="right-content">


        </div>
      </div>
    </>
  )
}

export default Landing