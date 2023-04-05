import React, { useEffect, useState, useRef } from "react";
import { FaTimes } from "react-icons/fa";
import { TbDeviceLaptop } from "react-icons/tb";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

interface TaskCardPageProps {}

export default function TaskCardPage(props: TaskCardPageProps) {
  const [showTooltip, setShowTooltip] = useState<boolean>(false);
  const coverRef = useRef<HTMLSpanElement>(null);

  const handleCoverClick = () => {
    setShowTooltip(true);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        coverRef.current &&
        !coverRef.current.contains(event.target as Node)
      ) {
        setShowTooltip(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [coverRef]);

  return (
    <div className="flex h-full w-full">
      <div className="h-full w-52 m-auto">
        <img
          src="https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/8efc9853e262ada6ad876602febec402/photo-1461896836934-ffe607ba8211.jpg"
          alt=""
          className="h-full w-full"
        />
      </div>
      <div className="h-full w-1/6 ">
        <a href="">
          <FaTimes className=" mt-2 bg-slate-100 bg-opacity-40 hover:bg-slate-100 hover:bg-opacity-60 h-9 w-9 ml-20 rounded-full p-2 pl-2" />
        </a>
        <span ref={coverRef}>
          <Tippy
            content="This is the cover tooltip"
            visible={showTooltip}
            placement="bottom"
            animation="shift-away"
            theme="material"
          >
            <button
              className="h-9 w-20 rounded bg-slate-100 bg-opacity-60 hover:bg-slate-100 hover:bg-opacity-80 mt-14 ml-10 flex"
              onClick={handleCoverClick}
            >
              <TbDeviceLaptop className="ml-1.5 my-auto text-lg" />
              <p className="ml-1 my-auto">Cover</p>
            </button>
          </Tippy>
        </span>
      </div>
    </div>
  );
}
