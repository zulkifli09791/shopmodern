// views/AdminDashboard.jsx
export default function AdminDashboard({ darkMode }) {
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

  const products = [
    { id: 1, name: "Smartphone X Pro", price: 8999000, stock: 15, category: "electronics" },
    { id: 2, name: "Laptop Ultrabook", price: 12500000, stock: 8, category: "electronics" },
    { id: 3, name: "Kemeja Kanvas Premium", price: 299000, stock: 42, category: "fashion" },
    { id: 4, name: "Lampu Meja LED", price: 189000, stock: 31, category: "home" },
    { id: 5, name: "Serum Vitamin C", price: 159000, stock: 67, category: "beauty" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <div className="flex space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
              Export Data
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg">
              Add Product
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className={`p-6 rounded-xl ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          } shadow`}>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold">24</p>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Total Products</p>
              </div>
            </div>
          </div>

          <div className={`p-6 rounded-xl ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          } shadow`}>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold">156</p>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Total Orders</p>
              </div>
            </div>
          </div>

          <div className={`p-6 rounded-xl ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          } shadow`}>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold">89</p>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Users</p>
              </div>
            </div>
          </div>

          <div className={`p-6 rounded-xl ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          } shadow`}>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold">Rp 45.2M</p>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Revenue</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className={`p-6 rounded-xl ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          } shadow`}>
            <h2 className="text-xl font-bold mb-4">Recent Orders</h2>
            <div className="space-y-4">
              {orders.map((order) => (
                <div key={order.id} className="flex justify-between items-center p-3 border-b border-gray-200 dark:border-gray-700 last:border-0">
                  <div>
                    <p className="font-semibold">{order.orderNumber}</p>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{order.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">Rp {order.total.toLocaleString()}</p>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      order.status === 'completed' 
                        ? 'bg-green-100 text-green-800' 
                        : order.status === 'processing'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {order.status === 'completed' ? 'Completed' : order.status === 'processing' ? 'Processing' : 'Shipped'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`p-6 rounded-xl ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          } shadow`}>
            <h2 className="text-xl font-bold mb-4">Recent Products</h2>
            <div className="space-y-4">
              {products.slice(0, 5).map((product) => (
                <div key={product.id} className="flex items-center p-3 border-b border-gray-200 dark:border-gray-700 last:border-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white text-xs font-medium">
                    {product.name.charAt(0)}
                  </div>
                  <div className="ml-3 flex-1">
                    <p className="font-semibold">{product.name}</p>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Rp {product.price.toLocaleString()}</p>
                  </div>
                  <div className="text-right">
                    <p className={`text-sm ${product.stock > 10 ? 'text-green-500' : product.stock > 0 ? 'text-yellow-500' : 'text-red-500'}`}>
                      {product.stock} tersedia
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}