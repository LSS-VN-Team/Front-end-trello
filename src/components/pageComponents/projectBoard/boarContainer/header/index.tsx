import { AiOutlineStar } from 'react-icons/ai'
import { BsPerson, BsFillLightningChargeFill, BsPersonPlus, BsThreeDots } from 'react-icons/bs'
import { BiChevronDown, BiRocket, BiFilter } from 'react-icons/bi'
import { HiOutlineViewBoards } from 'react-icons/hi'
export default function Header() {
    return (
        <div className='flex justify-between flex-wrap'>
            <div className='flex items-center p-3 flex-wrap'>
                <p className="text-lg text-white font-bold pr-2">test</p>
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
    )
}