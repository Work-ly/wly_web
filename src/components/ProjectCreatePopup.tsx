import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { toast } from "react-toastify";

import { Image } from "../models/Image";
import toBase64 from "../util/Base64";
import { FirebaseUser } from "../models/User";
import { LocalProject, CreateProjectRequest } from "../models/Project";
import { LocalTeam } from "../models/Team";

interface Props {
  close: any;
}

export const ProjectCreatePopup = (props: Props) => {
  const [projectname, setProjectname] = useState("");
  const [description, setDescription] = useState("");

  const create = async () => {
    const teamData = localStorage.getItem('team')
    const team = (teamData != null) ? JSON.parse(teamData) : {} as LocalTeam

    const url: string =
      "http://" +
      process.env.REACT_APP_WLY_BACK_HOST +
      ":" +
      process.env.REACT_APP_WLY_BACK_PORT +
      "/team/" +
      team.name +
      "/project"

    const newProject: CreateProjectRequest = {
      name: projectname,
      description: description,
    };

    const fbUser: FirebaseUser = JSON.parse(localStorage.getItem("fb_user")!);
    fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${fbUser.idToken}`,
      },
      body: JSON.stringify(newProject),
    })
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          toast("Could not create project", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "dark",
          });
        }
      })
      .then((res) => {
        if (res) {
          toast("Created Successfully", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "dark",
          });

          localStorage.setItem("project", JSON.stringify(res));
          window.location.reload();
        }
      });
  };

  return (
    <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-screen h-screen text-white bg-low-opacity-black hover:cursor-default">
      <a
        onClick={props.close}
        className="absolute top-[7%] right-[28.5%]  transition-all duration-100 ease-linear cursor-pointer hover:text-purple-primary-light"
      >
        <i className="text-lg ">
          <AiOutlineClose />
        </i>
      </a>

      <div className="w-[45%] h-[90%] border-[2px] border-white rounded-lg bg-dark flex flex-col ">
        <div className="w-full h-[8%] flex justify-center items-center">
          <p className=" md:text-xl xl:text-xl2">Create a Project</p>
        </div>
        <div className="w-full h-[20%] flex flex-col justify-center items-center mt-[15px]">
          <p className="description md:text-md xl:text-lg w-[80%]"> Name: </p>
          <input
            type="text"
            className="w-[80%] md:h-12 xl:h-14 rounded-lg text-black md:text-md xl:text-lg p-4"
            required
            onChange={(e: any) => {
              setProjectname(e.target.value);
            }}
          />
        </div>
        <div className="w-full flex flex-col justify-center items-center mt-[15px] xl:h-[28%] md:h-[20%]">
          <p className="description sm:text-md xl:text-lg w-[80%]">
            {" "}
            Description:{" "}
          </p>
          <textarea
            className="w-[80%] md:h-64 xl:h-72 rounded-lg text-black md:text-sm xl:text-lg pl-4 pt-2 pr-4 text-start resize-none"
            onChange={(e: any) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <div className="w-full flex flex-col justify-center items-center  xl:h-[38%] md:h-[30%]">
          <p className="description sm:text-md xl:text-lg w-[80%] h-[10%]">
            Users:{" "}
          </p>
          <div className="users w-[80%] h-[90%] flex justify-center items-center">
            


          </div>
        </div>
        <div className="w-full h-[12%] flex flex-row justify-around items-center">
          <button
            onClick={props.close}
            className="w-[35%] h-[70%] text-lg rounded-lg ml-20 border-2
          transition duration-200 ease-in hover:bg-white hover:text-black
          "
          >
            {" "}
            Cancel{" "}
          </button>
          <input
            type="submit"
            className="w-[35%] h-[70%] bg-purple-primary-light  text-lg rounded-lg mr-20
          transition duration-200 ease-in hover:bg-dark-02 cursor-pointer"
            value="Create"
            onClick={create}
          />
        </div>
      </div>
    </div>
  );
};
