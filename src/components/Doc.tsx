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
          <div className="title h-14 w-full flex flex-row justify-left items-center bg-dark-02 mt-2 rounded-lg ">
            <div className="w-[85%] flex justify-between ml-4">
              <p className="text-white">File01</p>
              <p className="text-white">Member</p>
              <p className="text-white">JosuTm</p>
              <p className="text-white">1.7kb</p>
              <p className="text-white">.txt</p>
            </div>
          </div>
          <div className="title h-14 w-full flex flex-row justify-left items-center bg-dark-02 mt-2 rounded-lg ">
            <div className="w-[85%] flex justify-between ml-4">
              <p className="text-white">File01</p>
              <p className="text-white">Member</p>
              <p className="text-white">JosuTm</p>
              <p className="text-white">1.7kb</p>
              <p className="text-white">.txt</p>
            </div>
          </div><div className="title h-14 w-full flex flex-row justify-left items-center bg-dark-02 mt-2 rounded-lg ">
            <div className="w-[85%] flex justify-between ml-4">
              <p className="text-white">File01</p>
              <p className="text-white">Member</p>
              <p className="text-white">JosuTm</p>
              <p className="text-white">1.7kb</p>
              <p className="text-white">.txt</p>
            </div>
          </div><div className="title h-14 w-full flex flex-row justify-left items-center bg-dark-02 mt-2 rounded-lg ">
            <div className="w-[85%] flex justify-between ml-4">
              <p className="text-white">File01</p>
              <p className="text-white">Member</p>
              <p className="text-white">JosuTm</p>
              <p className="text-white">1.7kb</p>
              <p className="text-white">.txt</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 flex flex-col justify-center items-center mt-1">
        <p className="editor w-[90%] text-left">editor</p>
        <textarea className='w-[90%] h-[90%] bg-dark-02 mt-2 p-4 rounded-lg'/>
      </div>
    </div>
  );
};
