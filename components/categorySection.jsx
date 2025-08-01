// components/CategorySection.jsx
export default function CategorySection({ selectedCategory, setSelectedCategory, darkMode }) {
  const categories = [
    { id: "all", name: "Semua Produk", icon: "ShoppingBag" },
    { id: "electronics", name: "Elektronik", icon: "Monitor" },
    { id: "fashion", name: "Fashion", icon: "Shirt" },
    { id: "home", name: "Rumah & Dekor", icon: "Home" },
    { id: "beauty", name: "Kecantikan", icon: "Sparkles" },
    { id: "sports", name: "Olahraga", icon: "Dumbbell" },
  ];

  return (
    <div className={`py-12 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Kategori Produk</h2>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Temukan produk yang Anda butuhkan dari berbagai kategori yang tersedia
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`p-6 rounded-xl transition-all transform hover:scale-105 hover:shadow-lg ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : darkMode
                    ? 'bg-gray-800 hover:bg-gray-700 text-white'
                    : 'bg-white hover:bg-gray-50 text-gray-800 shadow-md'
              }`}
            >
              <div className="flex flex-col items-center space-y-3">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  selectedCategory === category.id
                    ? 'bg-white/20'
                    : 'bg-blue-100 dark:bg-blue-900/30'
                }`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <span className="font-medium text-sm">{category.name}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}