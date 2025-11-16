import React, {forwardRef} from 'react'
import { MdLogout } from "react-icons/md";
import { useNavigate } from 'react-router';

const ThreeDots = forwardRef((props,ref) => {
    const navigate = useNavigate();

    const handleClickLogout = () => {
        navigate('/')
    }
    return (
        <div ref={ref} className='flex items-center gap-2 bg-white border text-gray-500 border-gray-300 rounded-2xl absolute -right-8 top-8 px-6 py-2 shadow shadow-gray-500 w-[20vw] transition-all'>
            <div onClick={handleClickLogout} className='flex items-center gap-2 cursor-pointer hover:bg-red-100 hover:text-red-500 hover:rounded-xl px-6 py-2 w-full transition-all'>
                <span className='md:text-lg'><MdLogout /></span>
                <button className='font-semibold md:text-lg  w-full text-left'>Log out</button>
            </div>
        </div>
    )
})

export default ThreeDots
