import * as React from 'react';
import { AiOutlineHeart, AiOutlineAppstore, AiOutlineSetting, AiOutlineRight } from 'react-icons/ai'
import { BsPerson, BsChevronDown } from "react-icons/bs"
import { FiPlus } from "react-icons/fi"
import { TbTemplate, TbWaveSawTool, TbClipboard } from 'react-icons/tb'

export interface HomeItemLeftProps {
}
const ItemLeft = [
  {
    key: "board",
    title: "Bảng",
    icon: <TbClipboard />
  },
  {
    key: "sample",
    title: "Mẫu",
    icon: <TbTemplate />
  },
  {
    key: "home",
    title: "Trang chủ",
    icon: <TbWaveSawTool />
  }
]
const ItemLeftBot = [
  {
    key: "board",
    title: "Bảng",
    icon: <TbClipboard />
  },
  {
    key: "hearth",
    title: "Điểm nổi bật",
    icon: <AiOutlineHeart />
  },
  {
    key: "image",
    title: "Hình",
    icon: <AiOutlineAppstore />,
    iconhover: <AiOutlineRight />
  },
  {
    key: "member",
    title: "Thành Viên",
    icon: <BsPerson />,
    iconend: <FiPlus />,
    iconhover: <AiOutlineRight />
  },
  {
    key: "setting",
    title: "Cài đặt",
    icon: <AiOutlineSetting />,
    iconhover: <AiOutlineRight />

  }
]
export default function HomeItemLeft(props: HomeItemLeftProps) {
  return (
    <div className="mt-7 w-homeitemleft mr-6 max-xl:w-1/2">
      <div className='border-b'>
        {ItemLeft.map((item) => (
          <div className="flex items-center my-1 p-2 rounded-sm hover:bg-homeitemlefthover cursor-pointer ">
            <div className="mr-3 text-lg">{item.icon}</div>
            <p className='text-sm font-bold text-gray-600'>{item.title}</p>
          </div>
        ))}
      </div>
      <div className='flex items-center my-1 p-2 justify-between'>
        <p className='text-xs font-bold text-gray-400'>Các không gian làm việc</p>
        <div className=' rounded-sm hover:bg-homeitemlefthover'><FiPlus className='text-lg text-gray-400' /></div>
      </div>
      <div className='flex items-center p-2 rounded-sm hover:bg-homeitemlefthover cursor-pointer justify-between'>
        <div className='flex items-center'>
          <div className=' px-1.5 rounded-sm bg-icoinT mr-2'><p className='text-sm font-bold text-white'>T</p></div>
          <p className='text-sm font-bold text-gray-600 '>Trello không gian làm việc</p>
        </div>
        <div><BsChevronDown /></div>
      </div>
      <div className='cursor-pointer'>
        {ItemLeftBot.map((item) => (
          <div className='px-10 py-1.5 rounded-sm flex items-center my-4 justify-between hover:bg-homeitemlefthover'>
            <div className='flex'>
              <div className='text-lg mr-3'>{item.icon}</div>
              <p className='text-xs text-textcolor'>{item.title}</p>
            </div>
            <div className=' text-gray-400'>{item.iconend}</div>
            <div className='hidden'>{item.iconhover}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
