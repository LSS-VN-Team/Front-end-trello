import { useAppDispatch, useAppSelector } from "app/hooks";
import React, { useState, useRef, FormEvent } from "react";
import { BsThreeDots } from "react-icons/bs";
import { GrFormClose } from "react-icons/gr";
import { Card } from "interfaces";
import { addTasks, selectAllTask } from "features/task/taskSlide";
interface TaskFormProps {
  onSubmit: (inputValue: string) => void;
}
const TaskForm: React.FC<TaskFormProps> = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const task = useAppSelector(selectAllTask);
  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    if (!inputValue) {
      return;
    }
    const newTask = {
      title: inputValue,
      idCard: "",
    };
    dispatch(addTasks(newTask));
    setInputValue("");
  };

  return (
    <div>
      <form className="" onSubmit={(e) => e.preventDefault()}>
        <div className="">
          <input
            className="placeholder:text-sm block bg-white rounded-sm p-1 mt-2 focus:outline-none pl-3 w-full shadow-inputsd"
            placeholder="Nhập tiêu đề cho thẻ này"
            type="text"
            ref={inputRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
      </form>
      <div className="flex items-center justify-between">
        <div className="flex items-center w-full mt-3">
          <button
            className=" text-white rounded-sm bg-submitadd p-1"
            onClick={handleSubmit}
          >
            <p>Thêm thẻ</p>
          </button>
          <button className="text-2xl  ml-2">
            <GrFormClose />
          </button>
        </div>
        <div className="mt-3 text-xl text-gray-500 p-1 rounded-sm hover:bg-cardbtn">
          <BsThreeDots />
        </div>
      </div>
    </div>
  );
};

export default TaskForm;
