import React, { useEffect, useState, useRef } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import ThreeDots from './ThreeDots';

const Sidebar = ({ selectedChat, onSelectChat }) => {
    const boxRef = useRef(null);
    const [isthreeDots, setisthreeDots] = useState(false)
    const dummyChats = [
        { id: 1, name: "Ana Wilson", lastMessage: "Hey there!", time: "10:30 AM", sex: "female", isMine: false },
        { id: 2, name: "Luna Wellington", lastMessage: "Need a landing page by 6 PM today !!!", time: "17:30 PM", sex: "female", isMine: false },
        { id: 3, name: "Mitchel Starc", lastMessage: "Is payment for cloud service done ?", time: "17:30 PM", sex: "male", isMine: false },
    ];
    const [filteredChats, setfilteredChats] = useState(dummyChats)

    const handleSelectChat = (e, chat) => {
        console.log("chat selected on sidebar - ", chat);
        onSelectChat(chat)
    }

    const handleInputChange = (e) => {
        if (!e.target.value.trim().toLowerCase()) {
            setfilteredChats(dummyChats)
            return
        }
        else {
            const filtered = dummyChats.filter((chat) => chat.name.toLowerCase().includes(e.target.value.trim().toLowerCase()))
            setfilteredChats(filtered)
            console.log("filteredChats is - ", filteredChats);
        }
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            console.log("outside click triggered !!");
            
            // check if click is outside the box
            if (boxRef.current && !boxRef.current.contains(event.target)) {
                console.log("outside ref of box !!!");
                
                setisthreeDots(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)

        return () => {
            document.removeEventListener("mousedowwn", handleClickOutside)
        }
    }, [])



    const handleTreeDots = () => {
        setisthreeDots(!isthreeDots)
    }

    return (
        <>
            <div className='flex items-center justify-between'>
                <h2 className='font-semibold text-2xl'>Chats</h2>
                <div className='relative'>
                    <span className='text-2xl cursor-pointer' onClick={handleTreeDots}><BsThreeDotsVertical /></span>
                    {isthreeDots && <ThreeDots ref={boxRef} />}
                </div>
            </div>
            <input type="text" onChange={handleInputChange} placeholder='Ask AI or Search' name="Search" className='mt-5 px-6 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 bg-[#f6f5f5]' />
            <div className='flex flex-col h-full overflow-y-auto transition-all'>
                {filteredChats.map((chat) => {
                    return (
                        <div key={chat.id} onClick={(e) => handleSelectChat(e, chat)} className={`${(selectedChat?.id === chat.id) ? "bg-[#f6f5f5]" : ""} mt-10 hover:bg-[#f6f5f5] cursor-pointer flex items-center gap-3 justify-between p-3 rounded-2xl`}>
                            <div className='flex gap-4'>
                                <span><img src={chat.sex === "male" ? "https://avatar.iran.liara.run/public/12" : "https://avatar.iran.liara.run/public/80"} alt={chat.name} className='w-12 h-12' /></span>
                                <div className='flex flex-col'>
                                    <span className='text-xl font-normal'>{chat.name}</span>
                                    <span className='text-gray-500 text-sm'>{chat.lastMessage}</span>
                                </div>
                            </div>
                            <span className='text-gray-500 text-sm'>{chat.time}</span>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Sidebar
