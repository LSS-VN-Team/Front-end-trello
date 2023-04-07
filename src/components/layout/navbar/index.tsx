import { useEffect, useState, useRef } from "react";
import { AiOutlineSearch, AiOutlineQuestionCircle, AiOutlinePlus } from "react-icons/ai";
import { MdOutlineApps, MdOutlineManageAccounts } from "react-icons/md";
import { BsChevronDown, BsChevronRight } from "react-icons/bs";
import { TbBellRinging2 } from "react-icons/tb"
import "./style.css";
import Tippy from "@tippyjs/react/headless";
import { useDispatch, useSelector } from "react-redux";
import { logoutPage } from "features/login/loginSlide";
import { useParams } from "react-router-dom";
import { getUsersId, selectAllUser } from "features/getuser/userslide";

interface NavBarProps { }

const ItemsNavbar = [
    {
        key: 1,
        title: "Các Không gian làm việc",
    },
    {
        key: 2,
        title: "Gần đây",
    },
    {
        key: 3,
        title: "Đã đánh dấu sao",
    },
    {
        key: 4,
        title: "Mẫu",
    },
];

export default function NavBar(props: NavBarProps) {
    const navbarRef = useRef<HTMLDivElement>(null);
    const [isBoardPage, setIsBoardPage] = useState(false);
    const dispatch = useDispatch()
    const user = useSelector(selectAllUser)

    useEffect(() => {
        dispatch(getUsersId());
    }, [dispatch]);
    const handleclickLogout = () => {
        dispatch(logoutPage())
        const token = localStorage.getItem('token');
        if (!token) {
            window.location.reload()
        }
    }

    const { boardId } = useParams()

    useEffect(() => {
        setIsBoardPage(window.location.pathname === `/board/${boardId}`);
        if (navbarRef.current) {
            if (isBoardPage) {
                navbarRef.current.classList.add("active");
            } else {
                navbarRef.current.classList.remove("navbar-transparent");
            }
        }
    }, []);

    return (
        <div
            ref={navbarRef}
            className={`flex justify-between bg-navbar px-2 py-1.5 h-navbar w-full sm:h-12 sm:w-screen lg:h-12 ${isBoardPage ? "navbar-transparent active" : "navbar-transparent"
                }`}
        >
            <div className="flex items-center ">
                <div className={`p-2 hover:bg-hover rounded-sm text-white text-xl cursor-pointer ${isBoardPage ? "hover:bg-zinc-600" : ""}`}>
                    <MdOutlineApps />
                </div>
                <div className="cursor-pointer">
                    <img className={`w-24 p-2  hover:bg-hover rounded-sm ${isBoardPage ? "hover:bg-zinc-600" : ""}`} src="https://a.trellocdn.com/prgb/assets/d947df93bc055849898e.gif" alt="" />
                </div>
                {ItemsNavbar.map((item) => {
                    const isBoardPage = window.location.pathname === "/board";
                    return (
                        <div
                            className={`flex items-center p-2
                                      hover:bg-hover
                                        rounded-sm cursor-pointer
                                        max-md:hidden
                                        max-sm:hidden
                                        max-lg:hidden
                                        ${isBoardPage ? "hover:bg-zinc-600" : ""}`
                            }
                            key={item.key}>
                            <p className="px-1 text-white text-sm">{item.title}</p>
                            <BsChevronDown className="text-white text-sm font-bold" />
                        </div>
                    )
                })}
                <Tippy
                    trigger="click"
                    interactive
                    render={attrs => (
                        <div className='shadow-boxsd bg-white ml-32' tabIndex={-1} {...attrs}>
                            <div className="p-3">
                                {ItemsNavbar.map((item) => (
                                    <div className="text-black flex items-center justify-between py-1.5 w-72">
                                        <p className="px-1">{item.title}</p>
                                        <BsChevronRight className=" font-bold" />
                                    </div>
                                )
                                )}
                            </div>
                        </div>
                    )}
                >
                    <div className=" max-md:block lg:hidden">
                        <div className="flex items-center bg-buttonnav  p-2 rounded-sm">
                            <p className="px-1 text-white text-sm ">Thêm</p>
                            <BsChevronDown className="text-white text-sm font-bold" />
                        </div>
                    </div>
                </Tippy>
                <button className="mx-3 flex items-center p-2 sm-hidden max-lg:hidden max-md:hidden hover:bg-buttonnavhover rounded-sm bg-buttonnav">
                    <p className="px-2 text-white text-sm">Tạo mới</p>
                </button>
                <button className="mx-3 flex items-center p-2 lg:hidden 2xl:hidden hover:bg-buttonnavhover rounded-sm bg-buttonnav">
                    <AiOutlinePlus className="text-white" />
                </button>
            </div>
            <div className="flex item-center">
                <form className="flex items-center p-2 " action="">
                    <AiOutlineSearch className="text-white absolute ml-2 max-md:text-xl " />
                    <input className=" placeholder:text-white block max-md:hidden bg-buttonnavhover rounded-sm p-1 pl-8 focus:outline-none  " placeholder="Tìm kiếm" type="text" name="search" />
                </form>
                <div className="flex items-center max-md:ml-5">
                    <div className={`p-1.5 rounded-full hover:bg-hover cursor-pointer   ${isBoardPage ? "hover:bg-zinc-600" : ""}`}><TbBellRinging2 className=" text-white text-xl " /></div>
                    <div className={`p-1.5 rounded-full hover:bg-hover cursor-pointer max-md:hidden ${isBoardPage ? "hover:bg-zinc-600" : ""}`}><AiOutlineQuestionCircle className=" text-white text-xl" /></div>
                    <Tippy
                        placement="bottom"
                        trigger="click"
                        interactive
                        render={attrs => (
                            <div className=' w-64 bg-white  rounded-sm shadow-boxsd ' tabIndex={-1} {...attrs}>
                                <div  >
                                    <div className="text-gray-400 font-bold text-xs py-1"><p className="ml-4">TÀI KHOẢN</p></div>
                                    <div className="flex items-center w-full py-1">
                                        <img className="rounded-full  w-9 h-9 mr-4 ml-4" alt="" src="https://trello-members.s3.amazonaws.com/64190d6836236e371c566da7/bc6393e9d68b04800fc5ef1e1ee97d43/30.png" />

                                        <div>
                                            <p className="">{user?.name}</p>
                                            <p className="text-sm text-gray-400">{user?.email}</p>
                                        </div>

                                    </div>
                                    <div className="py-2 text-sm w-full cursor-pointer hover:bg-gray-100"><p className="ml-4">Chuyển đổi tài khoản</p> </div>
                                    <div className="flex text-sm items-center justify-between py-2 cursor-pointer hover:bg-gray-100 mb-3">
                                        <p className="ml-4">Quản lý tài khoản</p>
                                        <MdOutlineManageAccounts className="mr-4"/>
                                    </div>
                                    <div className="py-3 border-y w-full">
                                        <div className="py-2 text-sm text-gray-400 font-bold"><p className="ml-4">TRELLO</p></div>
                                        <div className="py-2 text-sm cursor-pointer hover:bg-gray-100"><p className="ml-4">Hồ sơ và Hiển thị</p></div>
                                        <div className="py-2 text-sm cursor-pointer hover:bg-gray-100"><p className="ml-4">Hoạt động</p></div>
                                        <div className="py-2 text-sm cursor-pointer hover:bg-gray-100"><p className="ml-4">Thẻ</p></div>
                                        <div className="py-2 text-sm cursor-pointer hover:bg-gray-100"><p className="ml-4">Cài đặt</p></div>
                                    </div>
                                    <div className="py-2 text-sm cursor-pointer hover:bg-gray-100"><p className="ml-4">Trợ giúp</p></div>
                                    <div className="py-2 text-sm cursor-pointer hover:bg-gray-100"><p className="ml-4">Phím tắt</p></div>
                                    <div className="py-2 text-sm w-full cursor-pointer hover:bg-gray-100 mb-4" onClick={handleclickLogout}><p className="ml-4">Đăng xuất</p></div>
                                </div>
                            </div>
                        )}
                    >
                        <div className={`p-1.5 rounded-full hover:bg-hover cursor-pointer  ${isBoardPage ? "hover:bg-zinc-600" : ""}`}>
                            <img className="rounded-full mx-1 w-6 h-6 " src="https://trello-members.s3.amazonaws.com/64190d6836236e371c566da7/bc6393e9d68b04800fc5ef1e1ee97d43/30.png" alt="" />
                        </div>
                    </Tippy>
                </div>
            </div>
        </div>
    )
}