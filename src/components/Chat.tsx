/*
 * file: src/pages/Header.tsx
 * author: Felipe Gomes da Silva <felipe.gsilva@protonmail.com>
 * date: October 31, 2022
 */

import React from "react";

export const Chat = () => {
  return (
    <div className="fixed w-2/3 h-3/4 rounded-[10px] border-[1px] top-16 right-7 flex flex-row">
      <div className="basis-2/5 h-full bg-dark rounded-tl-[10px] rounded-bl-[10px] overflow-y-auto">
        <div className="h-[15%] bg-gradient-to-t from-transparent to-dark-02">
          
        </div>
      </div>
      <div className=" basis-3/5 bg-purple-secondary-dark rounded-tr-[10px] rounded-br-[10px] overflow-y-auto">
        <div className="h-[15%] bg-gradient-to-b from-purple-primary-dark to-transparent top-0">
            
        </div>
        <div className="h-[85%] flex justify-center items-center"><p className="mb-[15%] text-xl">Coming Soon</p></div>
      </div>
    </div>
  );
};
