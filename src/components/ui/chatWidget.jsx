// src/components/ui/ChatWidget.jsx

import { useState, useEffect, useRef } from "react";

export default function ChatWidget({ darkMode, showChat, setShowChat }) {
  const [messages, setMessages] = useState([
    { id: 1, text: "Halo! Ada yang bisa saya bantu?", sender: "admin" }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const adminReplies = [
    "Terima kasih atas pesannya! Kami akan segera membantu.",
    "Pengiriman kami biasanya 1-3 hari kerja untuk wilayah Jabodetabek.",
    "Produk ini tersedia dalam stok yang cukup. Siap dikirim!",
    "Anda bisa melakukan pembayaran melalui transfer bank atau QRIS.",
    "Terima kasih telah menghubungi kami. Semoga harimu menyenangkan!"
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      sender: "user"
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");

    setTimeout(() => {
      const randomReply = adminReplies[Math.floor(Math.random() * adminReplies.length)];
      setMessages(prev => [
        ...prev,
        { id: Date.now(), text: randomReply, sender: "admin" }
      ]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {showChat ? (
        <div className="w-80 h-96 rounded-xl shadow-2xl overflow-hidden bg-white dark:bg-gray-800 flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold flex items-center gap-2">
                💬 Customer Support
              </h3>
              <button
                onClick={() => setShowChat(false)}
                className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                aria-label="Tutup chat"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50 dark:bg-gray-900">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg text-sm ${
                    msg.sender === 'user'
                      ? 'bg-blue-600 text-white rounded-br-none'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSendMessage} className="p-3 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
            <div className="flex">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ketik pesan..."
                className="flex-1 px-3 py-2 rounded-l-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg transition-colors"
              >
                ➤
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button
          onClick={() => setShowChat(true)}
          className="w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-105 text-2xl"
          aria-label="Buka chat"
        >
          💬
        </button>
      )}
    </div>
  );
}
