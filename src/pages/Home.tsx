/*
 * file: src/pages/Home.tsx
 * author: Josue Teodoro Moreira <teodoro.josue@protonmail.ch>
 * date: July 31, 2022
 */

import React from 'react'
import Counter from '../components/Counter'

export interface HomePageProps {}

const HomePage: React.FunctionComponent<HomePageProps> = (props) => {
  return (
    <>
      <Counter count={0}/>
    </>
  )
}

export default HomePage