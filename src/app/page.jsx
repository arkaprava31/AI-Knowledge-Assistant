"use client"

import ChatInput from "@/components/ChatInput";
import ChatWindow from "@/components/ChatWindow";
import { useState } from "react";

const Home = () => {

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const mockApiResponse = (userMessage) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ id: Date.now() + 1, role: "bot", content: `User said: ${userMessage}` });
      }, 2000);
    });
  };

  const handleAsk = () => {
    if (!input.trim()) return;

    const newUserMessage = { id: Date.now(), role: "user", content: input };

    setMessages((prev) => [...prev, newUserMessage]);

    setInput("");
    setLoading(true);
    setError(null);

    try {
      mockApiResponse(newUserMessage.content).then((botMessage) => {
        setMessages((prev) => [...prev, botMessage]);
        setLoading(false);
      });
    } catch (error) {
      setError(`Failed to fetch response: ${error}.`);
      setLoading(false);
    }

    console.log(messages);

  };

  return (
    <div className="w-full flex items-center justify-center bg-white">
      <div className={`w-full max-w-[40%] min-h-screen flex flex-col items-center ${messages.length == 0 ? 'pt-[50vh]' : 'justify-between'} gap-8 p-6`}>
        {messages.length > 0 && <ChatWindow messages={messages} loading={loading} error={error} />}
        <ChatInput input={input} setInput={setInput} handleAsk={handleAsk} />
      </div>
    </div>
  )
};

export default Home;
