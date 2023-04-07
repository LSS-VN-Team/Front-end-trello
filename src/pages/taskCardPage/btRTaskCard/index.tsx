import React, { useEffect, useState, useRef } from "react";
import { deleteCard, selectAllCard } from "features/card/cardSlide";
import { CiUser } from "react-icons/ci";
import { BsTag, BsCheck2Square, BsClock, BsArchive } from "react-icons/bs";
import { HiOutlinePaperClip } from "react-icons/hi";
import { FaAccusoft } from "react-icons/fa";
import {
  AiOutlinePlus,
  AiOutlineArrowRight,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { MdOutlineContentCopy } from "react-icons/md";
import { VscNotebookTemplate } from "react-icons/vsc";
import { log } from "console";
import { useAppDispatch, useAppSelector } from "app/hooks";

const iconBR = [
  {
    key: "user1",
    icon: <CiUser />,
    title: "Join",
  },
  {
    key: "user2",
    icon: <CiUser />,
    title: "Member",
  },
  {
    key: "user3",
    icon: <BsTag />,
    title: "Labels",
  },
  {
    key: "user4",
    icon: <BsCheck2Square />,
    title: "Checklist",
  },
  {
    key: "user5",
    icon: <BsClock />,
    title: "Dates",
  },
  {
    key: "user6",
    icon: <HiOutlinePaperClip />,
    title: "Attachment",
  },
  {
    key: "user7",
    icon: <FaAccusoft />,
    title: "Custom Fields",
  },
  {
    key: "user8",
    icon: <AiOutlinePlus />,
    title: "Add Power-Ups",
  },
  {
    key: "user9",
    icon: <AiOutlinePlus />,
    title: "Add button",
  },
  {
    key: "user10",
    icon: <AiOutlineArrowRight />,
    title: "Move",
  },
  {
    key: "user11",
    icon: <MdOutlineContentCopy />,
    title: "Copy",
  },
  {
    key: "user12",
    icon: <VscNotebookTemplate />,
    title: "Make template",
  },
  {
    key: "user13",
    icon: <BsArchive />,
    title: "Archive",
  },
  {
    key: "user14",
    icon: <AiOutlineShareAlt />,
    title: "Share",
  },
];

export interface BTRTaskCardPageProps {}
export default function BTRTaskCardPage(props: BTRTaskCardPageProps) {
  const dispatch = useAppDispatch();
  const card = useAppSelector(selectAllCard)
  const handleArchiveClick = (cardId: string) => {
    const btn1 = "user13";
    const item = iconBR.find((item) => item.key === btn1);
    if (item) {
      dispatch(deleteCard(cardId));
    }
  };

  return (
    <>
      <div className="h-fit w-1/4 bg-gray-50-300 mb-10">
        {iconBR.map((item) => (
          <div
            key={item.key}
            className={`${
              ["user2", "user8", "user9", "user11", "user13"].includes(item.key)
                ? "mt-8"
                : item.key === "user1"
                ? "mt-20"
                : ""
            }`}
          >
            <button
              onClick={() => handleArchiveClick('card')}
              className="h-8 w-5/6 bg-slate-200 hover:bg-slate-300 font-light flex mx-4 mt-1.5 pl-2 text-sm items-center rounded-sm"
            >
              {item.icon}
              <p className="ml-3">{item.title}</p>
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
