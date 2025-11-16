import React, { useState, useEffect, useRef } from "react";

const MessageList = ({ messages}) => {
    const windowEndRef = useRef(null)

    useEffect(() => {
        console.log("ref is - ", windowEndRef.current);
        windowEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [messages])


    return (
        <div className="flex flex-col h-full overflow-y-auto bg-[url('./assets/pattern.png')] bg-cover p-2 md:p-10 sm:p-5 space-y-6 transition-all">
            {messages.map((msg, index) => (
                <div
                    key={index}
                    className={`${msg.isMine ? "self-end bg-green-200 rounded-br-none" : "self-start bg-white rounded-bl-none flex gap-2"} p-2 md:p-3 m-1 rounded-lg max-w-[75%] sm:max-w-[60%] md:max-w-[60%] whitespace-pre-wrap transition-all`}
                >
                    {msg.message}
                    <div className="text-xs self-end text-gray-500">
                        {msg.time}
                    </div>
                </div>
            ))}
            <div ref={windowEndRef}></div>
        </div>
    );
};

export default MessageList;
