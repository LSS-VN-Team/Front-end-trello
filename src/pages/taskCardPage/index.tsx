import React, { useEffect, useState, useRef } from "react";

export interface TaskCardPageProps {}
export default function TaskCardPage(props: TaskCardPageProps) {
  return (
    <>
      <div className="h-full w-full bg-green-300">
        <div className="h-16 w-full"></div>
        <div className="h-taskCardH w-taskCardW bg-white m-auto rounded overflow-hidden">
          <div className="h-36 w-full bg-amber-300 flex">
            <div className="h-full w-5/6">
              <img
                src="https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/8efc9853e262ada6ad876602febec402/photo-1461896836934-ffe607ba8211.jpg"
                alt=""
                className="h-full w-52  m-auto"
              />
            </div>
            <div className="h-full w-1/6 ">
              <a href="" className="">
                <i className="fa-solid fa-xmark text-white text-xl mt-2 bg-slate-100 bg-opacity-40 hover:bg-slate-100 hover:bg-opacity-60 h-9 w-9 ml-20 rounded-full p-1 pl-3 "></i>
              </a>
              <span>
                <button className="h-9 w-20 rounded bg-slate-100 bg-opacity-60 hover:bg-slate-100 hover:bg-opacity-80 mt-14 ml-10">
                  <i className="fa-regular fa-window-restore mr-2"></i>
                  Cover
                </button>
              </span>
            </div>
          </div>
        </div>
        <div className="h-16 w-full"></div>
      </div>
    </>
  );
}
