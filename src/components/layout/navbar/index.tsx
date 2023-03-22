import { AiOutlineSearch } from "react-icons/ai"
import { MdOutlineApps } from "react-icons/md";
import { BsChevronDown } from "react-icons/bs"
import { BellIcon, QuestionMarkCircleIcon } from "@heroicons/react/24/outline"
import Tippy from '@tippyjs/react';
export interface NavBarProps {

}
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
]
export default function NavBar(props: NavBarProps) {
    return (
        <div className="flex justify-between bg-navbar px-2 py-1.5 h-11">
            <div className="flex items-center ">
                <div className="p-2 hover:bg-hover rounded-sm text-white text-xl cursor-pointer">
                    <MdOutlineApps />
                </div>
                <div className="cursor-pointer">
                    <img className="w-24 p-2  hover:bg-hover rounded-sm" src="https://a.trellocdn.com/prgb/assets/d947df93bc055849898e.gif" alt="" />
                </div>
                {ItemsNavbar.map((item) => (
                    <div className="flex items-center p-2  hover:bg-hover rounded-sm cursor-pointer">
                        <p className="px-1 text-white text-sm">{item.title}</p>
                        <BsChevronDown className="text-white text-sm font-bold" />
                    </div>
                ))}
                <button className="mx-3 flex items-center p-2  hover:bg-buttonnavhover rounded-sm bg-buttonnav">
                    <p className="px-2 text-white text-sm">Tạo mới</p>
                </button>
            </div>
            <div className="flex item-center">
                <form className="flex items-center p-2" action="">
                    <AiOutlineSearch className="text-white absolute ml-2" />
                    <input className=" placeholder:text-white block bg-buttonnavhover rounded-sm p-1 pl-8 focus:outline-none  " placeholder="Tìm kiếm" type="text" name="search" />
                </form>
                <div className="p-1 rounded-full hover:bg-hover cursor-pointer"><BellIcon className="w-6 text-white  " /></div>
                <div className="p-1 rounded-full hover:bg-hover cursor-pointer"><QuestionMarkCircleIcon className="w-6 text-white " /></div>
                <div className="py-1 rounded-full hover:bg-hover cursor-pointer"><img className="rounded-full mx-1 w-6 h-6 " src="https://trello-members.s3.amazonaws.com/64190d6836236e371c566da7/bc6393e9d68b04800fc5ef1e1ee97d43/30.png" alt="" /></div>
            </div>
        </div>
    )
}