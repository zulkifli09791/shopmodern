// src/components/layout/Footer.jsx

export default function Footer({ darkMode }) {
  return (
    <footer className={`mt-16 ${darkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-800 text-gray-300'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              ShopModern
            </div>
            <p className="text-gray-400 mb-4">
              Toko online modern dengan berbagai produk berkualitas terbaik.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'instagram', 'tiktok'].map((social) => (
                <button
                  key={social}
                  onClick={() => window.open(`https://${social}.com`, '_blank')}
                  className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.489.5.09.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.602-3.369-1.34-3.369-1.34-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.09-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.414 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Tentang Kami</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => alert("Tentang Kami")}
                  className="hover:text-white transition-colors text-left w-full"
                >
                  Tentang ShopModern
                </button>
              </li>
              <li>
                <button 
                  onClick={() => alert("Karir")}
                  className="hover:text-white transition-colors text-left w-full"
                >
                  Karir
                </button>
              </li>
              <li>
                <button 
                  onClick={() => alert("Blog")}
                  className="hover:text-white transition-colors text-left w-full"
                >
                  Blog
                </button>
              </li>
              <li>
                <button 
                  onClick={() => alert("Press")}
                  className="hover:text-white transition-colors text-left w-full"
                >
                  Press
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Bantuan</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => alert("Pusat Bantuan")}
                  className="hover:text-white transition-colors text-left w-full"
                >
                  Pusat Bantuan
                </button>
              </li>
              <li>
                <button 
                  onClick={() => alert("Cara Berbelanja")}
                  className="hover:text-white transition-colors text-left w-full"
                >
                  Cara Berbelanja
                </button>
              </li>
              <li>
                <button 
                  onClick={() => alert("Kebijakan Pengembalian")}
                  className="hover:text-white transition-colors text-left w-full"
                >
                  Kebijakan Pengembalian
                </button>
              </li>
              <li>
                <button 
                  onClick={() => alert("Kontak Kami")}
                  className="hover:text-white transition-colors text-left w-full"
                >
                  Kontak Kami
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Kontak</h3>
            <div className="space-y-2 text-gray-400">
              <p>📍 Jakarta, Indonesia</p>
              <p>📞 +62 812 3456 7890</p>
              <p>📧 info@shopmodern.com</p>
              <p>⏰ Senin - Sabtu: 09.00 - 18.00</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2024 ShopModern. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}