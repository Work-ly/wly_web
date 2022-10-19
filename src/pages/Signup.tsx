/*
 * file: src/pages/Signup.tsx
 * author: Felipe Gomes da Silva <felipe.gsilva@protonmail.com>
 * date: October 19, 2022
 */

import React from 'react'
import wly from '../dist/images/W.LY.svg'
import Shade from '../dist/images/purple_shade.svg'
import User from '../dist/images/user_login.png'


function Signup() {
  return (
    <>
      <div className="h-screen w-screen bg-black text-sm">
        <img src={Shade} className="z-0 w-2/3 fixed" />

        <div className="logo w-screen h-12 t-0 z-1">
          <a href='/'>
            <img src={wly} className="w-16 absolute ml-6 mt-6 z-10" />
          </a>
        </div>

        <div className="absolute w-screen h-max flex z-1">


        <div className='w-1/2'>
        </div>

          <div className="right w-1/2 h-full z-1">
            <div className='w-full h-full flex flex-auto flex-col'>
              <div className='h-1/2 w-full mt-16'>
                <p className='text-xl text-white'>One more step</p>
                <p className='text-xl text-white'>before you can build,</p>
                <p className='text-xl text-white'>the Work.ly way.</p>
              </div>

              <div className='h-full w-full flex justify-end'>
                <img src={User} className="w-2/3 z-10 " />
              </div>
            </div>

          </div>
        </div>
    </div>
    </>
  )
}

export default Signup