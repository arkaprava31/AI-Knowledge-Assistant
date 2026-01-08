"use client"

import { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";

const ChatWindow = ({ messages, loading, error }) => {

    const bottomRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages])

    return (
        <div className="w-full flex flex-col items-start gap-2 max-h-[80vh] overflow-y-auto custom-scrollbar pr-2">
            {
                messages && messages.map((msg) => (
                    <ChatMessage key={msg.id} message={msg} />
                ))
            }

            {loading && <div className="text-sm animate-pulse">Thinking...</div>}

            {error && <div className="text-sm text-red-600 italic">Error generating response!</div>}

            <div ref={bottomRef} />
        </div>
    )
};

export default ChatWindow;