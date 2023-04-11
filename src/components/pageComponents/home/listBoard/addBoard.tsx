import Tippy from "@tippyjs/react/headless"
import { useDispatch, useSelector } from "react-redux"
import { boardSeleted, getBoards, getBoardsId, lastView, selectAllBoards } from "features/Board/BoardSlice"
import { useEffect } from "react"
import { useRef, useState } from "react"
import { BsThreeDots, BsPerson } from "react-icons/bs"
import { BiLock } from 'react-icons/bi'
import { GiEarthAmerica } from 'react-icons/gi'
import { addBoard } from "features/Board/BoardSlice"
import { Link } from "react-router-dom"
export interface AddBoardProps {

}
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

export default function AddBoard(props: AddBoardProps) {
    const [inputValue, setInputValue] = useState("")
    const [privacy, setPrivacy] = useState('Không gian làm việc');
    const [showForm, setShowForm] = useState(false)

    const buttonRef = useRef(null)
    const dispatch = useDispatch()
    const boards = useSelector(selectAllBoards)

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
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

            }
            dispatch(addBoard(newBoard))
        }
        setInputValue("")
        setShowForm(false)
    }

    const handlegetboardbyid = (boardId: any) => {
        dispatch(getBoardsId(boardId))
        const id = localStorage.getItem('_id')
        const Request = {
            idUser:id,
            idBoard: boardId,
        }
        dispatch(lastView(Request));
    }
    useEffect(() => {
        dispatch(getBoards());
    }, [dispatch]);
    return (
        <div className="flex">
            <div>
                <div className="flex flex-wrap max-w-4xl" >
                    {boards.map(board => (
                        <Link to={`board/${board._id}`}>
                            <div className='mr-2 mb-2 cursor-pointer' onClick={()=>handlegetboardbyid(board._id)}>
                                <p className='absolute text-white text-base font-bold p-2'>{board.name}</p>
                                <img className='w-48 h-24 rounded-df cursor-pointer' src="https:images.unsplash.com/photo-1679214523859-c78a0bea016d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8N3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                            </div>
                        </Link>
                    ))}
                    <div className="flex">
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
                            <div className='mr-3 '>
                                <div className='w-48 h-24 rounded-sm bg-gray-200 flex items-center cursor-pointer hover:bg-gray-300' onClick={() => setShowForm(true)}>
                                    <p className='text-center w-full text-sm'>Tạo bảng mới</p>
                                </div>
                            </div>
                        </Tippy>
                    </div>
                </div>
            </div>
        </div>

    )
}