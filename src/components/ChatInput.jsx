"use client"

const ChatInput = ({ input, setInput, handleAsk, disabled }) => {
    return (
        <div className="w-full flex items-center justify-center gap-2">
            <input
                type="text"
                placeholder="Ask me anything!"
                disabled={disabled}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter" && !disabled) {
                        handleAsk();
                    }
                }}
                className="border border-gray-300 rounded px-2 py-2 w-96 focus:outline-none focus:ring-1 focus:ring-blue-500 text-black"
            />
            <button
                onClick={handleAsk}
                disabled={disabled || !input.trim()}
                className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer disabled:cursor-not-allowed disabled:opacity-50">
                Ask
            </button>
        </div>
    )
};

export default ChatInput;