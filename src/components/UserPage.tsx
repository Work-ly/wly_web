import React, { Component, useState } from "react";
import ReactDOM from "react-dom";

import { FiEdit } from "react-icons/fi";
import { LocalUser } from "../models/User";
import { UserUpdate } from "../components/UserUpdate"
interface Props {
  user: LocalUser
}

function EditUser() {
  const [userEditOpen, setUserEditOpen] = useState(false)

  return (
    <>
      <div onClick={() => setUserEditOpen(!userEditOpen)} className='hover:cursor-default'>
        <a className="cursor-pointer hover:text-purple-primary-light transition-all duration-100 ease-linear">
          <FiEdit />
        </a>
      </div>


      {userEditOpen ? <UserUpdate
        close={() => setUserEditOpen(!userEditOpen)}
      /> : <></>}
    </>
  )
}

export const UserPage = (props: Props) => {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="userinfo rounded-tl-lg rounded-tr-lg w-full h-[35%] ">
        <div className="user-info text-white flex h-[30%] w-[80%] flex-row absolute items-end justify-between">
          <div className="w-[40%] flex flex-row items-end">
            <div className="pfp w-[120px] ml-10">
              <div className="pfp_img w-[100%]">
                <img
                  src={props.user.pfp}
                  alt="Profile Pic"
                  className="w-full rounded-full border-[1px] shadow-md"
                />
              </div>
            </div>
            <div className="info flex flex-col ml-3">
              <div className="flex flex-row items-center">
                <p className="text-md "> {props.user.name} </p>
                <a className="ml-2 w-[1%] cursor-pointer">
                  <EditUser />
                  {" "}
                  {" "}
                </a>
              </div>
              <p className="text-sm"> {props.user.email} </p>
            </div>
          </div>

          <div className="description w-[20%] h-[10%]">
            <p className="w-[100%] h-[100%] text-white">
              {props.user.description}
            </p>
          </div>
        </div>

        <div className="gradient-overlay banner w-full h-full">
          <div className="w-full h-full">
            <img
              src={props.user.header}
              alt=""
              className="gradient-bt-img w-full h-full z-5"
            />
          </div>
        </div>
      </div>

      <div className="h-[8%] w-full flex items-end ">
        <p className="absolute text-white ml-2">Teams</p>
      </div>
      <div className="userteams w-[99%] h-[50%] flex flex-row items-center mt-1">
        <div className="w-[28%] h-full bg-dark-02 rounded-lg">
          {props.user.teams.map((team, i) => {
            return (
              <>
                <div className="team h-[30%] flex flex-row">
                  <div className="team-img-div w-[30%]">
                    <img
                      src={team.pfp}
                      alt=""
                      className="team-img h-full w-max"
                    />
                  </div>
                  <div className="team-info w-[70%] flex flex-col justify-center">
                    <div className="team-name ml-[2%]">
                      <p className="text-white text-sm">{team.name}</p>
                    </div>
                    <div className="team-description ml-[2%]">
                      <p className="text-white text-xs truncate overflow-hidden">
                        {team.description}
                      </p>
                    </div>
                    <div className="team-description ml-[2%] text-white text-xs">
                      membros
                    </div>
                  </div>
                </div>
                <div className="w-full h-[65%] rounded-br-lg rounded-bl-lg ">
                  <div
                    id="projects"
                    className="w-full h-[90%] flex flex-col justify-start items-center overflow-auto overflow-contain text-xs text-light-gray"
                  >
                    <div className="w-[90%] h-6 flex flex-row justify-between mt-[20px]">
                      <div className="project-name">Project-01</div>

                      <div className="ppl flex w-[50%] justify-around items-center">
                        <div className="members">2 Members</div>
                        <div className="role">Owner</div>
                      </div>
                    </div>

                    <div className="w-[90%] h-6 flex flex-row justify-between mt-[8px]">
                      <div className="project-name">Project-01</div>

                      <div className="ppl flex w-[50%] justify-around items-center">
                        <div className="members">2 Members</div>
                        <div className="role">Owner</div>
                      </div>
                    </div>

                    <div className="w-[90%] h-6 flex flex-row justify-between mt-[8px]">
                      <div className="project-name">Project-01</div>

                      <div className="ppl flex w-[50%] justify-around items-center">
                        <div className="members">2 Members</div>
                        <div className="role">Owner</div>
                      </div>
                    </div>

                    <div className="w-[90%] h-6 flex flex-row justify-between mt-[8px]">
                      <div className="project-name">Project-01</div>

                      <div className="ppl flex w-[50%] justify-around items-center">
                        <div className="members">2 Members</div>
                        <div className="role">Owner</div>
                      </div>
                    </div>

                    <div className="w-[90%] h-6 flex flex-row justify-between mt-[8px]">
                      <div className="project-name">Project-01</div>

                      <div className="ppl flex w-[50%] justify-around items-center">
                        <div className="members">2 Members</div>
                        <div className="role">Owner</div>
                      </div>
                    </div>

                    <div className="w-[90%] h-6 flex flex-row justify-between mt-[8px]">
                      <div className="project-name">Project-01</div>

                      <div className="ppl flex w-[50%] justify-around items-center">
                        <div className="members">2 Members</div>
                        <div className="role">Owner</div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};
