import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

interface Props {
  close: any

}

export const ProjectPopup = (props: Props) => {
  return (
    <div className='fixed top-0 left-0 z-50 flex items-center justify-center w-screen h-screen bg-low-opacity-black hover:cursor-default'>
      <a onClick={props.close} className='absolute top-[7%] right-[28.5%]  transition-all duration-100 ease-linear cursor-pointer text-white hover:text-purple-primary-light'>
        <i className='text-lg '>
          <AiOutlineClose />
        </i>
      </a>

      <div className="w-[45%] h-[90%] border-[2px] border-white rounded-lg bg-dark flex flex-col ">
        <div className="w-full h-[8%] flex justify-center items-center">
          <p className='md:text-xl xl:text-xl2 text-white'>Create a Project</p>
        </div>
        <div className="w-full h-[20%] flex flex-col justify-center items-center mt-[15px]">
          <p className="description md:text-md xl:text-lg w-[80%] text-white"> Name: </p>
          <input type="text" className='w-[80%] md:h-12 xl:h-14 rounded-lg text-black md:text-md xl:text-lg p-4' required placeholder='' />
        </div>
        <div className="w-full  flex flex-col justify-center items-center mt-[15px] 
            xl:h-[28%] md:h-[20%]">
          <p className="description md:text-md xl:text-lg w-[80%] text-white"> Description: </p>
          <textarea className='w-[80%] md:h-64 xl:h-72 rounded-lg text-black md:text-sm xl:text-lg pl-4 pt-2 pr-4 text-start resize-none'
            placeholder='' />
        </div>
        <div className="w-full  h-[30%] flex flex-row justify-around text-white">
          <div className="w-[80%] h-[20%] flex items-center text-md xl:text-lg">
            Users:

          </div>


        </div>


        <div className="w-full h-[12%] flex flex-row justify-around items-center">
          <button onClick={props.close} className='w-[35%] h-[70%] text-lg rounded-lg ml-20 border-2 text-white
              transition duration-200 ease-in hover:bg-white hover:text-black
              '> Cancel </button>
          <input type='submit' className='w-[35%] h-[70%] bg-purple-primary-light text-white text-lg rounded-lg mr-20
              transition duration-200 ease-in hover:bg-dark-02 cursor-pointer' value='Create' />
        </div>

      </div>
    </div>
  )
}
