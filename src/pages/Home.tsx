/*
 * file: src/pages/Home.tsx
 * author: Felipe Gomes da Silva <felipe.gsilva@protonmail.com>
 * date: October 21, 2022
 */

import React, { useState } from 'react'

import { NavbarButton } from '../components/NavbarButton'
import Header from '../components/Header'

import { UserPage } from '../components/UserPage'
import { Team } from '../components/Team'

import { AiFillGithub, AiFillHome } from 'react-icons/ai'
import pfp from '../dist/images/pfp.png'
import usr_image from '../dist/images/pfp.png'
import banner from '../dist/images/header.png'
import { BsFillCalendarFill, BsPeopleFill } from 'react-icons/bs'
import { HiDocumentText } from 'react-icons/hi'
import { render } from '@testing-library/react'

interface Props { }



function Home(props: Props) {
  const [isToggled, setIsToggled] = useState(0)
  const Icons = [
    {
      icon: <AiFillHome />,
      component: 1,
    },
    {
      icon: <BsPeopleFill />,
      component: 2,
    },
    {
      icon: <HiDocumentText />,
      component: 3,
    },
    {
      icon: <AiFillGithub />,
      component: 4,
    },
    {
      icon: <BsFillCalendarFill />,
      component: 5,
    }


  ]

  function renderpage(): JSX.Element {
    const page = Icons
    return (
      <>

      </>


    )
  }

  return (
    <>
      <div className='absolute w-screen h-screen'>
        <Header
          usr_image={usr_image}
          project_name='Internship'
          team_name="Crader's Tlub"

        />

        <div className='fixed w-[calc(100px)] h-screen flex flex-col items-center l-0 z-2 '>
          <div className='w-full h-[calc(350px)] flex flex-col justify-around items-center mt-14'>
            {Icons.map((curIcon, index) => {
              const { icon, component } = curIcon;
              return (
                <div className='text-white'>
                  <NavbarButton key={index} icon={icon} component={component} />
                </div>
              );
            })}
          </div>
        </div>






        <div className='h-[calc(100%-4rem)]  w-[calc(100%-130px)] ml-[calc(100px)] mr-[30px] mt-16 z-0 '>

          <UserPage
            image={pfp}
            username='carlos'
            email='josueteodoro@gmail.com'
            banner={banner}
            description='fgiuhayuigfbhuadghbgfhdga90teiq'


            team_img={pfp}
            team_description='djweiofhyuieagyuegaf'
            team_name='Nome'
          />
          { /*


          

        <Team 
          banner=''
          description=''
          image=''
          members=''
          team_name=''

          
          
          />
                <Doc />
                <GitHub />
                <Calendar />
          */
          }
        </div>
      </div>

    </>
  )
}

export default Home