import React, { useState } from "react";
import { AiOutlinePlusCircle, AiFillPlusCircle } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { LocalTeam } from "../models/Team";
import { LocalUser } from "../models/User";
import { ProjectCreatePopup } from "./ProjectCreatePopup";
import { TeamEditPopup } from "./TeamEditPopup"

interface Props {
  team: LocalTeam;
}

function CreateProject() {
  const [createProjectOpen, setCreateProjectOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setCreateProjectOpen(!createProjectOpen)}
        className="flex flex-col items-center justify-around h-10 pt-6 pb-6 pl-4 pr-4 text-white transition-all duration-200 border-2 border-white rounded-lg group"
      >
        <p className="transition-all duration-200 group-hover:-translate-y-[1px]">
          {" "}
          Project
        </p>
        <i className="transition-all duration-200 group-hover:scale-105 group-hover:text-purple-primary-light">
          <AiFillPlusCircle />
        </i>
      </button>
      {createProjectOpen ? (
        <ProjectCreatePopup
          close={() => {
            setCreateProjectOpen(!createProjectOpen);
          }}
        />
      ) : (
        <></>
      )}
    </>
  );
}

function EditTeam(curTeam: LocalTeam) {
  const [teamEditOpen, setTeamEditOpen] = useState(false)

  return (
    <>
      <div
        onClick={() => setTeamEditOpen(!teamEditOpen)}
        className="hover:cursor-default"
      >
        <a className="transition-all duration-100 ease-linear cursor-pointer hover:text-purple-primary-light">
          <FiEdit />
        </a>
      </div>

      {teamEditOpen ? (
        <TeamEditPopup
          close={() => setTeamEditOpen(!teamEditOpen)}
          team={{
            name: curTeam.name,
            pfp: curTeam.pfp,
            header: curTeam.header,
            description: curTeam.description,
            users: []
            
          }}
        />
      ) : (
        <></>
      )}
    </>
  )
}

export const Team = (props: Props) => {
  return (
    <div className="w-full h-[95%]">
      <div className="w-full h-[40%] flex flex-col items-center ">
        <div className="w-full h-full rounded-tl-lg rounded-tr-lg teaminfo">
          <div className="user-info text-white flex h-[30%] w-[89%] flex-row absolute items-end justify-between ">
            <div className="flex flex-row items-end ">
              <div className="pfp w-[8rem] h-[8rem] ml-10">
                <div className="pfp_img w-[100%] h-full">
                  <img
                    src={`data:${props.team.pfp.type},${props.team.pfp.data}`}
                    alt="Profile Pic"
                    className="w-full h-full rounded-full border-[1px] object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col ml-3 info">
              
                <div className="flex flex-row items-center">
                
                  <p className="text-md"> {props.team.name} </p>
                  <a className="ml-2 w-[1%] cursor-pointer">
                    <EditTeam {...props.team} />{" "}
                  </a>
                </div>
              </div>
            </div>
            <div className="description w-[30%] h-[30%] flex justify-end items-end">
              <p className="text-right text-white w-max h-max line-clamp-break-all">
                {props.team.description}
              </p>
            </div>
          </div>

          <div className="w-full h-full gradient-overlay banner">
            <div className="w-full h-full ">
              <img
                src={`data:${props.team.header.type},${props.team.header.data}`}
                alt=""
                className="w-full h-full gradient-bt-img z-5 rounded-t-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="titles w-full h-[10%] text-white flex items-end ml-[1%]">
        <div className="w-[34%]">
          <p>Projects</p>
        </div>
        <div className="w-[66%]">
          <p>Members</p>
        </div>
      </div>
      <div className="w-[100%] h-[50%] flex flex-row items-center mt-1">
        <div className="w-[35%] h-full mt-[1%] ">
          <div
            className="w-full h-max md:max-h-[13rem] xl:max-h-[15rem]  overflow-y-auto
          xl:h-[85%]"
          ></div>
          <div
            className="w-[95%] h-[10%] flex justify-center items-center 
          xl:h-[15%] mt-4"
          >
            <CreateProject/>
          </div>
        </div>
        <div className="w-[65%] h-full mt-[1%]"></div>
      </div>
    </div>
  );
};
