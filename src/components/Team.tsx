import React from 'react'


interface Props {
  banner: any,
  description: any,
  image: any,
  team_name: any,
  members: any,

}

export const Team = (props: Props) => {
  return (
    <div className='w-full h-[95%]'>
      <div className='w-full h-[40%] flex flex-col items-center '>
        <div className="userinfo rounded-tl-lg rounded-tr-lg w-full h-full ">

          <div className="user-info text-white flex h-[30%] w-[30%] flex-row absolute items-end justify-between">
            <div className='w-[40%] flex flex-row items-end'>

              <div className='pfp w-[120px] ml-10'>
                <div className="pfp_img w-[100%] h-full">
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

            <div className='w-full h-full '>

              <img src={props.banner} alt="" className="gradient-overlay w-full h-full z-5 " />

            </div>


          </div>

        </div>
      </div>
      <div className='titles w-full h-[10%] text-white flex items-end ml-[1%]'>
        <div className='w-[40%]'>
          <p>Description</p>
        </div>
        <div className='w-[40%]'>
          <p>Projects</p>
        </div>
        <div className='w-[19%]'>
          <p>Members</p>
        </div>

      </div>
      <div className="userteams w-[99%] h-[50%] flex flex-row items-center mt-1">


      </div>

    </div>

  )
}
