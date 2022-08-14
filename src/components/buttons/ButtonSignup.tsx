/*
 * file: src/components/buttons/ButtonSignup.tsx
 * author: Felipe Gomes da Silva <felipe.gsilva@protonmail.com>
 * date: August 8, 2022
 */

import React from 'react'

function ButtonSignup() {
  return (
    <a className='bg-purple-secondary-dark hover:bg-purple-primary-dark transition-all duration-150 ease-linear
    h-14 flex items-center w-32 justify-center rounded-lg text-white hover:rounded-sm' 
    href='/signup'>SIGN UP </a>
  )
}

export default ButtonSignup