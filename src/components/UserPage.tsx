import React, { Component, useEffect, useState } from "react";
import ReactDOM from "react-dom";

import { FiEdit } from "react-icons/fi";
import { LocalUser, FirebaseUser } from "../models/User";
import { UserEditPopup } from "../components/UserEditPopup";
import { LocalProject } from "../models/Project";
import { LocalTeam } from "../models/Team";
import { setConstantValue } from "typescript";
import { setEnvironmentData } from "worker_threads";
import { UserTeamCard } from "./UserTeamCard";
import { TeamCreatePopup } from "./TeamCreatePopup"

interface Props {
  user: LocalUser;
  //projects: [LocalProject]
}

function EditUser(curUser: LocalUser) {
  const [userEditOpen, setUserEditOpen] = useState(false);

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
  );
}

function CreateTeam() {
  const [teamOpen, setTeamOpen] = useState(false)

  return (
    <>
      <button onClick={() => setTeamOpen(!teamOpen)}>Create team</button>

      {teamOpen ?
        <TeamCreatePopup close={() => setTeamOpen(!teamOpen)} />
        : <></>}
    </>
  )
}

interface LocalTeams {
  teams: LocalTeam[]
}

export const UserPage = (props: Props) => {
  const [teams, setTeams] = useState({} as LocalTeams);

  useEffect(() => {
    const uri: string =
      "http://" +
      process.env.REACT_APP_WLY_BACK_HOST +
      ":" +
      process.env.REACT_APP_WLY_BACK_PORT +
      "/user/" +
      props.user.name +
      "/teams"

    const fbUser: FirebaseUser = JSON.parse(localStorage.getItem("fb_user")!);
    const teamsDataFetch = async () => {
      const teamsData = await (
        await fetch(uri, {
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


  return (
    <div className="flex flex-col items-center w-full h-full">
      <div className="userinfo rounded-tl-lg rounded-tr-lg w-full h-[35%] ">
        <div className="user-info text-white flex h-[30%] w-[89%] flex-row absolute items-end justify-between">
          <div className="w-[40%] flex flex-row items-end">
            <div className="pfp w-[120px] ml-10">
              <div className="pfp_img w-[100%]">
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
              className="w-full h-full object-cover gradient-bt-img z-5 object-cover rounded-t-lg"
            />
          </div>
        </div>
      </div>

      <div className="h-[8%] w-full flex items-end ">
        <p className="absolute ml-2 text-white">Teams</p>
      </div>
      <div className="userteams w-[99%] h-[50%] flex flex-row mt-1 overflow-x-auto">
        
          {
            (teams.teams != undefined && teams.teams != null)
              ? (teams.teams.length > 0)
                ? (teams.teams.map((team, i) => {
                  console.log(team)

                  return <UserTeamCard team={team} />
                }))
                : <p className="text-white">You're not in any teams.</p>
              : <></>
          }
        <CreateTeam />

      </div>
    </div>
  );
};
