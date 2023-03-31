import React, { useState, useRef, useEffect } from "react";
import TaskForm from "./taskForm";
import { AiOutlinePlus } from "react-icons/ai";
import { BsPencil, BsThreeDots } from "react-icons/bs";
import { HiPlusSm, HiOutlineTemplate } from "react-icons/hi";
import { GrFormClose } from "react-icons/gr";

interface BoardProps {
  title: string;
  typeBoard: string;
}

const Board: React.FC<BoardProps> = ({ title, typeBoard }) => {
  const [showTaskForm, setShowTaskForm] = useState<boolean>(false);
  const [tasks, setTasks] = useState<string[]>([]);
  const [activeTaskIndex, setActiveTaskIndex] = useState<number>(-1);
  const boardRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const handleClickOutside = (event: MouseEvent) => {
    if (formRef.current && !formRef.current.contains(event.target as Node)) {
      setShowTaskForm(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    if (showTaskForm) {
      formRef.current!.querySelector("input")!.focus();
    }
  }, [showTaskForm]);

  const addTask = (task: string) => {
    setTasks([...tasks, task]);
    setShowTaskForm(false);
  };
  const deleteTask = (index: number) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const changeTask = (index: number, newTask: string | null) => {
    if (!newTask) return;

    const newTasks = [...tasks];
    newTasks[index] = newTask;
    setTasks(newTasks);
  };

  const handleFormCancel = () => {
    setShowTaskForm(false);
  };

  return (
    <div className="w-card p-2">
      <div className="" ref={boardRef}>
        <div className="flex items-center justify-between">
          <p className={typeBoard}>{title}</p>
          <div className="p-1 rounded-sm hover:bg-cardbtn">
            <BsThreeDots />
          </div>
        </div>
        <div className="list">
          {tasks.map((task, index) => (
            <div className="my-1 p-1 bg-white shadow-inputsd rounded-sm">
              <p
                key={index}
                className="break-words"
                onMouseEnter={() => setActiveTaskIndex(index)}
                onMouseLeave={() => setActiveTaskIndex(-1)}
                draggable
                onDragStart={(e) => e.dataTransfer.setData("task", task)}
              >
                {task}
                {activeTaskIndex === index && (
                  <button className="p-1.5 hover:bg-gray-300 rounded-sm ">
                    <BsPencil className="text-xs text-gray-500 " />
                  </button>
                )}
              </p>
            </div>
          ))}
        </div>

        {showTaskForm ? (
          <div ref={formRef}>
            <TaskForm onSubmit={addTask} />
          </div>
        ) : (
          <div className="mx-2 flex items-center text-gray-500">
            <button
              className="flex items-center w-full p-1 rounded-sm hover:bg-cardbtn my-2"
              onClick={() => setShowTaskForm(true)}
            >
              <HiPlusSm />
              <p>Thêm thẻ</p>
            </button>
            <button className="p-1 rounded-sm hover:bg-cardbtn">
              <HiOutlineTemplate />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Board;
