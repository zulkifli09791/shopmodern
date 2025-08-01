// views/LoginView.jsx
import { useState } from "react";

export default function LoginView({ setUser, setCurrentView, darkMode, showNotif }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegister) {
      if (name && email && password) {
        setUser({ name, email });
        setCurrentView("home");
        showNotif("Registrasi berhasil! Selamat datang!");
      }
    } else {
      if (email && password) {
        setUser({ name: "John Doe", email });
        setCurrentView("home");
        showNotif("Login berhasil!");
      } else {
        showNotif("Email atau password salah!");
      }
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
      <div className={`max-w-md w-full p-8 rounded-2xl shadow-xl ${
        darkMode ? 'bg-gray-800' : 'bg-white'
      }`}>
        <div className="text-center mb-8">
          <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
            ShopModern
          </div>
          <h2 className="text-2xl font-bold mb-2">
            {isRegister ? "Daftar Akun" : "Masuk ke Akun"}
          </h2>
          <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
            {isRegister 
              ? "Buat akun baru untuk mulai berbelanja" 
              : "Masuk untuk melanjutkan berbelanja"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {isRegister && (
            <div>
              <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Nama Lengkap
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 text-white' 
                    : 'bg-gray-50 border-gray-300 text-gray-900'
                }`}
                placeholder="Masukkan nama lengkap"
                required
              />
            </div>
          )}

          <div>
            <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                darkMode 
                  ? 'bg-gray-700 border-gray-600 text-white' 
                  : 'bg-gray-50 border-gray-300 text-gray-900'
              }`}
              placeholder="Masukkan email Anda"
              required
            />
          </div>

          <div>
            <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                darkMode 
                  ? 'bg-gray-700 border-gray-600 text-white' 
                  : 'bg-gray-50 border-gray-300 text-gray-900'
              }`}
              placeholder="Masukkan password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors"
          >
            {isRegister ? "Daftar Sekarang" : "Masuk"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => setIsRegister(!isRegister)}
            className="text-blue-600 hover:text-blue-500 font-medium"
          >
            {isRegister 
              ? "Sudah punya akun? Masuk di sini" 
              : "Belum punya akun? Daftar di sini"}
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-center space-x-4">
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span>Google</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>Facebook</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}