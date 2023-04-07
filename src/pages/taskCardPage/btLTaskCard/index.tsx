import React, { useState, ChangeEvent, useRef, useEffect } from "react";
import { BsListNested } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import { MdOutlineLaptopChromebook } from "react-icons/md";
import { HiOutlinePaperClip } from "react-icons/hi";
import { GrList } from "react-icons/gr";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";

export interface BTLTaskCardPageProps {}

export default function BTLTaskCardPage(
  props: BTLTaskCardPageProps
): JSX.Element {
  const [inputValue, setInputValue] = useState<string>("");

  //comment
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
  };

  const [isCommentOpen, setIsCommentOpen] = useState(false);

  const handleOpenComment = () => {
    setIsCommentOpen(true);
  };

  const handleCloseComment = () => {
    setIsCommentOpen(false);
  };

  // description
  const [description, setDescription] = useState<string>("");
  const [isInputOpen, setIsInputOpen] = useState<boolean>(false);
  const [editedDescription, setEditedDescription] = useState("");

  const handleOpenInput = () => {
    setIsInputOpen(true);
  };

  const handleCloseInput = () => {
    setIsInputOpen(false);
  };

  const handleSaveDescription = () => {
    const inputElement = document.getElementById(
      "description-input"
    ) as HTMLInputElement;
    setDescription(inputElement.value);
    setIsInputOpen(false);
  };

  const handleEditDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditedDescription(e.target.value);
  };

  //click Add Attachment
  const [file, setFile] = useState<File | null>(null);

  const handleAddAttachmentClick = () => {
    const fileInput = document.getElementById("fileInput") as HTMLInputElement;
    fileInput.click();
  };

  const handleFileInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  //detail
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => setShowDetails(!showDetails);

  // comment
  const [comment, setComment] = useState("");
  const [commentsList, setCommentsList] = useState<string[]>([]);

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      setCommentsList((prevList) => [...prevList, comment]);
      setComment("");
    }
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setComment(event.target.value);
  }

  return (
    <>
      <div className="h-fit w-3/4 ">
        <div className="h-18 w-full">
          <div>
            <div className=" ml-7 mt-5 text-lg flex items-center">
              <MdOutlineLaptopChromebook />
              <input
                className="h-8 w-full pl-3 ml-4"
                placeholder="Move anything . . ."
                value={inputValue}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex font-light ml-[75px] text-sm">
              <p>in list</p>
              <Tippy
                render={(attrs) => (
                  <div
                    className="box"
                    style={{
                      height: "200px",
                      width: "96px",
                      backgroundColor: "black",
                    }}
                    {...attrs}
                  ></div>
                )}
              >
                <button className="ml-1 underline">DOING</button>
              </Tippy>
            </div>
          </div>
          <div className="ml-7 mt-5 text-lg h-64 w-full">
            <div className="flex items-center">
              <BsListNested className="mr-5" />
              Description
            </div>
            <div className="relative">
              {!isInputOpen && !description && (
                <div
                  className="w-[85%] h-12 pl-3 text-sm mt-4 ml-10 bg-slate-200 rounded-sm"
                  onClick={handleOpenInput}
                >
                  <p className="w-full h-full items-center pt-[14px] ">
                    Add a more detailed description...
                  </p>
                </div>
              )}
              {!isInputOpen && description && (
                <div className="ml-10 mt-4">
                  <p
                    onClick={handleOpenInput}
                    className="text-sm cursor-pointer"
                  >
                    {description}
                  </p>
                </div>
              )}
              {isInputOpen && (
                <div className="absolute top-full w-[85%] ml-10 mt-2 bg-white rounded-sm shadow-lg">
                  <div className="p-2 border-b border-gray-300 flex justify-between items-center">
                    <h2 className="font-light text-sm">
                      Please leave a description of something behind.
                    </h2>
                  </div>
                  <div className="p-2">
                    <textarea
                      id="description-input"
                      className="w-full text-sm border rounded-sm px-2 py-1"
                      placeholder="Write your description here..."
                      value={editedDescription}
                      onChange={handleEditDescription}
                      rows={3}
                    ></textarea>
                  </div>
                  <div className="p-2 flex items-center justify-between">
                    <div>
                      <button>
                        <strong>B</strong>
                      </button>
                      <button>
                        <em>I</em>
                      </button>
                      <button>
                        <u>U</u>
                      </button>
                    </div>
                    <div className="flex">
                      <button
                        className="mr-2 bg-sky-500 text-sm font-light rounded-sm h-7 w-12 text-white"
                        onClick={handleSaveDescription}
                      >
                        Save
                      </button>
                      <button
                        className="mr-2 text-sm font-light hover:bg-slate-200 rounded-sm h-7 w-14"
                        onClick={handleCloseInput}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className=" text-lg ml-8 w-full">
            <div className="flex items-center">
              <HiOutlinePaperClip />
              <p className="ml-5">Attachments</p>
            </div>
            <div className="h-28 w-[85%] rounded-sm ml-10 hover:bg-slate-200"></div>
            <div className="ml-10 mt-3">
              <input
                type="file"
                id="fileInput"
                className="hidden"
                onChange={handleFileInputChange}
              />
              <button
                className="bg-slate-200 w-32 rounded-sm h-8 font-light text-sm"
                onClick={handleAddAttachmentClick}
              >
                Add an attachment
              </button>
            </div>
          </div>
          <div className="ml-8 mt-5 text-lg flex items-center justify-between">
            <div className="flex items-center">
              <GrList className="mr-5" />
              Activity
            </div>
            <button
              className="bg-slate-200 rounded-sm font-light h-8 w-24 text-sm mr-4"
              onClick={toggleDetails}
            >
              {showDetails ? "Hide details" : "Show details"}
            </button>
          </div>

          <div className="w-[92%] h-10 ml-8 flex items-center ">
            <div className="bg-green-400 rounded-full w-9 h-9 mt-5"></div>
            <input
              className="ml-3 text-sm pl-2 w-[90%] h-full mt-5 bg-slate-50"
              type="text"
              placeholder="Write a comment..."
              value={comment}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            />
          </div>
          {commentsList.length > 0 && (
            <div className="w-full h-auto px-8 mb-5">
              {commentsList.map((comment, index) => (
                <div
                  key={index}
                  className="w-full h-10 mt-5 flex items-center "
                >
                  <div className="bg-green-400 rounded-full w-9 h-9"></div>
                  <p className="ml-3 text-sm">{comment}</p>
                </div>
              ))}
            </div>
          )}
          {showDetails && (
            <div className="w-full h-auto px-8 mb-5">
              {[1, 2, 3, 4, 5].map((detail) => (
                <div
                  key={detail}
                  className="w-full h-10 mt-5 flex items-center"
                >
                  <div className="bg-green-400 rounded-full w-9 h-9"></div>
                  <p className="ml-3 text-sm">detail {detail}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
