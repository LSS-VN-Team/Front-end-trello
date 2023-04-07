import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from "react-router-dom";
import Tippy from '@tippyjs/react/headless'
import { AiOutlineSetting, AiOutlineStar, AiOutlineClose } from 'react-icons/ai'
import { BsPerson, BsFillLightningChargeFill, BsPersonPlus, BsThreeDots } from 'react-icons/bs'
import { BiChevronLeft, BiChevronDown, BiRocket, BiFilter, BiLock } from 'react-icons/bi'
import { FaTrello } from 'react-icons/fa'
import { HiPlusSm, HiOutlineClipboardList, HiOutlineCalendar, HiOutlineViewBoards } from 'react-icons/hi'
import { addBoard, boardSeleted, editBoard, getBoards, getBoardsId, removeBoard, selectAllBoards, selectBoards } from 'features/Board/BoardSlice'
import { GiEarthAmerica } from 'react-icons/gi'

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
const imageTheme = [
    {
        key: 1,
        url: "https://images.unsplash.com/photo-1679041006302-cf5e318da08c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw3MDY2fDB8MXxjb2xsZWN0aW9ufDF8MzE3MDk5fHx8fHwyfHwxNjc5NDYzMTMz&ixlib=rb-4.0.3&q=80&w=400"
    },
    {
        key: 2,
        url: "https://images.unsplash.com/photo-1679214523859-c78a0bea016d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw3MDY2fDB8MXxjb2xsZWN0aW9ufDJ8MzE3MDk5fHx8fHwyfHwxNjc5NDYzMTMz&ixlib=rb-4.0.3&q=80&w=400"
    },
    {
        key: 3,
        url: "https://images.unsplash.com/photo-1679245883026-adea0f43e6f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw3MDY2fDB8MXxjb2xsZWN0aW9ufDN8MzE3MDk5fHx8fHwyfHwxNjc5NDYzMTMz&ixlib=rb-4.0.3&q=80&w=400"
    },
    {
        key: 4,
        url: "https://images.unsplash.com/photo-1678938940744-0fc1c7953b2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw3MDY2fDB8MXxjb2xsZWN0aW9ufDR8MzE3MDk5fHx8fHwyfHwxNjc5NDYzMTMz&ixlib=rb-4.0.3&q=80&w=400"
    }
]
const colorTheme = [
    {
        key: 1,
        url: ""
    },
    {
        key: 2,
        url: ""
    },
    {
        key: 3,
        url: ""
    },
    {
        key: 4,
        url: ""
    },
    {
        key: 5,
        url: ""
    },
]

