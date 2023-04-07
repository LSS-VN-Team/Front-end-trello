import React, { useState, useRef, useEffect } from "react";
import TaskForm from "./taskForm";
import { BsThreeDots } from "react-icons/bs";
import { HiPlusSm, HiOutlineTemplate } from "react-icons/hi";
import { useAppSelector } from "app/hooks";
import { useAppDispatch } from "app/hooks";
import { getTasks, selectAllTask } from "features/task/taskSlide";

interface BoardProps {
  title?: string;
  idCard?: string;
}

const Board: React.FC<BoardProps> = ({ title, idCard }) => {
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

  const task = useAppSelector(selectAllTask);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  return (
    <div className="w-card p-2">
      <div className="" ref={boardRef}>
        <div className="flex items-center justify-between">
          <p className={idCard}>{title}</p>
          <div className="p-1 rounded-sm hover:bg-cardbtn">
            <BsThreeDots />
          </div>
        </div>
        <div className="list">
          {task.map((tasks) => (
            <div className="my-1 p-1 bg-white shadow-inputsd rounded-sm">
              <p className="break-words">
                {tasks.title}
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
