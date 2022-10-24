/*
 * file: src/pages/Navbar.tsx
 * author: Felipe Gomes da Silva <felipe.gsilva@protonmail.com>
 * date: October 21, 2022
 */

import React from 'react'
import { AiFillHome } from 'react-icons/ai'


interface Props {}




function Navbar(props: Props) {
  return (
    <>
      <div className='fixed w-[calc(100px)] h-screen flex flex-col items-center l-0 z-2'>
        <div className='w-full h-[calc(350px)] flex flex-col justify-around items-center mt-24'>
          <a href='/home'>
            <div className='w-12 h-12 bg-purple-primary-light flex justify-center items-center rounded-md'>
              <i className='text-white text-lg'><AiFillHome /></i>
            </div>
            
          </a>


          <a href='/home'>
            <div className='w-12 h-12 bg-purple-primary-light flex justify-center items-center rounded-md            '>
              
            </div>
            
          </a>

          
          <a href='/home'>
            <div className='w-12 h-12 bg-purple-primary-light flex justify-center items-center rounded-md'>
              
            </div>
            
          </a>

          
          <a href='/home'>
            <div className='w-12 h-12 bg-purple-primary-light flex justify-center items-center rounded-md'>
              
            </div>
            
          </a>

          
          <a href='/home'>
            <div className='w-12 h-12 bg-purple-primary-light flex justify-center items-center rounded-md'>
              
            </div>
            
          </a>

          
        </div>
      </div>
    </>
  )
}

export default Navbar