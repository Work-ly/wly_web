/*
 * file: src/pages/Signup.tsx
 * author: Felipe Gomes da Silva <felipe.gsilva@protonmail.com>
 * date: October 19, 2022
 */

import React, { useContext, useState } from "react"

import { Input } from "../components/Input"
import { LoginButton } from "../components/LoginButton"

import wly from "../dist/images/W.LY.svg"
import Shade from "../dist/images/purple_shade.svg"

import { BsGithub } from "react-icons/bs"
import { BsGoogle } from "react-icons/bs"
import {
  CreateUserRequest,
  CreateUserResponse,
  LocalUser,
} from "../models/User"

import { ReactSession } from 'react-client-session'

import { Message } from "../models/Message"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { UserContext } from "../User"
import { useNavigate } from "react-router-dom"

interface Props { }

function Signup(props: Props) {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { user, setUser } = useContext(UserContext)

  const navigate = useNavigate()

  async function signUp() {
    const createUserReq: CreateUserRequest = {
      name: username,
      email: email,
      description: "",
      password: password,
      pfp: {
        width: 0,
        height: 0,
        offset_x: 0,
        offset_y: 0,
        type: "",
        data: "",
      },
      header: {
        width: 0,
        height: 0,
        offset_x: 0,
        offset_y: 0,
        type: "",
        data: "",
      },
    }

    const uri: string =
      "http://" +
      process.env.REACT_APP_WLY_BACK_HOST +
      ":" +
      process.env.REACT_APP_WLY_BACK_PORT +
      "/user"

    await fetch(uri, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(createUserReq),
    })
      .then((resp) => {
        if (resp.ok) {
          return resp.json()
        } else {
          toast("Could not Sign Up", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "dark",
          })
        }
      })
      .then((res) => {
        toast('Signed Up Succesfully', {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: 'dark',
        })

        localStorage.setItem('user', JSON.stringify(res.wly_user))

        window.location.href = '/home'
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <>
      <ToastContainer />
      <div className="w-screen h-screen text-sm bg-black">
        <img src={Shade} className="fixed z-0 h-full" />

        <div className="fixed z-10 w-screen h-12 logo t-0">
          <a href="/">
            <img src={wly} className="z-10 w-16 mt-6 ml-6" />
          </a>
        </div>

        <div className="absolute flex w-screen h-screen z-1">
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col items-center w-1/2 a">
              <div
                className="w-1/2 h-[500px] flex flex-col justify-center space-y-8 
                xl:w-[330px] xl:mr-24
                2xl:w-[600px] 2xl:h-[900px]"
              >
                <Input
                  onChange={(e: any) => {
                    setUsername(e.target.value)
                  }}
                  label="Username"
                  type="text"
                  placeholder="user 123"
                />
                <Input
                  onChange={(e: any) => {
                    setEmail(e.target.value)
                  }}
                  label="Email"
                  type="text"
                  placeholder="user123@email.com"
                />
                <Input
                  onChange={(e: any) => {
                    setPassword(e.target.value)
                  }}
                  label="Password"
                  type="password"
                  placeholder="•••••••••••••••••••••"
                />
                <LoginButton onClick={signUp} />
                <div className="m-auto mt-1 text-xs text-white">
                  <a
                    href="/login"
                    className="underline transition-colors ease-out decoration-solid duration-250 hover:text-purple-secondary-light 2xl:text-lg"
                  >
                    Login instead
                  </a>
                </div>
                <div className="flex flex-row justify-center w-1/2 m-auto mt-4">
                  <button
                    className="flex items-center justify-center w-8 h-8 mr-5 text-white transition-colors duration-300 ease-out border-2 rounded-full hover:text-purple-primary-light 2xl:w-14 2xl:h-14 2xl:text-xl "
                  >
                    <BsGithub />
                  </button>
                  <button
                    className="flex items-center justify-center w-8 h-8 text-white transition-colors duration-300 ease-out border-2 rounded-full hover:text-purple-primary-light 2xl:w-14 2xl:h-14 2xl:text-xl "
                  >
                    <BsGoogle />
                  </button>
                </div>
              </div>
            </div>
            <div className="mr-20">
              <p className="text-xl text-right text-white 2xl:text-xl2">
                One more step
              </p>
              <p className="text-xl text-right text-white 2xl:text-xl2">
                before you can build,
              </p>
              <p className="text-xl text-right text-white 2xl:text-xl2">
                the Work.ly way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup
