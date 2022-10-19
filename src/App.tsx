/*
 * file: src/App.tsx
 * author: Josue Teodoro Moreira <teodoro.josue@protonmail.ch>
 * date: July 31, 2022
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { initializeApp } from 'firebase/app'

import { UserContextProvider } from './User'
import { FirebaseConfig } from './util/Firebase'

import Landing from './pages/Landing'
import Login from './pages/Login'
import Signup from './pages/Signup'

export interface Props {}

function App(props: Props): JSX.Element {
  const fbCfg: FirebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId:process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
  }
  initializeApp(fbCfg)

  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  )
}

export default App