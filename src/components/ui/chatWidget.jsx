// components/ChatWidget.jsx
export default function ChatWidget({ darkMode, showChat, setShowChat }) {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className={`w-80 h-96 rounded-xl shadow-2xl overflow-hidden transition-all duration-300 ${
        darkMode ? 'bg-gray-800' : 'bg-white'
      } ${showChat ? 'scale-100' : 'scale-95'}`}>
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold">Customer Support</h3>
            <button 
              onClick={() => setShowChat(false)}
              className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        <div className="h-80 overflow-y-auto p-4 space-y-4">
          <div className="flex justify-end">
            <div className="bg-blue-600 text-white rounded-lg px-4 py-2 max-w-xs">
              Halo, ada yang bisa dibantu?
            </div>
          </div>
          <div className="flex justify-start">
            <div className="bg-gray-200 dark:bg-gray-700 rounded-lg px-4 py-2 max-w-xs">
              Saya ingin tahu tentang pengiriman produk.
            </div>
          </div>
          <div className="flex justify-end">
            <div className="bg-blue-600 text-white rounded-lg px-4 py-2 max-w-xs">
              Pengiriman kami biasanya 1-3 hari kerja untuk wilayah Jabodetabek.
            </div>
          </div>
        </div>
        <div className="p-3 border-t border-gray-200 dark:border-gray-700">
          <div className="flex">
            <input
              type="text"
              placeholder="Ketik pesan..."
              className={`flex-1 px-3 py-2 rounded-l-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                darkMode 
                  ? 'bg-gray-700 border-gray-600 text-white' 
                  : 'bg-gray-50 border-gray-300 text-gray-900'
              }`}
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {!showChat && (
        <button
          onClick={() => setShowChat(true)}
          className="w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-105"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
      )}
    </div>
  );
}