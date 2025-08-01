// views/WishlistView.jsx
import ProductCard from "../components/ProductCard";

export default function WishlistView({ wishlist, setSelectedProduct, darkMode }) {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Wishlist Saya</h1>
        
        {wishlist.length === 0 ? (
          <div className={`text-center py-16 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <h3 className="text-xl font-semibold mb-2">Wishlist Anda kosong</h3>
            <p className="mb-6">Tambahkan produk ke wishlist untuk menyimpan produk favorit Anda</p>
            <button
              onClick={() => setCurrentView("products")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Lihat Produk
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlist.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                darkMode={darkMode}
                onClick={() => setSelectedProduct(product)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}