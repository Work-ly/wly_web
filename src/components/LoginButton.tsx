import React from "react";

interface Props {
  onClick: () => void
}

export const LoginButton = (props: Props) => {
  return (
    <button className="w-full h-12 rounded-md m-auto mt-10 bg-purple-secondary-dark text-white text-md transition-all duration-200 ease-in shadow-md
                       hover:bg-dark hover:shadow-lg
                       focus:outline-none
                       2xl:h-[70px] 2xl:text-xl"
      onClick={props.onClick}>
      Sign Up
    </button>
  );
};
