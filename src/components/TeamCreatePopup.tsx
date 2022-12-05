import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { toast } from "react-toastify";

import { Image } from "../models/Image";
import toBase64 from "../util/Base64";
import { FirebaseUser } from "../models/User";
import { LocalTeam, CreateTeamRequest } from "../models/Team";

interface Props {
  close: any;
}

export const TeamCreatePopup = (props: Props) => {
  const [teamname, setTeamname] = useState("");
  const [description, setDescription] = useState("");
  const [pfp, setPfp] = useState({ data: "" } as Image);
  const [header, setHeader] = useState({ data: "" } as Image);

  const create = async () => {
    const url: string =
      "http://" +
      process.env.REACT_APP_WLY_BACK_HOST +
      ":" +
      process.env.REACT_APP_WLY_BACK_PORT +
      "/team"

    const newTeam: CreateTeamRequest = {
      name: teamname,
      description: description,
      pfp: pfp,
      header: header
    }

    const fbUser: FirebaseUser = JSON.parse(localStorage.getItem("fb_user")!);
    fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${fbUser.idToken}`,
      },
      body: JSON.stringify(newTeam),
    })
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          toast("Could not create team", {
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
          })

          localStorage.setItem("team", JSON.stringify(res))
          window.location.reload()
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
          <p className=" md:text-xl xl:text-xl2">Create a Team</p>
        </div>
        <div className="w-full h-[20%] flex flex-col justify-center items-center mt-[15px]">
          <p className="description md:text-md xl:text-lg w-[80%]"> Name: </p>
          <input
            type="text"
            className="w-[80%] md:h-12 xl:h-14 rounded-lg text-black md:text-md xl:text-lg p-4"
            required
            onChange={(e: any) => {
              setTeamname(e.target.value);
            }}
          />
        </div>
        <div
          className="w-full flex flex-col justify-center items-center mt-[15px] 
        xl:h-[28%] md:h-[20%]"
        >
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
        <div className="w-full  h-[30%] flex flex-row justify-around">
          <div className="flex flex-col items-center justify-center w-1/4 h-full ml-20 left ">
            <p> Profile Picture </p>
            <label className="flex flex-col items-center justify-center w-full duration-75 ease-in border-2 border-gray-300 border-dashed rounded-lg cursor-pointer h-3/4 transtition-all hover:bg-dark-02">
              <div className="flex flex-col items-center justify-center pt-5 pb-6 text-center">
                <svg
                  aria-hidden="true"
                  className="w-10 h-10 mb-3 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  ></path>
                </svg>
                <p className="text-xs ">SVG, PNG or JPG (MAX. 800x400px)</p>
              </div>
              <input
                id="dropzone-file"
                accept=".png,.jpeg,.jpg,.svg"
                type="file"
                className="hidden"
                onChange={async (e: any) => {
                  const file: File = e.target.files[0]
                  await toBase64(file).then((data: any) => {
                    setPfp({
                      type: data.slice(5, 22),
                      data: data.slice(23)
                    } as Image)
                  })
                }}
              />
            </label>
          </div>

          <div className="flex flex-col items-center justify-center w-1/4 h-full mr-20 left">
            <p> Header </p>
            <label className="flex flex-col items-center justify-center w-full duration-75 ease-in border-2 border-gray-300 border-dashed rounded-lg cursor-pointer h-3/4 bg-gray-50 transtition-all hover:bg-dark-02">
              <div className="flex flex-col items-center justify-center pt-5 pb-6 text-center">
                <svg
                  aria-hidden="true"
                  className="w-10 h-10 mb-3 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  ></path>
                </svg>
                <p className="text-xs ">SVG, PNG or JPG (MAX. 1200x400px)</p>
              </div>
              <input
                id="dropzone-file"
                accept=".png,.jpeg,.jpg,.svg"
                type="file"
                className="hidden"
                onChange={async (e: any) => {
                  const file: File = e.target.files[0]
                  await toBase64(file).then((data: any) => setHeader({
                    type: data.slice(5, 22),
                    data: data.slice(23)
                  } as Image))
                }}
              />
            </label>
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