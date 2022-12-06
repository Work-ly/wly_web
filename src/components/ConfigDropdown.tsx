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

export const ConfigDropdown = (props: Props) => {

  const exit = () => {
    window.localStorage.clear()
    window.location.href = "/"
   {

//notas do felipe
//arrumei o overflow do userpage
//header visual glitches fixed



//quando entrar, verifica a questão da header
//sério, arrumar a header ali é necessário
// vou ver oq eu faço agora
//outra, a pagina Team n tá funcionando


    }
  }


  return (
    <div className='fixed w-[13rem] h-[13rem] rounded-[10px] border-[1px] top-16 right-7 flex flex-col border-02 border-white bg-dark justify-between items-center shadow-lg'>

      <div className=" h-[15%] w-[85%] border-b-[1px] border-white flex justify-center items-center">
        <div className="w-1/2 left-top">
            <p className="text-white pointer-events-none">{props.user.name}</p>
        </div>
        <div className="flex items-center justify-end w-1/2 right-top">
          <i onClick={exit} className='text-lg text-white transition-all duration-100 cursor-pointer hover:text-purple-primary-light'><MdExitToApp /></i>
        </div>

      </div>
      <div className="w-[80%] h-[85%] text-white pointer-events-none">
        <div className="flex justify-around mt-2">
          <p className="">My Account</p>
        </div>
        <div className="flex justify-around mt-2">
          <p className="">Settings</p>
        </div>
        <div className="flex justify-around mt-2">
          <p className="">Teams</p>
        </div>
        <div className="flex justify-around mt-2">
          <p className="">Projects</p>
        </div>
        <div className="flex justify-around mt-2">
          <p className="">About Work.ly</p>
        </div>
      </div>
    </div>
  )
}
