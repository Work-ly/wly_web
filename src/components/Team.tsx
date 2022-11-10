import React from 'react'
import { LocalTeam } from '../models/Team'


interface Props {
  team: LocalTeam
}

export const Team = (props: Props) => {
  return (
    <div className='w-full h-[95%]'>
      <div className='w-full h-[40%] flex flex-col items-center '>
        <div className="w-full h-full rounded-tl-lg rounded-tr-lg teaminfo">

          <div className="user-info text-white flex h-[30%] w-[89%] flex-row absolute items-end justify-between ">
            <div className='w-[80%] flex flex-row items-end'>
              <div className='pfp w-[120px] ml-10'>
                <div className="pfp_img w-[100%] h-full">
                  <img src={props.team.pfp} alt="Profile Pic" className="w-full rounded-full border-[1px]" />
                </div>

              </div>
              <div className='flex flex-col ml-3 info'>
                <div className='flex flex-col items-start'>
                  <p className='text-md' > {props.team.name} </p>
                  <p> 2 members </p>
                </div>
              </div>

            </div>



          </div>

          <div className="w-full h-full gradient-overlay banner">

            <div className='w-full h-full '>

              <img src={props.team.header} alt="" className="w-full h-full gradient-bt-img z-5 " />

            </div>


          </div>

        </div>
      </div>
      <div className='titles w-full h-[10%] text-white flex items-end ml-[1%]'>
        <div className='w-[39.5%]'>
          <p>Description</p>
        </div>
        <div className='w-[40%]'>
          <p>Projects</p>
        </div>
        <div className='w-[18.5%]'>
          <p>Members</p>
        </div>

      </div>
      <div className="userteams w-[99%] h-[50%] flex flex-row items-center mt-1">
        <div className="w-[38%] h-full">
          <div className="description h-[30%] ml-[3%] pr-12 text-white line-clamp">
            <p className='mt-4 ml-3'>{props.team.description}</p>
          </div>
          <div className='h-[70%] bg-white'>


          </div>
        </div>
        <div className="w-[35%] h-full ml-[2%] mt-[1%] overflow-y-auto">
          <div className="description h-24 ml-[3%] mt-3 bg-dark-02 truncate text-white rounded-lg w-[90%]">
            aaaaaaa
          </div>
          <div className="description h-24 ml-[3%] mt-3 bg-dark-02 truncate text-white rounded-lg w-[90%]">
            aaaaaaa
          </div>
          <div className="description h-24 ml-[3%] mt-3 bg-dark-02 truncate text-white rounded-lg w-[90%]">
            aaaaaaa
          </div>
          <div className="description h-24 ml-[3%] mt-3 bg-dark-02 truncate text-white rounded-lg w-[90%]">
            aaaaaaa
          </div>
        </div>


      </div>
    </div>
  )
}
