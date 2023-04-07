import { AiOutlineAppstore, AiOutlineSetting } from 'react-icons/ai'
import { BsPerson } from 'react-icons/bs'
import { MdOutlineBusinessCenter } from 'react-icons/md'
import { TbClipboard } from 'react-icons/tb'
import LastView from './lastView'
import AddBoard from './addBoard'
import OtherWork from './ortherWork'
export interface HomeItemRightProps { }

const itemright = [
    {
        key: 1,
        title: "Bảng",
        icon: <TbClipboard />
    },
    {
        key: 2,
        title: "Dạng xem",
        icon: <AiOutlineAppstore />
    },
    {
        key: 3,
        title: "Thành viên",
        icon: <BsPerson />
    },
    {
        key: 4,
        title: "Cài đặt",
        icon: <AiOutlineSetting />
    },

]
export default function HomeItemRight(props: HomeItemRightProps) {
    return (
        <div className=' mt-7 '>
            <LastView />
            <div className=' my-1 mt-16'>
                <p className='text-LG font-bold text-gray-500'>CÁC KHÔNG GIAN LÀM VIỆC CỦA BẠN</p>
            </div>
            <div className=' my-1 mt-4 flex items-center flex-wrap'>
                <div className='flex items-center'>
                    <div className=' px-2.5 rounded-sm bg-icoinT mr-2'><p className='text-lg font-bold text-white'>T</p></div>
                    <p className='text-base font-bold text-gray-600 '>Trello không gian làm việc</p>
                </div>
                {itemright.map((item) => (
                    <div className='mx-1 rounded-sm px-3 py-1.5 bg-colorrightbtn hover:bg-colorrightbtnhover cursor-pointer' key={item.key}>
                        <div className='flex items-center text-gray-600 '>
                            <div className='mr-1'>{item.icon}</div>
                            <p className='text-sm'>{item.title}</p>
                        </div>
                    </div>
                ))}
                <div className='mx-1 rounded-sm px-3 py-1.5 bg-upbtn hover:bg-upbtnhover cursor-pointer'>
                    <div className='flex items-center text-gray-600 '>
                        <div className='mr-1 bg-upbtnicon text-white rounded-sm'><MdOutlineBusinessCenter /></div>
                        <p className='text-sm'>Nâng cấp</p>
                    </div>
                </div>
            </div>
            <AddBoard />
            <OtherWork />
        </div>
    )
}