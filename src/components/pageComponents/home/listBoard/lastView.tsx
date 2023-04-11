import { AiOutlineClockCircle } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react"
import { getLastView, selectAllLastView } from 'features/getBoardLastView/LastViewSlice'

export interface LastViewProps { }

export default function LastView(props: LastViewProps) {
    const dispatch = useDispatch()
    const last = useSelector(selectAllLastView)
    console.log("dwdw",last);
    
    useEffect(() => {
        dispatch(getLastView());
    }, [dispatch]);

    return (
        <div>
            <div className=' flex items-center my-1'>
                <div className='mr-3 text-2xl'>
                    <AiOutlineClockCircle />
                </div>
                <p className='text-base font-bold text-gray-600'>Đã xem gần đây</p>
            </div>
            <div className='flex mt-4'>
               {last.map((item)=>(
                    <div className='mr-3' >
                        <p className='absolute text-white text-base font-bold p-2'>{item.name}</p>
                        <img className='w-48 h-24 rounded-df cursor-pointer' src="https://images.unsplash.com/photo-1679214523859-c78a0bea016d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw3MDY2fDB8MXxjb2xsZWN0aW9ufDJ8MzE3MDk5fHx8fHwyfHwxNjc5NDYzMTMz&ixlib=rb-4.0.3&q=80&w=400" alt="" />
                    </div>
                ))}
            </div>
        </div>

    )
}