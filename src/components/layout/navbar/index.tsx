import { useEffect, useState, useRef } from "react";
import { AiOutlineSearch, AiOutlineQuestionCircle } from "react-icons/ai";
import { MdOutlineApps } from "react-icons/md";
import { BsChevronDown } from "react-icons/bs";
import { TbBellRinging2 } from "react-icons/tb"
import "./style.css";

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

    useEffect(() => {
        setIsBoardPage(window.location.pathname === "/board");
    }, []);

    useEffect(() => {
        if (navbarRef.current) {
            if (isBoardPage) {
                navbarRef.current.classList.add("active");
            } else {
                navbarRef.current.classList.remove("navbar-transparent");
            }
        }
    }, [isBoardPage]);

    return (
        <div
            ref={navbarRef}
            className={`flex justify-between bg-navbar px-2 py-1.5 h-navbar ${isBoardPage ? "navbar-transparent active" : "navbar-transparent"
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
                        <div className={`flex items-center p-2  hover:bg-hover  rounded-sm cursor-pointer ${isBoardPage ? "hover:bg-zinc-600" : ""}`}>
                            <p className="px-1 text-white text-sm">{item.title}</p>
                            <BsChevronDown className="text-white text-sm font-bold" />
                        </div>
                    )
                })}
                <button className="mx-3 flex items-center p-2  hover:bg-buttonnavhover rounded-sm bg-buttonnav">
                    <p className="px-2 text-white text-sm">Tạo mới</p>
                </button>
            </div>
            <div className="flex item-center">
                <form className="flex items-center p-2" action="">
                    <AiOutlineSearch className="text-white absolute ml-2" />
                    <input className=" placeholder:text-white block bg-buttonnavhover rounded-sm p-1 pl-8 focus:outline-none  " placeholder="Tìm kiếm" type="text" name="search" />
                </form>
               <div className="flex items-center">
                    <div className={`p-1.5 rounded-full hover:bg-hover cursor-pointer  ${isBoardPage ? "hover:bg-zinc-600" : ""}`}><TbBellRinging2 className=" text-white text-xl " /></div>
                    <div className={`p-1.5 rounded-full hover:bg-hover cursor-pointer  ${isBoardPage ? "hover:bg-zinc-600" : ""}`}><AiOutlineQuestionCircle className=" text-white text-xl" /></div>
                    <div className={`p-1.5 rounded-full hover:bg-hover cursor-pointer  ${isBoardPage ? "hover:bg-zinc-600" : ""}`}><img className="rounded-full mx-1 w-6 h-6 " src="https://trello-members.s3.amazonaws.com/64190d6836236e371c566da7/bc6393e9d68b04800fc5ef1e1ee97d43/30.png" alt="" /></div>
               </div>
            </div>
        </div>
    )
}