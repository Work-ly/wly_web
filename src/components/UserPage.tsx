import React, { Component, useEffect, useState } from "react"
import ReactDOM from "react-dom"

import { FiEdit } from "react-icons/fi"
import { AiFillPlusCircle } from "react-icons/ai"
import { LocalUser, FirebaseUser } from "../models/User"
import { UserEditPopup } from "../components/UserEditPopup"
import { LocalProject } from "../models/Project"
import { LocalTeam } from "../models/Team"
import { setConstantValue } from "typescript"
import { setEnvironmentData } from "worker_threads"
import { UserTeamCard } from "./UserTeamCard"
import { ProjectCreatePopup } from "./ProjectCreatePopup"
import { TeamCreatePopup } from "./TeamCreatePopup"
import userEvent from "@testing-library/user-event"

function EditUser(curUser: LocalUser) {
  const [userEditOpen, setUserEditOpen] = useState(false)

  return (
    <>
      <div
        onClick={() => setUserEditOpen(!userEditOpen)}
        className="hover:cursor-default"
      >
        <a className="transition-all duration-100 ease-linear cursor-pointer hover:text-purple-primary-light">
          <FiEdit />
        </a>
      </div>

      {userEditOpen ? (
        <UserEditPopup
          close={() => setUserEditOpen(!userEditOpen)}
          user={{
            name: curUser.name,
            email: curUser.email,
            pfp: curUser.pfp,
            header: curUser.header,
            description: curUser.description,
            teams: [],
          }}
        />
      ) : (
        <></>
      )}
    </>
  )
}

function CreateTeam() {
  const [teamOpen, setTeamOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setTeamOpen(!teamOpen)}
        className="flex flex-col items-center justify-around h-10 pt-6 pb-6 pl-4 pr-4 text-white transition-all duration-200 border-2 border-white rounded-lg group"
      >
        <p className="transition-all duration-200 group-hover:-translate-y-[1px]">
          {" "}
          Team
        </p>
        <i className="transition-all duration-200 group-hover:scale-105 group-hover:text-purple-primary-light">
          <AiFillPlusCircle />
        </i>
      </button>

      {teamOpen ? (
        <TeamCreatePopup close={() => {setTeamOpen(!teamOpen)}} />
      ) : (
        <></>
      )}
    </>
  )
}

interface Props {
  user: LocalUser
}

interface LocalTeams {
  teams: LocalTeam[]
}

export interface LocalUsers {
  users: LocalUser[]
}

interface LocalTeamUsers {
  teamUsers: LocalUsers[]
}

export const UserPage = (props: Props) => {
  const [teams, setTeams] = useState({teams: []} as LocalTeams)
  const [teamsUsers, setTeamsUsers] = useState({teamUsers: []} as LocalTeamUsers)

  useEffect(() => {
    const uriUserTeams: string =
      "http://" +
      process.env.REACT_APP_WLY_BACK_HOST +
      ":" +
      process.env.REACT_APP_WLY_BACK_PORT +
      "/user/" +
      props.user.name +
      "/teams"

    const fbUser: FirebaseUser = JSON.parse(localStorage.getItem("fb_user")!)
    const teamsDataFetch = async () => {
      const teamsData = await (
        await fetch(uriUserTeams, {
          method: "GET",
          mode: "cors",
          headers: {
            Authorization: `Bearer ${fbUser.idToken}`,
          },
        })
      ).json()

      setTeams(teamsData)
    }

    teamsDataFetch()
  }, [])

  useEffect(() => {
      var teamsUsers: LocalTeamUsers = {teamUsers: []} as LocalTeamUsers
      teams.teams.forEach(async (team: LocalTeam, i) => {
        const uriTeamUsers: string =
          "http://" +
          process.env.REACT_APP_WLY_BACK_HOST +
          ":" +
          process.env.REACT_APP_WLY_BACK_PORT +
          "/team/" +
          team.name +
          "/users"

      const fbUser: FirebaseUser = JSON.parse(localStorage.getItem("fb_user")!)
        const usersData = await (
          await fetch(uriTeamUsers, {
            method: "GET",
            mode: "cors",
            headers: {
              Authorization: `Bearer ${fbUser.idToken}`,
            }
          })
        ).json()

      teamsUsers.teamUsers.push(usersData)
      setTeamsUsers(teamsUsers)
    })
  }, [])

  return (
    <div className="flex flex-col items-center w-full h-full">
      <div className="userinfo rounded-tl-lg rounded-tr-lg w-full h-[35%] ">
        <div className="user-info text-white flex h-[30%] w-[89%] flex-row absolute items-end justify-between">
          <div className="flex flex-row items-end ">
            <div className="ml-10 pfp w-[8rem] h-[8rem]">
              <div className="pfp_img w-[100%] h-[100%]">
                <img
                  src={`data:${props.user.pfp.type},${props.user.pfp.data}`}
                  alt="Profile Pic"
                  className="w-full rounded-full border-[1px] shadow-md"
                />
              </div>
            </div>
            <div className="flex flex-col ml-3 info">
              <div className="flex flex-row items-center">
                <p className="text-md "> {props.user.name} </p>
                <a className="ml-2 w-[1%] cursor-pointer">
                  <EditUser {...props.user} />{" "}
                </a>
              </div>
              <p className="text-sm"> {props.user.email} </p>
            </div>
          </div>

          <div className="description w-[30%] h-[30%] flex justify-end items-end">
            <p className="text-right text-white w-max h-max line-clamp-break-all">
              {props.user.description}
            </p>
          </div>
        </div>

        <div className="w-full h-full gradient-overlay banner">
          <div className="w-full h-full">
            <img
              src={`data:${props.user.header.type},${props.user.header.data}`}
              alt=""
              className="object-cover w-full h-full rounded-t-lg gradient-bt-img z-5"
            />
          </div>
        </div>
      </div>

      <div className="h-[8%] w-full flex items-end ">
        <p className="absolute ml-2 text-white">Teams</p>
      </div>
      <div className="w-full h-1/2 overflow-x-auto overflow-y-hidden">
        <div className="userteams w-max h-[100%] flex flex-row mt-1 overflow-x-auto">
          {teams.teams != undefined && teams.teams != null ? (
            teams.teams.length > 0 ? (
              teams.teams.map((team, i) => {
                return <UserTeamCard team={team} users={teamsUsers.teamUsers[i]}/>
              })
            ) : (
              <></>
            )
          ) : (
            <></>
          )}
          <CreateTeam />
        </div>
      </div>
    </div>
  )
}
