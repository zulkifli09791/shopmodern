// views/WishlistView.jsx
// import ProductCard from "../components/ui/produkCard";

export default function WishlistView({ wishlist, setSelectedProduct, darkMode, setCurrentView }) {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Wishlist Saya</h1>
          <button
            onClick={() => setCurrentView("home")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium"
          >
            Kembali ke Beranda
          </button>
        </div>

        {wishlist.length === 0 ? (
          <div className={`text-center py-16 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <h3 className="text-xl font-semibold mb-2">Wishlist Anda kosong</h3>
            <p>Belum ada produk yang disimpan</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlist.map((product) => (
              <div 
                key={product.id} 
                onClick={() => setSelectedProduct(product)}
                className="cursor-pointer"
              >
                <img 
                  src={product.image} 
                  alt={product.name.id} 
                  className="w-full h-48 object-cover rounded-lg"
                />
                <h3 className="font-semibold mt-2">{product.name.id}</h3>
                <p className="text-blue-600">Rp {product.price.toLocaleString()}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}