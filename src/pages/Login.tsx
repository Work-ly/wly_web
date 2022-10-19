/*
 * file: src/pages/Login.tsx
 * author: Josue Teodoro Moreira <teodoro.josue@protonmail.ch>
 * date: August 02, 2022
 */

import { useContext } from 'react'

import { redirectToGithub } from '../util/Github'
import { UserContext } from '../User';

import wly from '../dist/images/W.LY.svg'
import Shade from '../dist/images/shade.svg'
import User from '../dist/images/user_login.png'

export interface Props { }

function Login(props: Props): JSX.Element {
  const { user, setUser } = useContext(UserContext)

  // TODO: CORS
  const registerUser = async () => {
    const url: string = 'http://' +
      process.env.REACT_APP_WLY_USER_HOST + ':' +
      process.env.REACT_APP_WLY_USER_PORT + '/user'

    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user?.data)
    }).then((response) => {
      if (response.ok) {
        console.log('logged in')
      } else {
        user!.isLoggedIn = false
      }
    })
  }

  const getUser = async () => {
    redirectToGithub().then((newUser) => {
      setUser(newUser)
      registerUser()
    })
  }

  if (user?.isLoggedIn) {
    return (
      <p className='text-white'>Logged In as {user.data?.name}</p>
    )
  } else {
    return (
      <>
        <div className="h-screen w-screen bg-black text-sm">

          <img src={Shade} className="z-0 w-2/3 fixed"/>
          <div className="logo w-screen h-12 t-0 z-1">
            <a href='/'>
              <img src={wly} className="w-16 absolute ml-6 mt-6 z-10" />
            </a>
          </div>

          <div className="absolute w-screen h-max flex z-1">

            <div className='left w-1/2 h-full z-1'>
              <div className='w-full h-full flex flex-auto flex-col'>

                <div className='w-full mt-28 flex flex-col items-center justify-center'>
                  <p className='w-1/2 text-white'>Username:</p>
                  <input className='w-1/2 h-12 rounded-lg p-2 transition-all duration-200 ease-in
                  hover:rounded-md 
                  ' type={"text"}
                  placeholder='GuestUser0101'></input>
                </div>

                <div className='w-full mt-4 flex flex-col items-center justify-center'>
                  <p className='w-1/2 text-white'>Password:</p>
                  <input className='w-1/2 h-12 rounded-lg p-2' type={"password"} 
                  placeholder='•••••••••••••••••••••'></input>
                </div>

                <button className='w-1/2 h-12 rounded-lg m-auto mt-10 bg-purple-secondary-dark text-white text-md
                transition-all duration-200 ease-in hover:bg-dark hover:shadow-md
                '>Sign In</button>
                
                <div className='w-1/2 mt-10 m-auto flex flex-row justify-center'>
                  <button className='text-white w-8 h-8 rounded-full border-2' onClick={getUser}><p className=''>l</p></button>
                </div>


              </div>
            </div>

            <div className="right w-1/2 h-full z-1">
              <div className='w-full h-full flex flex-auto flex-col'>
                <div className='h-1/2 w-full mt-16'>
                  <p className='text-xl text-white'>One more step</p>
                  <p className='text-xl text-white'>before you can build,</p>
                  <p className='text-xl text-white'>the Work.ly way.</p>
                </div>

                <div className='h-full w-full flex justify-end'>
                  <img src={User} className="w-2/3 z-10 "/>
                </div>
              </div>

            </div>

          </div>
        </div>



      </>
    )
  }
}

export default Login