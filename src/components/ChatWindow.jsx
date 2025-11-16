import React, { useEffect, useState } from 'react'
import ChatHeader from './ChatHeader'
import MessageList from './MessageList'
import MessageInput from './MessageInput'

const Chatwindow = ({ selectedChat, contactClicked, onContactClicked }) => {
    const [messages, setMessages] = useState([])
    const [botReply, setbotReply] = useState([])
    const [isReplying, setisReplying] = useState(false)

    useEffect(() => {
        if (selectedChat) {
            // Reset messages when switching to a new chat
            setMessages([]);
            setbotReply([]);

            // Show last message of that chat 
            setMessages([{ ...selectedChat, message: selectedChat.lastMessage }]);
            console.log("setMessage in chatwindow is  - ", messages);

        }
    }, [selectedChat]);

    const handleSendMessage = (text) => {
        setMessages([...messages, { id: 0, name: "Vernit Tyagi", message: text, timestamp: Date.now(), sex: "male", isMine: true }])
        setTimeout(() => {
            setisReplying(true)
        }, 1000);

        //simulate bot reply 
        setTimeout(() => {
            const reply = { id: selectedChat.id, name: selectedChat.name, message: `Hi ${selectedChat.name} is busy, pls reach out to her number directly - 011923456712`, timestamp: Date.now(), sex: selectedChat.sex, isMine: false }
            setbotReply((prev) => [...prev, reply])
            setisReplying(false)
        }, 3000);
    }

        const allMessages = [...messages, ...botReply].sort(
            (a, b) => new Date(a.timestamp) - new Date(b.timestamp));
        console.log("all messages are - ", allMessages);

        return (
            <div className={`${!selectedChat ? "bg-[url('./assets/pattern_3.png')] bg-contain opacity-55" : ""} flex flex-col h-full`}>
                {selectedChat && <ChatHeader selectedChat={selectedChat} isReplying={isReplying}  onContactClicked={onContactClicked}/>}
                {selectedChat && <MessageList messages={allMessages} selectedChat={selectedChat} />}
                {selectedChat && <MessageInput onSendMessage={handleSendMessage} />}
            </div>
        )
    }

    export default Chatwindow
