import React, { useState, useRef, FormEvent } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { GrFormClose } from "react-icons/gr"
import { AiOutlineSearch } from 'react-icons/ai';
interface TaskFormProps {
    onSubmit: (inputValue: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit }) => {
    const [inputValue, setInputValue] = useState<string>('');
    const [error, setError] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!inputValue) {
            setError('Please enter a value');
            return;
        }
        setError('');
        onSubmit(inputValue);
        setInputValue('');
    };

    return (
        <form className="" onSubmit={handleSubmit}>
            <div className=''>
                <input className='placeholder:text-sm block bg-white rounded-sm p-1 mt-2 focus:outline-none pl-3 w-full shadow-inputsd' placeholder='Nhập tiêu đề cho thẻ này' type="text" ref={inputRef} value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center w-full mt-3'>
                    <button className=' text-white rounded-sm bg-submitadd p-1' type="submit"><p>Thêm thẻ</p></button>
                    <button className='text-2xl  ml-2'><GrFormClose /></button>
                </div>
                <div className='mt-3 text-xl text-gray-500 p-1 rounded-sm hover:bg-cardbtn'><BsThreeDots /></div>
            </div>
        </form>
    );
};

export default TaskForm;
