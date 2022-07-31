/*
 * file: src/components/Counter.tsx
 * author: Josue Teodoro Moreira <teodoro.josue@protonmail.ch>
 * date: July 31, 2022
 */

import  React, { useState } from 'react'

export interface CounterProps {
  count: number
}

const Counter: React.FunctionComponent<CounterProps> = (props) => {
  const [count, setCount] = useState(props.count)

  return (
    <div className='w-40 h-40 mt-40 mx-auto my-auto px-4 py-2 rounded-md flex flex-col justify-around bg-purple-primary-light'>
      <a
        className='w-full px-2 py-4 border-r-4 border-b-4 border-purple-primary-dark rounded-md text-center font-semibold text-white transition-all
                   active:border-0 active:translate-y-px active:translate-x-px'
        onClick={() => setCount(count + 1)}
        href='#'
        >
          CLICK HERE
      </a>
      <p className='w-full text-4xl text-center text-white'>{ count }</p>
    </div>
  )
}

export default Counter