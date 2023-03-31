import Tippy from '@tippyjs/react/headless'
import FormAdd from 'components/pageComponents/home/ItemRight/FormAdd'
import { boardSeleted, getBoards, removeBoard, selectAllBoards } from 'features/AddBoard/addboardSlide'
import { AiOutlineSetting } from 'react-icons/ai'
import { BiChevronLeft, BiChevronDown, BiChevronRight } from 'react-icons/bi'
import { BsPerson, BsThreeDots } from 'react-icons/bs'
import { FaTrello } from 'react-icons/fa'
import { HiPlusSm, HiOutlineClipboardList, HiOutlineCalendar } from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
const itemtSidebar = [
    {
        title: "Bảng",
        icon: <FaTrello />
    },
    {
        title: "Thành viên",
        icon: <BsPerson />,
        iconright: <HiPlusSm />
    },
    {
        title: "Các cài đặt không gian làm việc",
        icon: <AiOutlineSetting />,
        iconright: <BiChevronDown />
    }
]
export default function SideBar() {
    const dispatch = useDispatch()
    const boards = useSelector(selectAllBoards)

    useEffect(() => {
        dispatch(getBoards());
    }, [dispatch]);

    const handleClick = (board: any) => {
        dispatch(boardSeleted(board))
    }
    const deleteBoard = (boardId: any) => {
        const confirmed = window.confirm("Bạn có chắc chắn muốn xóa bảng này?");
        if (confirmed) {
            dispatch(removeBoard(boardId));
        }
    }

    return (
        <div className=' w-sidebar'>
            <div className=" h-full  backdrop-blur-lg border-0.5 border-[hsla(0,0%,100%,0.16)] flex flex-col items-center justify-between">
                <div >
                    <div className="py-4 flex items-center border-b border-[hsla(0,0%,100%,0.16)] text-white">
                        <div className=' px-2.5 rounded-sm bg-icoinT mr-4 ml-2'><p className='text-lg font-bold text-white'>T</p></div>
                        <div>
                            <p className='text-sm font-semibold py-1'>Trello Không gian làm việc</p>
                            <p className='text-xs py-1'>Miễn phí</p>
                        </div>
                        <div className='ml-5 p-1.5 rounded-sm mr-1 text-2xl hover:bg-buttonnavhover'><BiChevronLeft /></div>
                    </div>
                    <div className='py-4 '>
                        {itemtSidebar.map((item) => (
                            <div className='text-white flex items-center justify-between p-2 hover:bg-sidebarhover cursor-pointer'>
                                <div className='flex items-center pl-'>
                                    <div className='mr-2 pl-2'>{item.icon}</div>
                                    <p className=' text-sm'>{item.title}</p>
                                </div>
                                <div className='text-2xl ml-3 hover:bg-buttonnavhover rounded-sm'>{item.iconright}</div>
                            </div>
                        ))}
                    </div>
                    <div>
                        <p className='text-sm font-semibold text-white mr-2 ml-2 mb-2'>Dạng xem không gian làm việc</p>
                        <div className='flex items-center p-2 pl-4 text-white hover:bg-sidebarhover'>
                            <div className='mr-2'><HiOutlineClipboardList /></div>
                            <p className='text-sm italic'>Bảng</p>
                        </div>
                        <div className='flex items-center p-2 pl-4 text-white hover:bg-sidebarhover'>
                            <div className='mr-2'><HiOutlineCalendar /></div>
                            <p className='text-sm italic'>Lịch</p>
                        </div>
                    </div>
                    <div className=' flex items-center justify-between mb-1'>
                        <p className='text-sm text-white font-semibold mr-2 ml-2 mb-2'>Các bảng của bạn</p>
                        {/* <Tippy
                            trigger='click'
                            placement='right'
                            interactive
                            render={attrs => (
                                <div className=' w-64 bg-white rounded-sm shadow-boxsd mt-84' tabIndex={-1} {...attrs}>
                                    <FormAdd />
                                </div>
                            )}
                        > */}
                            <div className='text-2xl mr-2 hover:bg-buttonnavhover p-0.5 rounded-sm text-white'><HiPlusSm /></div>
                        {/* </Tippy> */}
                    </div>
                    <div>
                        {boards.map((board) => (
                            <div onClick={() => handleClick(board)}>
                                <div className='flex items-center justify-between py-2 pl-3 bg-buttonnavhover hover:bg-sidebarhover'>
                                    <div className='flex items-center'>
                                        <img className='w-6 h-5 mr-1 rounded-sm' src="https://trello-backgrounds.s3.amazonaws.com/SharedBackground/140x93/cd634b6f5db083968904538191fe3958/photo-1679041006302-cf5e318da08c.jpg" alt="" />
                                        <p className='text-white text-xs'>{board.name}</p>
                                    </div>
                                    <Tippy
                                        trigger='click'
                                        placement='bottom'
                                        interactive
                                        render={attrs => (
                                            <div className='w-64  bg-white' tabIndex={-1} {...attrs}>
                                                <div className='px-2'>
                                                    <div className='flex justify-center p-1 border-b border-gray-300'>
                                                        <p className='text-gray-500'>{board.name}</p>
                                                    </div>
                                                </div>
                                                <div className='flex items-center justify-between p-2 hover:bg-buttontask cursor-pointer' onClick={() => deleteBoard(board._id)}>
                                                    <p className='text-gray-500'>Đóng bảng </p>
                                                    <BiChevronRight />
                                                </div>
                                            </div>
                                        )}
                                    >
                                        <div className='text-white mr-3'><BsThreeDots /></div>
                                    </Tippy>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='w-full flex justify-center border-t border-[hsla(0,0%,100%,0.16)] py-3 '>
                    <div className='text-white bottom-0 text-center px-5 py-1 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 cursor-pointer'>
                        <p className='text-sm'>Dùng thử Premium miễn phí</p>
                    </div>
                </div>
            </div>
        </div>
    )
}