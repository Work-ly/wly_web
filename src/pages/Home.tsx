/*
 * file: src/pages/Home.tsx
 * author: Josue Teodoro Moreira <teodoro.josue@protonmail.ch>
 * date: July 31, 2022
 */

import React from 'react'

interface Props {}

function Home(props: Props) {
  return (
    <>
      <a className='text-white' href='/login'>Login</a>
      <a className='ml-4 text-white' href='/signup'>Signup</a>
    </>
  )
}

export default Home