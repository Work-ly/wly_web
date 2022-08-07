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
    })
    .then(response => response.json())
    .then((data) => {
      console.log(data)
    })
  }

  const getUser = async () => {
    redirectToGithub().then((newUser) => {
      setUser(newUser)
      registerUser()
    })
  }

  return (
    (user?.isLoggedIn)
      ? <p className='text-white'>Logged In as { user.data?.name }</p>
      : <button className='text-white' onClick={getUser}>Login with github</button>
  )
}

export default Login