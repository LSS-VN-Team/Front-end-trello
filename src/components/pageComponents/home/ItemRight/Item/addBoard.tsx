import Tippy from "@tippyjs/react/headless"
import FormAdd from "../FormAdd"

import { useDispatch, useSelector } from "react-redux"
import { getBoards, selectAllBoards } from "features/AddBoard/addboardSlide"
import { useEffect } from "react"
export interface AddBoardProps {

}

export default function AddBoard(props: AddBoardProps) {
    const dispatch = useDispatch()
    const boards = useSelector(selectAllBoards)

    useEffect(() => {
        dispatch(getBoards());
    }, [dispatch]);

    return (

        <div className="flex">
            <div className='flex flex-wrap max-w-4xl'>
                {boards.slice().reverse().map((board) => (
                    <div className='mr-2 mb-2'>
                        <p className='absolute text-white text-base font-bold p-2'>{board?.name}</p>
                        <img className='w-48 h-24 rounded-df cursor-pointer' src="https://images.unsplash.com/photo-1679214523859-c78a0bea016d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8N3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                    </div>
                ))}
                <div className="flex">
                    <Tippy
                        trigger='click'
                        placement='right'
                        interactive
                        render={attrs => (
                            <div className=' w-64 bg-white rounded-sm shadow-boxsd mt-84' tabIndex={-1} {...attrs}>
                                <FormAdd />
                            </div>
                        )}
                    >
                        <div className='mr-3 '>
                            <div className='w-48 h-24 rounded-sm bg-gray-200 flex items-center cursor-pointer hover:bg-gray-300' >
                                <p className='text-center w-full text-sm'>Tạo bảng mới</p>
                            </div>
                        </div>
                    </Tippy>
                </div>
            </div>
        </div>

    )
}