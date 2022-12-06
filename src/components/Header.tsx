/*
 * file: src/pages/Header.tsx
 * author: Felipe Gomes da Silva <felipe.gsilva@protonmail.com>
 * date: October 21, 2022
 */

import React, { useState } from "react";

import wly from "../dist/images/W.LY.svg";
import team from "../dist/images/team_icon.png";
import project from "../dist/images/projects_icon.png";
import arrow from "../dist/images/arrow.png";
import ntc from "../dist/images/notification.png";
import msg from "../dist/images/msg.png";

import { ConfigDropdown } from "../components/ConfigDropdown";
import { Chat } from "../components/Chat";
import { Notification } from "../components/Notification";
import { LocalUser, UserProject } from "../models/User";
import { LocalTeam } from "../models/Team";
import { LocalProject } from "../models/Project";
import ReactDOM from "react-dom";
import useEffect from 'react';

interface Props {
  team: LocalTeam;
  user: LocalUser;
  project: UserProject;
}

interface Config {
  user: LocalUser;
  team: LocalTeam;
}

function Config(props: Config) {
  const [cfgOpen, setCfgOpen] = useState(false);

  return (
    <>
      <a
        className="flex flex-row items-center justify-end ml-4 w-max hover:cursor-pointer group"
        onClick={() => setCfgOpen(!cfgOpen)}
      >
        <div className="w-[40px] h-[40px] mr-2 rounded-full border-2 text-white flex justify-end items-center ">
          <img
            id="usr_img"
            src={`data:${props.user.pfp.type},${props.user.pfp.data}`}
            className="w-full h-full rounded-full"
          ></img>
        </div>
        <p
          id="usr_nickname"
          className="text-sm text-white transition-all duration-300 border-t-2 border-b-2 group-hover:border-b-white border-t-dark border-b-dark"
        >
          {props.user.name}
        </p>
        <img
          src={arrow}
          className="w-[10px] h-[7px] ml-2 mt-1 group-hover:translate-y-[1px] transition-all duration-300 ease-out"
        ></img>
      </a>
      {cfgOpen ? (
        <ConfigDropdown user={{ name: props.user.name } as LocalUser} />
      ) : (
        <></>
      )}
    </>
  );
}

function Dropdowns() {
  const [chatOpen, setChatOpen] = useState(false);
  const [ntcOpen, setNtcOpen] = useState(false);

  return (
    <>
      <a
        onClick={() => setChatOpen(!chatOpen)}
        className="flex items-center justify-center group "
      >
        <img
          src={msg}
          className="w-6 mt-[10px] group-hover:cursor-pointer group-hover:shadow-md transition-all duration-200
        hover:scale-110"
        ></img>
      </a>
      <a
        onClick={() => {
          setNtcOpen(!ntcOpen);
        }}
        className="flex items-center justify-center group"
      >
        <img
          src={ntc}
          className="w-5 mt-1 transition-all duration-200 group-hover:cursor-pointer group-hover:shadow-md hover:scale-110"
        ></img>
      </a>
      {chatOpen ? <Chat /> : <></>}
    </>
  );
}

function Header(props: Props) {
  return (
    <>
      <div className="absolute z-50 flex flex-row w-[98%] h-16 ">
        <div className="w-[calc(103px)] h-full flex justify-center items-center ml-[5px]">
          <img src={wly} className="w-[calc(50px)] absolute z-10" />
        </div>
        <div className="flex flex-row justify-between w-full">
          <div className="w-1/2 h-full flex flex-row items justify-start z-15">
            <a className="flex flex-row items-center justify-center h-full w-max ml-[0.15rem]">
              <img src={team} className="w-[calc(20px)]"></img>
              <p
                id="team"
                className="ml-2 text-sm text-white truncate max-w-[200px]"
              >
                
              {
                (props.team.name === "")
                  ? "No team selected"
                  : props.team.name}
                    
              </p>
            </a>

            <a className="flex flex-row items-center justify-center h-full w-max ml-[1rem] group cursor-pointer">
              <img src={project} className="w-[calc(20px)]"></img>
              <div className="h-[30%] flex justify-center items-center">
                <p
                  id="team"
                  className="ml-2 text-sm text-white transition-all duration-300 border-t-2 border-b-2 group-hover:border-b-white border-t-dark border-b-dark truncate max-w-[200px]"
                >
                  {props.project.project.name}
                </p>
              </div>
              <img
                src={arrow}
                className="w-[calc(10px)] ml-2 mt-1  group-hover:translate-y-[1px] transition-all duration-300 ease-out"
              ></img>
            </a>
          </div>

          <div className=" w-1/2 flex flex-row justify-end items-center mt-0  z-20 bg-gradient-to-r from-transparent to-dark">
            <div className="flex flex-row items-center justify-around w-24 text-white icons">
              <Dropdowns />
            </div>
            <div className="justify-end w-max">
              <Config
                user={{
                  name: props.user.name,
                  pfp: props.user.pfp,
                  header: props.user.header,
                  description: props.user.description,
                  email: props.user.email,
                  teams: [],
                }}
                team={{} as LocalTeam}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
