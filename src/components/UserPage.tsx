import React from 'react'
import { FiEdit } from 'react-icons/fi'




interface Props {
  team_description: any
  team_name: any
  description: any
  image: any,
  username: any,
  email: any,
  banner: any,
  team_img: any

}

function editUsr() {
  alert('a')
}

export const UserPage = (props: Props) => {
  return (
    <div className='w-full h-full flex flex-col items-center'>
      <div className="userinfo rounded-tl-lg rounded-tr-lg w-full h-[35%] ">

        <div className="user-info text-white flex h-[30%] w-[80%] flex-row absolute items-end justify-between">
          <div className='w-[40%] flex flex-row items-end'>

            <div className='pfp w-[120px] ml-10'>
              <div className="pfp_img w-[100%]">
                <img src={props.image} alt="Profile Pic" className="w-full rounded-full " />
              </div>

            </div>
            <div className='info flex flex-col ml-3'>

              <div className='flex flex-row items-center'>
                <p className='text-md '> {props.username} </p>
                <a className='ml-2 w-[1%] cursor-pointer' onClick={editUsr}> <FiEdit /> </a>
              </div>
              <p className='text-sm'> {props.email} </p>
            </div>

          </div>


          <div className="description w-[20%] h-[10%]">
            <p className='w-[100%] h-[100%] text-white '>{props.description}</p>

          </div>
        </div>

        <div className="banner w-full h-full">

          <div className='w-full h-full'>
            
            <img src={props.banner} alt="" className="w-full h-full z-5 "/>

          </div>


        </div>
      </div>

      
      <div className='h-[8%] w-full flex items-end '>
        <p className='absolute text-white ml-2'>Teams</p>

      </div>
      <div className="userteams w-[99%] h-[50%] flex flex-row items-center mt-1">

        <div className='w-[28%] h-full bg-dark-02 rounded-lg'>
          <div className="team h-[25%] flex flex-row">
            <div className="team-img-div w-[40%] h-full bg-white">
              <img src={props.team_img} alt="" className="team-img h-full" />
            </div>

            <div className="team-info w-[60%] ">
              <div className="team-name ml-[2%]">
                <p className='text-white text-sm'>

                  {props.team_name}
                </p>
              </div>
              <div className="team-description ml-[2%]">
                <p className='text-white text-xs'>
                  {props.team_description}
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>

  )
}
