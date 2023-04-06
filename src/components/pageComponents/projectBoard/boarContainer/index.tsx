import { useState, useRef } from 'react';
import Header from './header';
import { GrFormClose } from 'react-icons/gr'
import { HiPlusSm } from 'react-icons/hi'




const BoardContainer = () => {

    return (
        <div className='w-taskboard overflow-x-auto'>
            <Header />
            
        </div>
    );
};

export default BoardContainer;