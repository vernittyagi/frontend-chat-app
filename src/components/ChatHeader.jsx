import React from 'react'
import { IoVideocamOutline, IoSearchSharp } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";


const ChatHeader = ({selectedChat, isReplying, onContactClicked}) => {
    const handleContactInfo = () => {
        onContactClicked()
    }

    return (
        <div className='border-b border-gray-400 bg-white px-4 py-2'>
            <div className='flex justify-between items-center gap-4'>
                <div onClick={handleContactInfo} className='flex gap-4 w-full cursor-pointer'>
                    <span><img src={selectedChat.sex=== "male"?"https://avatar.iran.liara.run/public/12":"https://avatar.iran.liara.run/public/80"} alt={selectedChat.name} className='w-12 h-12' /></span>
                    <div className='flex flex-col'>
                        <span>{selectedChat.name}</span>
                        <span className={`${isReplying?"text-green-500 font-semibold":"text-gray-500"} text-sm`}>{isReplying?"Typing...":"Online"}</span>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <span className='text-2xl cursor-pointer'><IoVideocamOutline /></span>
                    <span className='text-2xl cursor-pointer'><IoSearchSharp /></span>
                    <span className='text-2xl cursor-pointer'><BsThreeDotsVertical /></span>
                </div>
            </div>
        </div>
    )
}

export default ChatHeader
