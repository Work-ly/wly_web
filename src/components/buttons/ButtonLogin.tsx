/*
 * file: src/components/buttons/ButtonLogin.tsx
 * author: Felipe Gomes da Silva <felipe.gsilva@protonmail.com>
 * date: August 8, 2022
 */

import React from 'react'

function ButtonLogin() {
  return (
    <a className='
     justify-center rounded-lg text-white border-2 h-14 w-32 flex
    items-center  transition-all duration-300 ease-linear hover:border-b-2 hover:rounded-none' href='/login'>Log In</a>
  )
}

export default ButtonLogin
