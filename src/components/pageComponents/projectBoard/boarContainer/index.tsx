import { useState, useRef } from 'react';
import Board from './boardCard';
import Header from './header';
import { GrFormClose } from 'react-icons/gr'
import { HiPlusSm } from 'react-icons/hi'


interface ListItem {
    key: string;
    title: string;
}

const listItem: ListItem[] = [
    { key: 'back-log', title: 'anhquoc' },
    { key: 'back-log', title: 'anhquoc2' },
    { key: 'back-log', title: 'anhquoc3' },

];

const BoardContainer = () => {
    const [showBoardForm, setShowBoardForm] = useState(false)
    const formRef = useRef<HTMLDivElement>(null);
    return (
        <div className='w-taskboard'>
            <Header />
            <div className='flex '>
                <div className='  flex mr-1'>
                    {listItem.map(item => (
                        <div>
                            <div className='mr-1 bg-card rounded-sm'>
                                <Board key={item.key} typeBoard={item.key} title={item.title} />
                            </div>
                        </div>
                    ))}
                </div>

                <div>
                    {showBoardForm ? (
                        <div className='bg-card w-card rounded-sm' ref={formRef}>
                            <form className='p-1' action="">
                                <input className="placeholder:text-sm focus:outline-none w-full bg-white rounded-sm py-1 border-2 border-gray-100 focus:border-blue-500 shadow-inputsd" type="text" />
                                <div className='flex items-center w-full mt-3'>
                                    <button className=' text-white rounded-sm bg-submitadd p-1' type="submit"><p>Thêm danh sách</p></button>
                                    <button className='text-2xl ml-2' onClick={() => setShowBoardForm(false)}><GrFormClose /></button>
                                </div>
                            </form>
                        </div>
                    ) : (
                        <div>
                            <button className='flex item-center text-xl text-white p-1.5 rounded-sm bg-sidebarhover hover:bg-buttonnavhover ml-2 cursor-pointer' onClick={() => setShowBoardForm(true)}>
                                <div className='mr-1'><HiPlusSm /></div>
                                <p className='text-sm'>Thêm các danh sách khác </p>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BoardContainer;