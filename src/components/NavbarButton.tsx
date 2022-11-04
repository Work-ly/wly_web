/*
 * file: src/pages/Navbar.tsx
 * author: Felipe Gomes da Silva <felipe.gsilva@protonmail.com>
 * date: October 31, 2022
 */

import React from 'react'

import { AiFillGithub, AiFillHome } from 'react-icons/ai'
import { HiDocumentText } from 'react-icons/hi'
import { BsFillCalendarFill, BsPeopleFill } from 'react-icons/bs'




interface Props {
    icon: any,
    component: any
}

const NavbarButton = (props: Props) => {
    return (
        <a target="none" rel="noopener noreferrer" className='cursor-pointer active:cursor-default'>
            <div className='w-12 h-12 bg-purple-primary-light flex justify-center items-center rounded-md transition-all duration-100 ease-linear
                    hover:scale-110'>
                        <i className='text-md'>{props.icon}</i>
            </div>
        </a>
    )
}

export { NavbarButton }