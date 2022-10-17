/*
 * file: src/pages/Login.tsx
 * author: Josue Teodoro Moreira <teodoro.josue@protonmail.ch>
 * date: August 02, 2022
 */

import { useContext } from 'react'

import { redirectToGithub } from '../util/Github'
import { UserContext  } from '../User';

export interface Props {}

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
      <p className='text-white'>Logged In as { user.data?.name }</p>
    )
  } else {
    return (
      <>
      <div className="h-screen w-screen">
        <div className="logo w-screen h-20 absolute t-0">
            <p className="text-white">a</p>
        </div>
        <div className="absolute h-max">
          <button className='text-white' onClick={ getUser }>Login with github</button>
        </div>
      </div>
        

        
      </>
    )
  } 
}

export default Login