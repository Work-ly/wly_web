/*
 * file: src/pages/Home.tsx
 * author: Felipe Gomes da Silva <felipe.gsilva@protonmail.com>
 * date: October 21, 2022
 */

import React, { useState } from 'react'

import { Icons, NavbarButton } from '../components/NavbarButton'
import Header from '../components/Header'
import { UserPage } from '../components/UserPage'
import { AiFillHome } from 'react-icons/ai'
import pfp from '../dist/images/pfp.png'
import usr_image from '../dist/images/pfp.png'
import banner from '../dist/images/header.png'
import { render } from '@testing-library/react'

interface Props { }



function Home(props: Props) {
  const [isToggled, setIsToggled] = useState(0)

  return (
    <>
      <div className='absolute w-screen h-screen'>
        <Header
          usr_image={usr_image}

        />

        <div className='fixed w-[calc(100px)] h-screen flex flex-col items-center l-0 z-2 '>
          <div className='w-full h-[calc(350px)] flex flex-col justify-around items-center mt-14'>
            {Icons.map((curIcon, index) => {
              const { icon, url } = curIcon;
              return (
                <div className='text-white'>
                  <NavbarButton key={index} icon={icon} url={url} />
                </div>
              );
            })}
          </div>
        </div>






        <div className='h-[calc(100%-4rem)]  w-[calc(100%-130px)] ml-[calc(100px)] mr-[30px] mt-16 z-0 '>



          { /*
                <UserPage 
        image={pfp}
        username='carlos'
        email='josueteodoro@gmail.com'
        banner={banner}
        description='fgiuhayuigfbhuadghbgfhdga90teiq'

        team_img={pfp}
        team_description='djweiofhyuieagyuegaf'
        team_name='NOme'
        
        />


                <Teams />
                <Doc />
          */
          }
        </div>
      </div>

    </>
  )
}

export default Home