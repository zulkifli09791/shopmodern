// views/ProductDetailView.jsx
import { useState } from "react";

export default function ProductDetailView({ product, addToCart, addToWishlist, wishlist, darkMode, setCurrentView }) {
  const [selectedImage, setSelectedImage] = useState(product.image);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => setCurrentView("products")}
          className="flex items-center text-blue-600 hover:text-blue-700 mb-6"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Kembali ke Produk
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <img
              src={selectedImage}
              alt={product.name.id}
              className="w-full rounded-2xl shadow-lg"
            />
          </div>

          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name.id}</h1>
            
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-gray-600 dark:text-gray-400">
                {product.rating} ({product.reviews} ulasan)
              </span>
            </div>

            <div className="flex items-center mb-6">
              <span className="text-3xl font-bold text-blue-600">
                Rp {product.price.toLocaleString()}
              </span>
              {product.originalPrice > product.price && (
                <span className="text-lg text-gray-500 line-through ml-3">
                  Rp {product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>

            <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {product.description.id}
            </p>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Fitur Utama:</h3>
              <ul className="space-y-2">
                {product.features.id.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <div className={`inline-block px-3 py-1 rounded-full text-sm ${
                product.stock > 10
                  ? 'bg-green-100 text-green-800'
                  : product.stock > 0
                  ? 'bg-yellow-100 text-yellow-800'
                  : 'bg-red-100 text-red-800'
              }`}>
                {product.stock > 10
                  ? 'Stok Tersedia'
                  : product.stock > 0
                  ? `Hanya ${product.stock} tersisa`
                  : 'Stok Habis'}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => addToCart(product)}
                disabled={product.stock === 0}
                className={`flex-1 py-3 rounded-lg font-semibold transition-colors ${
                  product.stock === 0
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-lg'
                }`}
              >
                {product.stock === 0 ? 'Stok Habis' : 'Tambah ke Keranjang'}
              </button>
              <button
                onClick={() => addToWishlist(product)}
                className={`px-6 py-3 rounded-lg border transition-colors ${
                  wishlist.find((item) => item.id === product.id)
                    ? 'bg-red-500 text-white border-red-500'
                    : darkMode
                      ? 'border-gray-600 text-white hover:bg-gray-700'
                      : 'border-gray-300 text-gray-800 hover:bg-gray-50'
                }`}
              >
                <svg className="w-5 h-5 inline mr-2" fill={wishlist.find((item) => item.id === product.id) ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                {wishlist.find((item) => item.id === product.id) ? 'Hapus dari Wishlist' : 'Tambah ke Wishlist'}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Ulasan Produk</h2>
          <div className="space-y-6">
            {[
              { id: 1, user: "Andi", rating: 5, date: "15 Maret 2024", comment: "Produk sangat berkualitas, pengiriman cepat, dan kemasan rapi. Sangat puas!" },
              { id: 2, user: "Siti", rating: 4, date: "12 Maret 2024", comment: "Bagus sekali, sesuai dengan deskripsi. Hanya saja pengiriman agak lama." },
              { id: 3, user: "Budi", rating: 5, date: "10 Maret 2024", comment: "Luar biasa! Produk original dan harganya sangat terjangkau. Akan beli lagi!" },
            ].map((review) => (
              <div
                key={review.id}
                className={`p-6 rounded-xl ${
                  darkMode ? 'bg-gray-800' : 'bg-white'
                } shadow`}
              >
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-medium text-sm">
                    {review.user.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold">{review.user}</h4>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {review.date}
                    </p>
                  </div>
                  <div className="flex items-center ml-auto">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                  {review.comment}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}