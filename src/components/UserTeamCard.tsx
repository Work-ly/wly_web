import React from 'react'

import { LocalTeam } from "../models/Team";
import { LocalUsers } from './UserPage';

interface Props {
  team: LocalTeam;
  users: LocalUsers
}

export const UserTeamCard = (props: Props) => {
  return (
    <div className="w-[20rem] h-[95%] bg-dark-02 rounded-lg mr-4">
      <div className="team h-[30%] flex flex-row">
        <div className="team-img-div w-[30%]">
          <img
            src={`data:${props.team.pfp.type},${props.team.pfp.data}`}
            alt=""
            className="h-full team-img w-max rounded-tl-10 object-cover rounded-tl-lg"
          />
        </div>
        <div className="team-info w-[70%] flex flex-col justify-center">
          <div className="team-name ml-[2%]">
            <p className="text-sm text-white">{props.team.name}</p>
          </div>
          <div className="team-description ml-[2%] h-[40px] pr-4">
            <p className="w-full overflow-hidden text-xs text-white line-clamp">
              {props.team.description}
            </p>
          </div>
          <div className="team-description ml-[2%] text-white text-xs">
            1 membro
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
    </div>
  );
};
