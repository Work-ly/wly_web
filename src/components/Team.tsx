import React from 'react'
import { LocalTeam } from '../models/Team'


interface Props {
  team: LocalTeam
}

export const Team = (props: Props) => {
  return (
    <div className='w-full h-[95%]'>
      <div className='w-full h-[40%] flex flex-col items-center '>
        <div className="userinfo rounded-tl-lg rounded-tr-lg w-full h-full ">

          <div className="user-info text-white flex h-[30%] w-[30%] flex-row absolute items-end justify-between">
            <div className='w-[80%] flex flex-row items-end'>
              <div className='pfp w-[120px] ml-10'>
                <div className="pfp_img w-[100%] h-full">
                  <img src={props.team.pfp} alt="Profile Pic" className="w-full rounded-full border-[1px]" />
                </div>

              </div>
              <div className='info flex flex-col ml-3'>
                <div className='flex flex-row items-center'>
                  <p className='text-md '> {props.team.name} </p>
                </div>
              </div>

            </div>


            <div className="description w-[20%] h-[10%]">
              <p className='w-[100%] h-[100%] text-white truncate text-xs'>{props.team.description}</p>

            </div>
          </div>

          <div className="banner w-full h-full">

            <div className='w-full h-full '>

              <img src={props.team.header} alt="" className="gradient-overlay w-full h-full z-5 " />

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
        <div className="w-[28%] h-full">
          <div className="description h-[30%] ml-[3%] bg-dark truncate text-white">
            <p>{props.team.description}</p>
          </div>
        </div>
        <div className="w-[28%] h-full ml-[12%] mt-[1%] overflow-y-auto">
          <div className="description h-[25%] ml-[3%] bg-dark-02 truncate text-white rounded-lg">
            aaaaaaa
          </div>
          <div className="description h-[25%] mt-2 ml-[3%] bg-dark-02 truncate text-white rounded-lg">
            aaaaaaa
          </div>
        </div>


      </div>
    </div>
  )
}
