/*
 * file: src/pages/Navbar.tsx
 * author: Felipe Gomes da Silva <felipe.gsilva@protonmail.com>
 * date: October 21, 2022
 */

import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { HiDocumentText } from 'react-icons/hi'



interface Props { }

function Button(props:Props) {
  return (
    <a href='/home'>
      <div className='w-12 h-12 bg-purple-primary-light flex justify-center items-center rounded-md transition-all duration-100 ease-linear
            hover:scale-110'>
      </div>
    </a>
  )

}

function Navbar(props: Props) {
  return (
    <>
      <div className='fixed w-[calc(100px)] h-screen flex flex-col items-center l-0 z-2'>
        <div className='w-full h-[calc(350px)] flex flex-col justify-around items-center mt-24'>
          <Button>
            <i className='text-white text-lg'><AiFillHome />
            
            {/* 
            
              learn props and stuff with jozutm
            
            */}

            </i>
          </Button>
          <Button>
            <i className='text-white text-lg'><AiFillHome /></i>


          </Button>

          <Button>
            <i className='text-white text-lg'><AiFillHome /></i>


          </Button>

          <Button>
            <i className='text-white text-lg'><AiFillHome /></i>


          </Button>


          <Button>
            <i className='text-white text-lg'><AiFillHome /></i>


          </Button>


        </div>
      </div>
    </>
  )
}

export default Navbar