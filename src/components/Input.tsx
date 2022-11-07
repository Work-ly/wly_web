import React from "react";

interface Props {
  onChange: (e: any) => void
  label: string;
  type: string;
  placeholder: string;
}

export const Input = (props: Props) => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <p className="w-full text-white 2xl:text-xl">
        {props.label}:
      </p>
      <input
        className="w-full h-12 rounded-md p-2 transition-all duration-200 ease-in 
                   hover:rounded-lg hover:shadow-xl 
                   focus:outline-none
                   2xl:h-[70px] 2xl:text-xl 2xl:p-6"
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
      ></input>
    </div>
  );
};
