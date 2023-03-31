import { AiOutlineClockCircle } from 'react-icons/ai'
export interface LastViewProps { }
const board = [

    {
        title: "test",
        ulr: "https://images.unsplash.com/photo-1679214523859-c78a0bea016d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8N3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
    },
]
export default function LastView(props: LastViewProps) {
    return (
        <div>
            <div className=' flex items-center my-1'>
                <div className='mr-3 text-2xl'>
                    <AiOutlineClockCircle />
                </div>
                <p className='text-base font-bold text-gray-600'>Đã xem gần đây</p>
            </div>
            <div className='flex mt-4'>
                {board.slice().reverse().map((item) => (
                    <div className='mr-3'>
                        <p className='absolute text-white text-base font-bold p-2'>{item.title}</p>
                        <img className='w-48 h-24 rounded-df cursor-pointer' src={item.ulr} alt="" />
                    </div>
                ))}
            </div>
        </div>

    )
}