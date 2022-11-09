import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { LocalUser } from '../models/User'


interface Props {
  close: any,
  user: LocalUser
}

export const UserUpdate = (props: Props) => {
  return (
    <div className='fixed z-50 w-screen h-screen bg-low-opacity-black top-0 left-0 hover:cursor-default flex justify-center items-center'>
      <a onClick={props.close} className='absolute cursor-pointer top-0 right-0 mt-4 mr-2 hover:text-purple-primary-light transition-all duration-100 ease-linear'>
        <i className='text-lg '>
          <AiOutlineClose />
        </i>
      </a>

      <div className="w-[45%] h-[90%] border-[2px] border-white rounded-lg bg-dark flex flex-col ">
        <div className="w-full ab h-[8%] text-xl flex justify-center">
          Edit your info
        </div>
        <div className="w-full h-[20%] flex flex-col justify-center items-center mt-[15px]">
          <p className="description text-lg w-[80%]"> Name: </p>
          <input type="text" className='w-[80%] h-14 rounded-lg text-black text-lg p-4 ' required />
        </div>
        <div className="w-full  h-[32%] flex flex-col justify-center items-center mt-[15px]">
          <p className="description text-lg w-[80%]"> Description: </p>
          <input type="text" className='w-[80%] h-72 rounded-lg text-black text-lg p-4 text-start' 
          placeholder='Your desires and whishes come here'/>
        </div>
        <div className="w-full  h-[30%] flex flex-row justify-around">
          <div className="left w-1/4 h-full flex flex-col justify-center items-center ml-20 ">
            <p> Profile Picture </p>
            <label className="flex flex-col justify-center items-center w-full h-3/4 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer 
              transtition-all duration-75 ease-in hover:bg-dark-02">
              <div className="flex flex-col justify-center items-center pt-5 pb-6 text-center">
                <svg aria-hidden="true" className="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                <p className="text-xs ">SVG, PNG or JPG (MAX. 800x400px)</p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>

          <div className="left w-1/4 h-full flex flex-col justify-center items-center mr-20">
            <p> Header </p>
            <label className="flex flex-col justify-center items-center w-full h-3/4 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer 
              transtition-all duration-75 ease-in hover:bg-dark-02">
              <div className="flex flex-col justify-center items-center pt-5 pb-6 text-center">
                <svg aria-hidden="true" className="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                <p className="text-xs ">SVG, PNG or JPG (MAX. 1200x400px)</p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>
        </div>
        <div className="w-full h-[12%] flex flex-row justify-around items-center">
          <button onClick={props.close} className='w-[35%] h-[70%] bg-light-gray text-lg rounded-lg ml-20
          transition duration-75 ease-in hover:bg-dark-02
          '> Cancel </button>
          <input type='submit' className='w-[35%] h-[70%] bg-purple-primary-light text-white text-lg rounded-lg mr-20
          transition duration-75 ease-in hover:bg-purple-secondary-light'/>
        </div>

      </div>
    </div>
  )
}
