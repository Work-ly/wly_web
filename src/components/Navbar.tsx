/*
 * file: src/pages/Navbar.tsx
 * author: Felipe Gomes da Silva <felipe.gsilva@protonmail.com>
 * date: October 21, 2022
 */

import React from 'react'
import NavbarButton from '../components/NavbarButton'
import { AiFillHome } from 'react-icons/ai'
import { HiDocumentText } from 'react-icons/hi'



interface Props{


}

function Navbar(props: Props) {
  return (
    <>
      <div className='fixed w-[calc(100px)] h-screen flex flex-col items-center l-0 z-2'>
        <div className='w-full h-[calc(350px)] flex flex-col justify-around items-center mt-24'>
          <NavbarButton
            iconImg={AiFillHome}
          
          />
            {/* 
              learn props and stuff with jozutm
            */}
            
          <NavbarButton 
          iconImg={AiFillHome}/>

          <NavbarButton 
          iconImg={AiFillHome}/>

          <NavbarButton 
          iconImg={AiFillHome}/>



        </div>
      </div>
    </>
  )
}

export default Navbar