export default function ProjectBoard() {
    const [inputValue, setInputValue] = useState("")
    const [privacy, setPrivacy] = useState('Không gian làm việc');
    const [showForm, setShowForm] = useState(false)
    const dispatch = useDispatch()
    const boards = useSelector(selectAllBoards)
    const boardSelect = useSelector(selectBoards)
    const { boardId } = useParams();
    const data = boards
    const buttonRef = useRef(null)

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }

    const handleChangeClick = (board: any) => {
        dispatch(boardSeleted(board))
    };

    const handleCloseFrom = () => {
        setShowForm(false)
        setInputValue("")
    }

    const handleClick = (newPrivacy: any) => {
        setPrivacy(newPrivacy);
    }

    const handleBoard = () => {
        const id = localStorage.getItem("_id");
        if (id) {
            const newBoard = {
                name: inputValue,
                admin: id,
                _id: boardSelect?._id

            }
            if (boardSelect) {
                dispatch(editBoard(newBoard))
            } else {
                dispatch(addBoard(newBoard))
            }
        }
        setInputValue("")
        setShowForm(false)

    }

    const handlegetboardbyid = (boardId: any) => {
        dispatch(getBoardsId(boardId))
    }

    const deleteBoard = (boardID: any) => {
        dispatch(removeBoard(boardID));
        window.location.href = '/'
    };

    useEffect(() => {
        dispatch(getBoards());
    }, [dispatch]);

    useEffect(() => {
        if (boardSelect) {
            setInputValue(boardSelect.name)
            setShowForm(true)
        }
    }, [boardSelect])

    let targetName = '';
    for (let i = 0; i < data.length; i++) {
        if (data[i]._id === boardId) {
            targetName = data[i].name;
            break;
        }
    }

    return (
        <div className="flex h-sidebar w-full" >
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
                        <div className='py-4 ' >
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
                            <Tippy
                                onClickOutside={() => setShowForm(false)}
                                trigger='click'
                                placement='right'
                                interactive
                                visible={showForm}
                                render={attrs => (
                                    <div className=' w-64 bg-white rounded-sm shadow-boxsd mt-84' tabIndex={-1} {...attrs}>
                                        <form onSubmit={(e) => e.preventDefault()} >
                                            <div className="px-4 py-2">
                                                <div className="border-b pb-2 mb-2">
                                                    <p className="text-center text-sm text-gray-500 ">Tạo bảng</p>
                                                    <div onClick={handleCloseFrom}><AiOutlineClose /></div>
                                                </div>
                                                <div className="flex mb-3 justify-center bg-[url('https://images.unsplash.com/photo-1679041006302-cf5e318da08c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw3MDY2fDB8MXxjb2xsZWN0aW9ufDF8MzE3MDk5fHx8fHwyfHwxNjc5NDYzMTMz&ixlib=rb-4.0.3&q=80&w=400')] py-2">
                                                    <img className="" src="https://a.trellocdn.com/prgb/assets/14cda5dc635d1f13bc48.svg" alt="" />
                                                </div>
                                                <p className="text-xs text-gray-500 font-bold">Phông nền</p>
                                                <div className="flex items-center mb-1">
                                                    {imageTheme.map((item) => (
                                                        <button className="p-1" key={item.key} >
                                                            <img
                                                                className="h-10 w-16 rounded-lg cursor-pointer hover:bg-gray-400"
                                                                src={item.url}
                                                                alt=""
                                                            />
                                                        </button>
                                                    ))}
                                                </div>
                                                <div className="flex mb-3">
                                                    {colorTheme.map((item) => (
                                                        <button key={item.key}><img className="w-10 h-8 rounded-lg cursor-pointer hover:bg-gray-200" src={item.url} alt="" /></button>
                                                    ))}
                                                    <div className="w-10 h-8 rounded-lg bg-gray-100 flex items-center cursor-pointer hover:bg-gray-300"><BsThreeDots className="w-full" /></div>
                                                </div>
                                                <div className="flex">
                                                    <p className="text-xs text-gray-500 font-bold">Tiêu đề bảng </p>
                                                    <p className="text-red-600">*</p>
                                                </div>
                                                <input onChange={handleInputChange} value={inputValue} className="placeholder:text-sm focus:outline-none w-full bg-white rounded-sm   py-1 border-2 border-gray-100 focus:border-blue-500" type="text" />
                                                <p className="text-sm mb-4">👋 tiêu đề là bắt buộc</p>
                                                <p className="text-xs font-bold text-gray-500 mb-2"> Quyền xem</p>
                                                <Tippy
                                                    trigger='click'
                                                    placement='top'
                                                    interactive
                                                    render={attrs => (
                                                        <div className=' w-64 bg-white rounded-sm shadow-boxsd mt-84' tabIndex={-1} {...attrs}>

                                                            <div className={`flex items-center cursor-pointer hover:bg-rolehover py-1 ${privacy === 'Riêng tư' ? 'bg-rolecolor text-white' : ''}`} onClick={() => handleClick('Riêng tư')}>
                                                                <div className="px-3"><BiLock /></div>
                                                                <div>
                                                                    <p className="text-sm text text-gray-500">Riêng tư</p>
                                                                    <p className="text-xs text-gray-500">Chỉ có thành viên của nhóm mới có thể xem bảng này.</p>
                                                                </div>
                                                            </div>
                                                            <div className={`flex items-center cursor-pointer hover:bg-rolehover py-1 ${privacy === 'Không gian làm việc' ? 'bg-rolecolor text-white' : ''}`} onClick={() => handleClick('Không gian làm việc')}>
                                                                <div className="px-3"><BsPerson /></div>
                                                                <div>
                                                                    <p className="text-sm text text-gray-500">Không gian làm việc</p>
                                                                    <p className="text-xs text-gray-500">Tất cả các thành viên của không gian làm việc Trello Không gian làm việc có thể xem và sửa bảng này.</p>
                                                                </div>
                                                            </div>
                                                            <div className={`flex items-center cursor-pointer hover:bg-rolehover py-1 ${privacy === 'Công khai' ? 'bg-rolecolor text-white' : ''}`} onClick={() => handleClick('Công khai')}>
                                                                <div className="px-3"><GiEarthAmerica /></div>
                                                                <div>
                                                                    <p className="text-sm text text-gray-500">Công khai</p>
                                                                    <p className="text-xs text-gray-500">Bất kỳ ai trên mạng internet đều có thẻ xem bảng này. Chỉ các thành viên bảng mới có quyền chỉnh sửa.</p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    )}
                                                >
                                                    <div className="border-gray-100 border-2 w-full mb-3 text-sm cursor-pointer">
                                                        <p>{privacy}</p>
                                                    </div>
                                                </Tippy>
                                                <button
                                                    onClick={handleBoard}
                                                    ref={buttonRef}
                                                    disabled={!inputValue.trim()}
                                                    className={`w-full mb-2 bg-colorrightbtn text-gray-500 text-sm p-1 rounded-sm ${inputValue.trim() ? 'bg-navbar text-white' : ''}`}>
                                                    Tạo mới
                                                </button>
                                                <button className="w-full bg-colorrightbtn text-gray-500 text-sm p-1 rounded-sm hover:bg-colorrightbtnhover">Bắt đầu với mẫu</button>
                                                <p className="text-xs text-gray-500">Bằng cách sử dụng hình ảnh từ Unsplash, bạn đồng ý với <u><a href="."> giấy phép</a> </u> và <u><a href=".">Điều khoản dịch vụ</a></u></p>
                                            </div>
                                        </form>
                                    </div>
                                )}
                            >
                                <div className='text-2xl mr-2 hover:bg-buttonnavhover p-0.5 rounded-sm text-white' onClick={() => setShowForm(true)}><HiPlusSm /></div>
                            </Tippy>
                        </div>
                        <div onClick={() => handlegetboardbyid}>
                            {boards.map((board) => (
                                <div key={board._id}>
                                    <div className={`flex items-center justify-between py-2 pl-3 hover:bg-sidebarhover cursor-pointer`}>
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
                                                            <p className='text-gray-500'></p>
                                                        </div>
                                                    </div>
                                                    <div className='flex items-center justify-center p-2 hover:bg-buttontask cursor-pointer' onClick={() => deleteBoard(board._id)}>
                                                        <p className='text-gray-500'>Đóng bảng </p>
                                                    </div>
                                                    <div className='flex items-center justify-center p-2 hover:bg-buttontask cursor-pointer' onClick={() => handleChangeClick(board)}>
                                                        <p className='text-gray-500 '>Sửa bảng  </p>
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
            <div className='w-taskboard overflow-x-auto'>
                <div className='flex justify-between flex-wrap'>
                    <div className='flex items-center p-3 flex-wrap'>
                        <p className="text-lg text-white font-bold pr-2 cursor-pointer"  >{targetName}</p>
                        <div className='text-xl text-white p-1.5 rounded-sm bg-sidebarhover hover:text-yellow-500'>
                            <AiOutlineStar className='' />
                        </div>
                        <div className='py-2 border-r border-[hsla(0,0%,100%,0.16)] pr-2'></div>
                        <div className='flex item-center text-xl text-white p-1.5 rounded-sm bg-sidebarhover hover:bg-buttonnavhover ml-2 cursor-pointer'>
                            <div className='mr-1'><BsPerson /></div>
                            <p className='text-sm'>Hiển thị trong không gian làm việc</p>
                        </div>
                        <div className='py-2 border-r border-[hsla(0,0%,100%,0.16)] pr-2'></div>
                        <div className='flex item-center text-xl text-black p-1.5 rounded-sm bg-buttontask hover:bg-white ml-2 cursor-pointer'>
                            <div className='mr-1'><HiOutlineViewBoards /></div>
                            <p className='text-sm'>Bảng</p>
                        </div>
                        <div className='flex item-center text-xl text-black p-1.5 rounded-sm bg-buttontask hover:bg-white ml-2 cursor-pointer'>
                            <div className=''><BiChevronDown /></div>
                        </div>
                    </div>
                    <div className='flex items-center p-3 flex-wrap'>
                        <div className='flex item-center text-xl text-white p-1.5 rounded-sm bg-sidebarhover hover:bg-buttonnavhover ml-2 cursor-pointer'>
                            <div className='mr-1'><BiRocket /></div>
                            <p className='text-sm'>Tiện ích bổ sung</p>
                        </div>
                        <div className='flex item-center text-xl text-white p-1.5 rounded-sm bg-sidebarhover hover:bg-buttonnavhover ml-2 cursor-pointer'>
                            <div className="mr-1 "><BsFillLightningChargeFill /></div>
                            <p className='text-sm'>Tự động hóa</p>
                        </div>
                        <div className='py-2 border-r border-[hsla(0,0%,100%,0.16)] pr-2'></div>
                        <div className='flex item-center text-xl text-white p-1.5 rounded-sm bg-sidebarhover hover:bg-buttonnavhover ml-2 cursor-pointer'>
                            <div className='mr-1'><BiFilter /></div>
                            <p className='text-sm'>Lọc</p>
                        </div>
                        <div className='flex item-center text-xl text-black p-1.5 rounded-sm hover:bg-buttontask bg-white ml-2 cursor-pointer'>
                            <div className='mr-1'><BsPersonPlus /></div>
                            <p className='text-sm'>Chia sẻ</p>
                        </div>
                        <div className='py-2 border-r border-[hsla(0,0%,100%,0.16)] pr-2'></div>
                        <div className="rounded-full cursor-pointer "><img className="rounded-full ml-2 w-6 h-6 " src="https://trello-members.s3.amazonaws.com/64190d6836236e371c566da7/bc6393e9d68b04800fc5ef1e1ee97d43/30.png" alt="" /></div>

                        <div className='flex item-center text-xl text-white p-1.5 rounded-sm bg-sidebarhover hover:bg-buttonnavhover ml-2 cursor-pointer'>
                            <div className=''><BsThreeDots /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}