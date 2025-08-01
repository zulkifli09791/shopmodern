// components/ProductCard.jsx
export default function ProductCard({ product, darkMode, onClick }) {
  return (
    <div 
      className={`rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
        darkMode ? 'bg-gray-800' : 'bg-white'
      } cursor-pointer`}
      onClick={onClick}
    >
      <div className="relative">
        <img
          src={product.image}
          alt={product.name.id}
          className="w-full h-48 object-cover"
        />
        {product.originalPrice > product.price && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
            -{Math.round((1 - product.price / product.originalPrice) * 100)}%
          </div>
        )}
        <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
          ⭐ {product.rating}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.name.id}</h3>
        <div className="flex items-center mb-2">
          <span className="text-lg font-bold text-blue-600">Rp {product.price.toLocaleString()}</span>
          {product.originalPrice > product.price && (
            <span className="text-sm text-gray-500 line-through ml-2">Rp {product.originalPrice.toLocaleString()}</span>
          )}
        </div>
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
          </svg>
          {product.rating} ({product.reviews})
        </div>
        <button
          disabled={product.stock === 0}
          className={`w-full py-2 rounded-lg font-medium transition-colors ${
            product.stock === 0
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-lg'
          }`}
        >
          {product.stock === 0 ? 'Stok Habis' : 'Tambah ke Keranjang'}
        </button>
      </div>
    </div>
  );
}