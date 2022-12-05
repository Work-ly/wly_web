/*
 * file: src/pages/Home.tsx
 * author: Felipe Gomes da Silva <felipe.gsilva@protonmail.com>
 * date: October 21, 2022
 */

import React, { useContext, useState } from 'react'

import { NavbarButton } from '../components/NavbarButton'
import Header from '../components/Header'

import { UserPage } from '../components/UserPage'
import { Team } from '../components/Team'
import { Image } from '../models/Image'

import { AiFillGithub, AiFillGoogleSquare, AiFillHome } from 'react-icons/ai'
import pfp from '../dist/images/pfp.png'
import logo_ct from '../dist/images/logo_ct.png'
import header_team from '../dist/images/header_team.png'
import usr_image from '../dist/images/pfp.png'
import header from '../dist/images/header.png'
import { BsFillCalendarFill, BsPeopleFill } from 'react-icons/bs'
import { HiDocumentText, HiOutlineShieldExclamation } from 'react-icons/hi'
import { Doc } from '../components/Doc'
import { Repos } from '../components/Repos'
//import { UserContext } from '../User';
import { LocalUser, UserProject } from '../models/User'
import { Calendar } from '../components/Calendar'
import { LocalTeam } from '../models/Team'
import { LocalProject } from '../models/Project'

interface Props {
}

const userData = localStorage.getItem('user')
const user = (userData != null) ? JSON.parse(userData) : {} as LocalUser

const teamData = localStorage.getItem('team')
const team = (teamData != null) ? JSON.parse(teamData) : {} as LocalTeam

const Components = [
  <UserPage
    user={user}
  />,
  <Team
    team={team}
  />,
  <Doc />,
  <Repos />,
  <Calendar />
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
          user={user}
          project={
            {
              role: 'carlos',
              project: {} as LocalProject,
              user: {} as LocalUser

            }

          }
          team={team}
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
        <div className='h-[calc(100%-4rem)]  w-[calc(100%-130px)] ml-[calc(100px)] mr-[30p    x] mt-16 z-0 '>
          {Components[componentIndex]}
        </div>
      </div>

    </>
  )
}

export default Home