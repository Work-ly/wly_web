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

import { AiFillGithub, AiFillGoogleSquare, AiFillHome } from 'react-icons/ai'
import pfp from '../dist/images/pfp.png'
import usr_image from '../dist/images/pfp.png'
import header from '../dist/images/header.png'
import { BsFillCalendarFill, BsPeopleFill } from 'react-icons/bs'
import { HiDocumentText, HiOutlineShieldExclamation } from 'react-icons/hi'
import { Doc } from '../components/Doc'
import { Repos } from '../components/Repos'

interface Props {}

const Components = [
  <UserPage
    user={
      {
        name: 'carlos',
        email: 'josueteodoro@gmail.com',
        pfp: pfp,
        header: header,
        description: 'fgiuhayuigfbhuadghbgfhdga90teiq',
        teams: [
          {
            pfp: pfp,
            header: header,
            name: 'Nome',
            description: 'djweiofhyuieagyuegafdjweiofhyuieagyuegafdjweiofhyuieagyuegaf',
            users: [
              {
                name: 'carlos',
                role: 'Admin'
              },
              {
                name: 'carlos2',
                role: 'Member'
              }
            ]
          }
        ]
      }
    }
  />,
  <Team
    banner=''
    description='AAAAAAAAAAAAAAAAAAAAAAAAAaaaaaaaaaaaaaaaaaaaaaaaa'
    image=''
    members=''
    team_name=''
  />,
  <Doc />,
  <Repos />,
  <></>
]

const Icons = [
  {
    icon: <AiFillHome />,
  },
  {
    icon: <BsPeopleFill />,
  },
  {
    icon: <HiDocumentText />,
  },
  {
    icon: <AiFillGithub />,
  },
  {
    icon: <BsFillCalendarFill />,
  }
]


function Home() {
  const [componentIndex, setComponentIndex] = useState(0)

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
              const { icon } = curIcon
              return (
                <div className='text-white'>
                  <NavbarButton key={index} icon={icon} setComponentFunc={setComponentIndex} componentIndex={index} />
                </div>
              )
            })}
          </div>
        </div>
        <div className='h-[calc(100%-4rem)]  w-[calc(100%-130px)] ml-[calc(100px)] mr-[30px] mt-16 z-0 '>
          {Components[componentIndex]}
        </div>
      </div>

    </>
  )
}

export default Home