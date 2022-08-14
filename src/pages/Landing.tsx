/*
 * file: src/pages/Landing.tsx
 * author: Josue Teodoro Moreira <teodoro.josue@protonmail.ch>
 * date: July 31, 2022
 */

import React from 'react'
import './Landing.css'
import Logo from '../dist/images/Logo.svg'
import Shade from '../dist/images/shade.svg'
import ButtonLogin from '../components/buttons/ButtonLogin'
import ButtonSignup from '../components/buttons/ButtonSignup'

interface Props {}


function Landing(props: Props) {
  return (
    <>
      <div className='landing-navbar'>
        <div className='links'>
          <ButtonLogin />
          <ButtonSignup />
        </div>
      </div>
      <div className='content w-screen fixed'>
        <div className="left-content w-1/2 h-screen flex justify-center items-center">
          <img src= {Logo} className="w-1/4 absolute z-10  lg:mr-28 sm:mr-0"/>
          <img src= {Shade} className="z-0 w-screen h-screen lg:fixed"/>
        </div>
        <div className="right-content">
        </div>
      </div>
    </>
  )
}

export default Landing