import { BiHelpCircle } from 'react-icons/bi'
import { FiUsers } from 'react-icons/fi'
export interface OtherWorkProps { }
const board = [
    {
        title: "Trello Project Board",
        ulr: "https://images.unsplash.com/photo-1679041006302-cf5e318da08c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
        title: "test",
        ulr: "https://images.unsplash.com/photo-1679214523859-c78a0bea016d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8N3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
    },
]
export default function OtherWork(props: OtherWorkProps) {
    return (
        <div>
            <div className="mt-10 flex items-center">
                <p className="font-bold text-gray-500 mr-4">CÁC KHÔNG GIAN LÀM VIỆC KHÁCH</p>
                <div className='text-2xl text-gray-600'><BiHelpCircle /></div>
            </div>
            <div className='flex items-center ml-2 mt-3'>
                <div className='mr-3 text-gray-500 text-lg'><FiUsers /></div>
                <p className='font-bold text-gray-600'>Fresher</p>
            </div>
            <div className='flex mt-4'>
                {board.slice().reverse().map((item) => (
                    <div className='mr-3'>
                        <p className='absolute text-white text-base font-bold p-2'>{item.title}</p>
                        <img className='w-48 h-24 rounded-sm' src={item.ulr} alt="" />
                    </div>
                ))}
            </div>
            <div className='p-1.5 text-gray-500 text-sm bg-colorrightbtn hover:bg-colorrightbtnhover w-3/12 flex items-end mt-10'>
                <p className='text-center w-full'>Xem tất cả bảng đã đóng</p>
            </div>
        </div>
    )
}