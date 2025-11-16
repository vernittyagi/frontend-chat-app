import React from 'react'
import { IoMdClose } from "react-icons/io";
import { MdOutlineModeEdit } from "react-icons/md";
import { FaRegImages } from "react-icons/fa";

const ContactInfo = ({ selectedChat, onClickCloseContact }) => {
    const handleClose = () => {
        onClickCloseContact()
    }
    return (
        <>
            <div className='px-4 py-4 flex justify-between items-center'>
                <div className='flex gap-4'>
                    <span onClick={handleClose} className='text-2xl font-bold cursor-pointer'><IoMdClose /></span>
                    <span>Contact info</span>
                </div>
                <span className='text-2xl font-bold cursor-pointer'><MdOutlineModeEdit /></span>
            </div>
            <div className='flex flex-col gap-2 justify-center items-center h-[30vh] mt-10'>
                <span><img src={selectedChat.sex === "male" ? "https://avatar.iran.liara.run/public/12" : "https://avatar.iran.liara.run/public/80"} alt={selectedChat.name} className='w-36 h-36 cursor-pointer' /></span>
                <span className='font-medium text-2xl'>{selectedChat.name}</span>
                <span className='text-gray-500'>011923456712</span>
            </div>
            <div className='flex flex-col gap-1 px-4 mt-2'>
                <span className='text-gray-500 font-medium'>About</span>
                <span>Hey there, I am using TalkMate!</span>
            </div>
            <div className='h-[1px] bg-gray-400 mt-6 w-[90%] m-auto'></div>
            <div className='flex px-6 justify-between mt-4 cursor-pointer'>
                <div className='flex gap-6'>
                    <span className='text-2xl font-bold text-gray-500 cursor-pointer'><FaRegImages /></span>
                    <span>Media, links and docs</span>
                </div>
                <span>0</span>
            </div>
        </>
    )
}

export default ContactInfo