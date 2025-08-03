// views/ProfileView.jsx
export default function ProfileView({ user, setUser, setCurrentView, darkMode, showNotif }) {
  const orders = [
    {
      id: 1,
      orderNumber: "ORD-1001",
      date: "2024-03-15",
      total: 8999000,
      status: "completed",
    },
    {
      id: 2,
      orderNumber: "ORD-1002",
      date: "2024-03-12",
      total: 459000,
      status: "completed",
    },
    {
      id: 3,
      orderNumber: "ORD-1003",
      date: "2024-03-10",
      total: 189000,
      status: "processing",
    }
  ];

  const handleLogout = () => {
    setUser(null);
    setCurrentView("home");
    showNotif("Logout berhasil!");
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`p-8 rounded-2xl shadow-lg ${
          darkMode ? 'bg-gray-800' : 'bg-white'
        }`}>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-4xl font-bold">
              {user?.name.charAt(0)}
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-2xl font-bold mb-2">{user?.name}</h1>
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>{user?.email}</p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Member Sejak 2024</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">{orders.length} Pesanan</span>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Logout
            </button>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-bold mb-6">Riwayat Pesanan</h2>
            <div className="space-y-4">
              {orders.map((order) => (
                <div
                  key={order.id}
                  className={`p-4 rounded-lg ${
                    darkMode ? 'bg-gray-700' : 'bg-gray-50'
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-semibold">{order.orderNumber}</p>
                      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {order.date}
                      </p>
                    </div>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                      {order.status === 'completed' ? 'Selesai' : 'Diproses'}
                    </span>
                  </div>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    1 produk • Total: Rp {order.total.toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}