/*
 * file: src/components/buttons/ButtonSignup.tsx
 * author: Felipe Gomes da Silva <felipe.gsilva@protonmail.com>
 * date: August 8, 2022
 */

import React from 'react'

function ButtonSignup() {
  return (
    <a className='bg-purple-primary-light hover:bg-purple-secondary-dark transition-all duration-150 ease-linear
    h-14 flex items-center w-32 justify-center rounded-lg text-white' 
    href='/signup'>Sign Up </a>
  )
}

export default ButtonSignup