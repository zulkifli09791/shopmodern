// views/ProductsSection.jsx
import ProductCard from "../src/components/ProductCard";

export default function ProductsSection({ searchQuery, selectedCategory, darkMode, setSelectedProduct }) {
  const products = [
    {
      id: 1,
      name: { id: "Smartphone X Pro", en: "Smartphone X Pro" },
      price: 8999000,
      originalPrice: 9500000,
      category: "electronics",
      image: "https://placehold.co/300x300/3b82f6/ffffff?text=Smartphone+X+Pro",
      rating: 4.8,
      reviews: 124,
      stock: 15,
      description: { 
        id: "Smartphone canggih dengan kamera 108MP, layar AMOLED 120Hz, dan baterai 5000mAh.",
        en: "Advanced smartphone with 108MP camera, AMOLED 120Hz display, and 5000mAh battery."
      },
      features: { 
        id: ["108MP Camera", "AMOLED 120Hz", "5G Support", "Wireless Charging"],
        en: ["108MP Camera", "AMOLED 120Hz", "5G Support", "Wireless Charging"]
      },
    },
    {
      id: 2,
      name: { id: "Laptop Ultrabook", en: "Ultrabook Laptop" },
      price: 12500000,
      originalPrice: 14000000,
      category: "electronics",
      image: "https://placehold.co/300x300/10b981/ffffff?text=Ultrabook",
      rating: 4.6,
      reviews: 89,
      stock: 8,
      description: { 
        id: "Laptop ringan dengan prosesor terbaru, RAM 16GB, dan SSD 512GB.",
        en: "Lightweight laptop with latest processor, 16GB RAM, and 512GB SSD."
      },
      features: { 
        id: ["Intel i7", "16GB RAM", "512GB SSD", "14\" Display"],
        en: ["Intel i7", "16GB RAM", "512GB SSD", "14\" Display"]
      },
    },
    {
      id: 3,
      name: { id: "Kemeja Kanvas Premium", en: "Premium Canvas Shirt" },
      price: 299000,
      originalPrice: 350000,
      category: "fashion",
      image: "https://placehold.co/300x300/f59e0b/ffffff?text=Kemeja+Premium",
      rating: 4.4,
      reviews: 231,
      stock: 42,
      description: { 
        id: "Kemeja kanvas berkualitas tinggi dengan potongan modern dan nyaman dipakai.",
        en: "High-quality canvas shirt with modern cut and comfortable to wear."
      },
      features: { 
        id: ["Katun Premium", "Potongan Modern", "Tahan Lama", "Nyaman Dipakai"],
        en: ["Premium Cotton", "Modern Cut", "Durable", "Comfortable"]
      },
    },
    {
      id: 4,
      name: { id: "Lampu Meja LED", en: "LED Desk Lamp" },
      price: 189000,
      originalPrice: 220000,
      category: "home",
      image: "https://placehold.co/300x300/8b5cf6/ffffff?text=Lampu+LED",
      rating: 4.7,
      reviews: 156,
      stock: 31,
      description: { 
        id: "Lampu meja LED dengan pencahayaan adjustable dan desain minimalis modern.",
        en: "LED desk lamp with adjustable lighting and modern minimalist design."
      },
      features: { 
        id: ["Adjustable Brightness", "USB Charging", "Modern Design", "Energy Efficient"],
        en: ["Adjustable Brightness", "USB Charging", "Modern Design", "Energy Efficient"]
      },
    },
    {
      id: 5,
      name: { id: "Serum Vitamin C", en: "Vitamin C Serum" },
      price: 159000,
      originalPrice: 199000,
      category: "beauty",
      image: "https://placehold.co/300x300/ec4899/ffffff?text=Serum+C",
      rating: 4.9,
      reviews: 342,
      stock: 67,
      description: { 
        id: "Serum vitamin C murni 20% untuk mencerahkan kulit dan mengurangi noda hitam.",
        en: "Pure 20% vitamin C serum to brighten skin and reduce dark spots."
      },
      features: { 
        id: ["20% Vitamin C", "Hyaluronic Acid", "Brightening", "Anti-Aging"],
        en: ["20% Vitamin C", "Hyaluronic Acid", "Brightening", "Anti-Aging"]
      },
    },
    {
      id: 6,
      name: { id: "Sepatu Lari Pro", en: "Pro Running Shoes" },
      price: 699000,
      originalPrice: 850000,
      category: "sports",
      image: "https://placehold.co/300x300/ef4444/ffffff?text=Sepatu+Lari",
      rating: 4.5,
      reviews: 189,
      stock: 23,
      description: { 
        id: "Sepatu lari dengan teknologi bantalan canggih untuk kenyamanan maksimal.",
        en: "Running shoes with advanced cushioning technology for maximum comfort."
      },
      features: { 
        id: ["Lightweight", "Cushion Technology", "Breathable", "Non-Slip"],
        en: ["Lightweight", "Cushion Technology", "Breathable", "Non-Slip"]
      },
    },
    {
      id: 7,
      name: { id: "Earphone Wireless", en: "Wireless Earphones" },
      price: 799000,
      originalPrice: 950000,
      category: "electronics",
      image: "https://placehold.co/300x300/06b6d4/ffffff?text=Earphone",
      rating: 4.3,
      reviews: 167,
      stock: 45,
      description: { 
        id: "Earphone wireless dengan noise cancellation aktif dan baterai tahan lama.",
        en: "Wireless earphones with active noise cancellation and long battery life."
      },
      features: { 
        id: ["ANC", "30hr Battery", "Fast Charging", "Water Resistant"],
        en: ["ANC", "30hr Battery", "Fast Charging", "Water Resistant"]
      },
    },
    {
      id: 8,
      name: { id: "Set Peralatan Dapur", en: "Kitchen Utensil Set" },
      price: 459000,
      originalPrice: 550000,
      category: "home",
      image: "https://placehold.co/300x300/14b8a6/ffffff?text=Dapur",
      rating: 4.6,
      reviews: 98,
      stock: 19,
      description: { 
        id: "Set peralatan dapur lengkap dari stainless steel berkualitas tinggi.",
        en: "Complete kitchen utensil set made from high-quality stainless steel."
      },
      features: { 
        id: ["Stainless Steel", "Non-Stick", "Complete Set", "Easy Clean"],
        en: ["Stainless Steel", "Non-Stick", "Complete Set", "Easy Clean"]
      },
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Produk Terbaru</h2>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Temukan produk-produk terbaik kami
            </p>
          </div>
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Menampilkan {filteredProducts.length} produk
            </span>
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <div className={`text-center py-16 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-semibold mb-2">Produk tidak ditemukan</h3>
            <p>Coba ubah kata kunci pencarian atau filter kategori</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
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