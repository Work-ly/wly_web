import React from 'react'


interface Props {
    banner: any,
    description: any,
    image:any,
    team_name: any,
    members: any,

}

export const Team = (props:Props) => {
  return (
    <div className='w-full h-[95%]'>
        <div className='w-full h-full flex flex-col items-center '>
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
                <p className='text-md '> {props.team_name} </p>
              </div>
              <p className='text-sm'> {props.members} </p>
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
        </div>


    </div>
  )
}
