/*
 * file: src/pages/Header.tsx
 * author: Felipe Gomes da Silva <felipe.gsilva@protonmail.com>
 * date: December 03, 2022
 */

import { MdExitToApp } from "react-icons/md"


import React from 'react'
import { LocalUser } from "../models/User"
import { useNavigate } from "react-router-dom"

interface Props {
user: LocalUser

}



function exit(){
  
  const navigate = useNavigate()  
  
  window.localStorage.clear()
  window.location.reload()
  
  navigate("/")

  
}

export const ConfigDropdown = (props: Props) => {

  return (
    <div className='fixed w-[13rem] h-[16rem] rounded-[10px] border-[1px] top-16 right-7 flex flex-row border-02 border-white bg-dark justify-center shadow-lg'>

      <div className=" h-[15%] w-[85%] border-b-[1px] border-white flex justify-center items-center">
        <div className="w-1/2 left-top">
            <p className="text-white">{props.user.name}</p>
        </div>
        <div className="flex items-center justify-end w-1/2 right-top">
          <i onClick={exit} className='text-lg text-white transition-all duration-100 cursor-pointer hover:text-purple-primary-light'><MdExitToApp /></i>
        </div>

      </div>
    </div>
  )
}
