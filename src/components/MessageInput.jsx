import React, { useState } from 'react';
import { FiPlus } from "react-icons/fi";
import { HiOutlineGif } from "react-icons/hi2";
import { IoMdSend } from "react-icons/io";
import { AiOutlineAudio } from "react-icons/ai";



const MessageInput = ({ onSendMessage }) => {
    const [message, setMessage] = useState("")

    const handleSend = (e) => {
        e.preventDefault();
        if (!message.trim()) return;
        onSendMessage(message);
        setMessage("");
    };

    return (
        <form onSubmit={handleSend} className="flex items-center gap-2 px-4 py-2 border-t border-gray-300 w-full">
            <button type='button' className='p-2 text-xl hover:bg-gray-200 text-gray-600 rounded-full transition-all'><FiPlus /></button>
            <button type='button' className='p-2 text-xl hover:bg-gray-200 text-gray-600 rounded-full transition-all'><HiOutlineGif /></button>
            <textarea
                placeholder='Type a message'
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                rows={1}
                onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        handleSend(e)
                    }
                }}
                className='flex-1 resize-none rounded-full py-2 px-4 bg-white outline-none text-gray-700'
            >
            </textarea>
            <button  type="submit" className={`${message.length>0 ? "bg-green-500 text-white" : ""} p-2 hover:bg-green-600 hover:scale-105  text-xl rounded-full transition-all`}>{message.length>0 ? <IoMdSend/>: <AiOutlineAudio/> }</button>
        </form>
    );
};

export default MessageInput;
