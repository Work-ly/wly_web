/*
 * file: src/pages/Home.tsx
 * author: Felipe Gomes da Silva <felipe.gsilva@protonmail.com>
 * date: October 21, 2022
 */

import React from 'react'

import Navbar from '../components/Navbar'
import Header from '../components/Header'


interface Props { }


function Home(props: Props) {
  return (
    <>
            <Header />
            <Navbar />
    </>
  )
}

export default Home