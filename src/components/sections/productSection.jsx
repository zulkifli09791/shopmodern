import { useState } from "react";
import ProductCard from "../ui/produkCard";
import { products } from "../../data/product";
import { t } from "../../utils/helpers";

export default function ProductsSection({ searchQuery, selectedCategory, darkMode, setSelectedProduct }) {
  const [sortBy, setSortBy] = useState('newest');
  const [priceRange] = useState([0, 15000000]);

  // Filter products based on search, category, and price range
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesSearch && matchesCategory && matchesPrice;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'popular':
        return (b.reviews || 0) - (a.reviews || 0);
      default: // newest
        return b.id - a.id;
    }
  });

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Products Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Produk Terbaru</h2>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Temukan produk-produk terbaik kami
            </p>
          </div>
          
          {/* Sort and Filter Options */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4 md:mt-0">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className={`px-4 py-2 rounded-lg border ${
                darkMode 
                  ? 'bg-gray-800 border-gray-700 text-white' 
                  : 'bg-white border-gray-300 text-gray-800'
              }`}
            >
              <option value="newest">{t({ id: "Terbaru", en: "Newest" })}</option>
              <option value="price-low">{t({ id: "Harga Terendah", en: "Price Low to High" })}</option>
              <option value="price-high">{t({ id: "Harga Tertinggi", en: "Price High to Low" })}</option>
              <option value="rating">{t({ id: "Rating Tertinggi", en: "Highest Rating" })}</option>
              <option value="popular">{t({ id: "Paling Populer", en: "Most Popular" })}</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        {sortedProducts.length === 0 ? (
          <div className={`text-center py-16 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-semibold mb-2">Produk tidak ditemukan</h3>
            <p>Coba ubah kata kunci pencarian atau filter kategori</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedProducts.map((product) => (
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