/*
 * file: src/pages/Header.tsx
 * author: Felipe Gomes da Silva <felipe.gsilva@protonmail.com>
 * date: October 21, 2022
 */

import React from 'react'

import wly from '../dist/images/W.LY.svg'
import team from '../dist/images/team_icon.png'
import project from '../dist/images/projects_icon.png'
import arrow from '../dist/images/arrow.png'

interface Props { }


function Header(props: Props) {
  return (
    <>
        <div className='fixed w-screen h-16 flex flex-row'>
          <div className='w-[calc(100px)] h-full flex justify-center items-center'>
            <img src={wly} className="w-[calc(50px)] absolute z-10" />
          </div>
          <div className='w-[calc(500px)] h-full flex flex-row'>
              <div className='w-[calc(20px)]'>

              </div>
              <a className='w-36 h-full flex flex-row justify-center items-center'> 
                <img src={team} className='w-[calc(20px)]'></img>
                <p id='team' className='text-white text-sm ml-2'>Crader's Tlub</p>
                <img src={arrow} className='w-[calc(10px)] ml-2 mt-1'></img>
              </a>

              <a className='w-36 h-full ml-6 flex flex-row justify-center items-center'> 
                <img src={project} className='w-[calc(20px)]'></img>
                <p id='team' className='text-white text-sm ml-2'> internship</p>
                <img src={arrow} className='w-[calc(10px)] ml-2 mt-1'></img>
              </a>

              
          </div>

        </div>
    </>
  )
}

export default Header