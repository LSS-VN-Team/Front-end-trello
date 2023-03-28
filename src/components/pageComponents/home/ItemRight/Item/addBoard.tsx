import Tippy from "@tippyjs/react/headless"
import FormAdd from "../FormAdd"
import { Link } from "react-router-dom"
export interface AddBoardProps {

}
const board = [
    {
        title: "test",
        ulr: "https://images.unsplash.com/photo-1679214523859-c78a0bea016d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8N3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        path: "/board"
    },
]
export default function AddBoard(props: AddBoardProps) {

    return (
        <div className='flex mt-4'>
            {board.slice().reverse().map((item) => (
                <Link to={item.path??"/"}>
                    <div className='mr-3'>
                        <p className='absolute text-white text-base font-bold p-2'>{item.title}</p>
                        <img className='w-48 h-24 rounded-df cursor-pointer' src={item.ulr} alt="" />
                    </div>
                </Link>
            ))}
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
    )
}