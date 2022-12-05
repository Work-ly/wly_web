import React from "react";

export const Doc = () => {
  return (
    <div className="flex flex-row r w-full h-full text-white">
      <div className="w-1/2 flex flex-col justify-start ">
        <div className="title h-10 w-[calc(100%-5rem)] flex flex-row justify-between items-end ml-2">
          <p className="text-lg">Files</p>
          <p className="text-sm">Role</p>
          <p className="text-sm">Contribuitors</p>
          <p className="text-sm">Size</p>
          <p className="text-sm">Type</p>
        </div>
        <div className="h-[calc(100%-5rem)] overflow-y-auto">
          <div className="title h-14 w-full flex flex-row justify-around items-end bg-dark-02 mt-2 rounded-lg "></div>
          <div className="title h-14 w-full flex flex-row justify-around items-end bg-dark-02 mt-2 rounded-lg"></div>
          <div className="title h-14 w-full flex flex-row justify-around items-end bg-dark-02 mt-2 rounded-lg"></div>
          <div className="title h-14 w-full flex flex-row justify-around items-end bg-dark-02 mt-2 rounded-lg"></div>
          <div className="title h-14 w-full flex flex-row justify-around items-end bg-dark-02 mt-2 rounded-lg"></div>
          <div className="title h-14 w-full flex flex-row justify-around items-end bg-dark-02 mt-2 rounded-lg"></div>
          <div className="title h-14 w-full flex flex-row justify-around items-end bg-dark-02 mt-2 rounded-lg"></div>
          <div className="title h-14 w-full flex flex-row justify-around items-end bg-dark-02 mt-2 rounded-lg"></div>
          <div className="title h-14 w-full flex flex-row justify-around items-end bg-dark-02 mt-2 rounded-lg"></div>
          <div className="title h-14 w-full flex flex-row justify-around items-end bg-dark-02 mt-2 rounded-lg"></div>
          <div className="title h-14 w-full flex flex-row justify-around items-end bg-dark-02 mt-2 rounded-lg"></div>
        </div>
      </div>
      <div className="w-1/2 flex justify-center items-center">Coming Soon</div>
    </div>
  );
};
