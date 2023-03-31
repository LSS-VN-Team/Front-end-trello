import React, { useState, ChangeEvent } from "react";
import { BsListNested } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import { MdOutlineLaptopChromebook } from "react-icons/md";
import { HiOutlinePaperClip } from "react-icons/hi";
import { GrList } from "react-icons/gr";

interface Icon {
  key: string;
  icon: JSX.Element;
  title: string;
}

const iconBL: Icon[] = [
  {
    key: "user3",
    icon: <BsListNested />,
    title: "Description",
  },
  {
    key: "user4",
    icon: <HiOutlinePaperClip />,
    title: "Attachments",
  },
  {
    key: "user5",
    icon: <GrList />,
    title: "Activity",
  },
];

export interface BTLTaskCardPageProps {}

export default function BTLTaskCardPage(
  props: BTLTaskCardPageProps
): JSX.Element {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <div className="h-full w-3/4">
        <div className="h-18 w-full">
        <div className=" ml-7 mt-5 text-lg flex items-center">
          <MdOutlineLaptopChromebook />
          <input
            // type="text"
            className="h-8 w-full pl-3 ml-4"
            placeholder="Move anything . . ."
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
        </div>
        {iconBL.map((item: Icon) => (
          <p
            className="h-8 w-5/6 flex mx-4 mt-1.5 pl-2 text-lg items-center rounded-sm"
            key={item.key}
          >
            {item.icon}
            <span className="ml-4">{item.title}</span>
          </p>
        ))}
      </div>
    </>
  );
}
