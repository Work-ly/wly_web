/*
 * file: src/pages/Header.tsx
 * author: Felipe Gomes da Silva <felipe.gsilva@protonmail.com>
 * date: October 21, 2022
 */

import React, {useState} from 'react'

import wly from '../dist/images/W.LY.svg'
import team from '../dist/images/team_icon.png'
import project from '../dist/images/projects_icon.png'
import arrow from '../dist/images/arrow.png'
import ntc from '../dist/images/notification.png'
import msg from '../dist/images/msg.png'
import usr_image from '../dist/images/pfp.png'
import { render } from '@testing-library/react'

import Chat from '../components/Chat'

interface Props {}




function ChatDropdown(props: Props){
   const [open, setOpen] = useState(false)



   return(
    <>    
      <a onClick={() => setOpen(!open)} className='group flex justify-center items-center'>
        <img src={msg} className='w-6 mt-1 group-hover:cursor-pointer group-hover:shadow-md transition-all duration-200
        hover:scale-110'
        ></img>
      </a>

      {open && <Chat />}
    </>
   )

}

interface Props { }


function Header(props: Props) {
  return (
    <>
      <div className='fixed w-screen h-16 flex flex-row'>
        <div className='w-[calc(100px)] h-full flex justify-center items-center ml-2'>
          <img src={wly} className="w-[calc(50px)] absolute z-10" />
        </div>
        <div className='w-full flex flex-row justify-between'>


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



          <div className=' w-[calc(300px)] flex flex-row justify-center items-center mt-0'>
            <div className='icons w-24 text-white flex flex-row justify-around items-center '>
              <ChatDropdown />
              <img src={ntc} className='w-5'></img>

            </div>
            <div>

              <a className='flex flex-row justify-end items-center w-32 ml-4'>
                <div className='w-[calc(40px)] h-[calc(40px)] mr-2 rounded-full border-2 text-white flex justify-center items-center'>
                  <img id='usr_img' src={usr_image} className='w-full h-full'></img>
                </div>
                <p id='usr_nickname' className='text-white'>JosueTM</p>
                <img src={arrow} className='w-[calc(10px)] h-[calc(7px)] ml-2 mt-1'></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header