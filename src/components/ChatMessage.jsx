"use client";

import { memo } from "react";

const ChatMessage = ({ message }) => {
  const isUser = message.role === "user";

  return (
    <div
      className={`w-full flex ${
        isUser ? "justify-end" : "justify-start"
      } mb-3`}
    >
      <div
        className={`max-w-[75%] px-4 py-2 rounded-lg text-sm leading-relaxed ${
          isUser
            ? "bg-blue-600 text-white rounded-br-none"
            : "bg-gray-200 text-gray-900 rounded-bl-none"
        }`}
      >
        {message.content}
      </div>
    </div>
  );
}

export default memo(ChatMessage);
