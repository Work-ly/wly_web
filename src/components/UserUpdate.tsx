import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'


interface Props {
  close: any
}

export const UserUpdate = (props: Props) => {
  return (
    <div className='fixed z-50 w-screen h-screen bg-low-opacity-black top-0 left-0 hover:cursor-default flex justify-center items-center'>
      <a onClick={props.close} className='absolute cursor-pointer top-0 right-0 mt-4 mr-2 hover:text-purple-primary-light transition-all duration-100 ease-linear'>
        <i className='text-lg '>
          <AiOutlineClose />
        </i>
      </a>
      <div className="w-[45%] h-[90%] border-[2px] border-white rounded-lg bg-dark">

      </div>
    </div>
  )
}
