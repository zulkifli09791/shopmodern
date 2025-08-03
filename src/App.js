// App.jsx
import { useState } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
// import Hero from "./components/sections/Hero";
import HomeView from "./views/homeView";
// import CategorySection from "./components/sections/categorySection";
import ProductsSection from "./components/sections/productSection";
// import TestimonialsSection from "./components/sections/TestimonialSection";
import LoginView from "./views/loginView";
import CartView from "./views/cartView";
import WishlistView from "./views/wishlistView";
import ProfileView from "./views/profileView";
import ProductDetailView from "./views/productDetailView";
import AdminDashboard from "./views/adminDashboard";
import ChatWidget from "./components/ui/chatWidget";
import Notification from "./components/layout/notifikation";

function App() {
  const [currentView, setCurrentView] = useState("home");
  const [darkMode, setDarkMode] = useState(false);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [user, setUser] = useState(null);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [language, setLanguage] = useState("id");
  const [showChat, setShowChat] = useState(false);

  const showNotif = (message) => {
    setNotificationMessage(message);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className={`min-h-screen transition-colors duration-300 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}>
        <Notification 
          show={showNotification} 
          message={notificationMessage} 
        />
        
        <Navbar 
          currentView={currentView}
          setCurrentView={setCurrentView}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          cart={cart}
          wishlist={wishlist}
          user={user}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          language={language}
          setLanguage={setLanguage}
        />

        {currentView === "home" && (
          <HomeView 
            darkMode={darkMode} 
            setSelectedProduct={setSelectedProduct}
          />
        )}

        {currentView === "products" && (
          <ProductsSection 
            searchQuery={searchQuery}
            selectedCategory={selectedCategory}
            darkMode={darkMode}
            setSelectedProduct={setSelectedProduct}
          />
        )}

        {currentView === "login" && (
          <LoginView 
            setUser={setUser}
            setCurrentView={setCurrentView}
            darkMode={darkMode}
            showNotif={showNotif}
          />
        )}

        {currentView === "cart" && (
          <CartView 
            cart={cart}
            setCart={setCart}
            user={user}
            setCurrentView={setCurrentView}
            darkMode={darkMode}
            showNotif={showNotif}
          />
        )}

        {currentView === "wishlist" && (
          <WishlistView 
            wishlist={wishlist}
            setSelectedProduct={setSelectedProduct}
            darkMode={darkMode}
          />
        )}

        {currentView === "profile" && (
          <ProfileView 
            user={user}
            setUser={setUser}
            setCurrentView={setCurrentView}
            darkMode={darkMode}
            showNotif={showNotif}
          />
        )}

        {currentView === "wishlist" && (
          <WishlistView 
            wishlist={wishlist}
            setSelectedProduct={setSelectedProduct}
            darkMode={darkMode}
            setCurrentView={setCurrentView}  // ← Ini yang harus ditambahkan!
          />
        )}

        {currentView === "product" && selectedProduct && (
          <ProductDetailView 
            product={selectedProduct}
            addToCart={(product) => {
              const existing = cart.find(item => item.id === product.id);
              if (existing) {
                setCart(cart.map(item => 
                  item.id === product.id ? {...item, quantity: item.quantity + 1} : item
                ));
              } else {
                setCart([...cart, {...product, quantity: 1}]);
              }
              showNotif(`${product.name[language]} berhasil ditambahkan ke keranjang!`);
            }}
            addToWishlist={(product) => {
              if (wishlist.find(item => item.id === product.id)) {
                setWishlist(wishlist.filter(item => item.id !== product.id));
                showNotif("Produk dihapus dari wishlist");
              } else {
                setWishlist([...wishlist, product]);
                showNotif("Produk ditambahkan ke wishlist!");
              }
            }}
            wishlist={wishlist}
            darkMode={darkMode}
            setCurrentView={setCurrentView}
          />
        )}

        {currentView === "admin" && (
          <AdminDashboard darkMode={darkMode} />
        )}

        {currentView === "home" && <Footer darkMode={darkMode} />}

        {selectedProduct && currentView !== "product" && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className={`max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            }`}>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold">{selectedProduct.name[language]}</h2>
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name[language]}
                    className="w-full rounded-xl"
                  />
                  <div>
                    <p className={`text-lg mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {selectedProduct.description[language]}
                    </p>
                    <div className="flex items-center mb-4">
                      <span className="text-2xl font-bold text-blue-600">
                        Rp {selectedProduct.price.toLocaleString()}
                      </span>
                      {selectedProduct.originalPrice > selectedProduct.price && (
                        <span className="text-lg text-gray-500 line-through ml-3">
                          Rp {selectedProduct.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                    <div className="flex gap-4">
                      <button
                        onClick={() => {
                          const existing = cart.find(item => item.id === selectedProduct.id);
                          if (existing) {
                            setCart(cart.map(item => 
                              item.id === selectedProduct.id ? {...item, quantity: item.quantity + 1} : item
                            ));
                          } else {
                            setCart([...cart, {...selectedProduct, quantity: 1}]);
                          }
                          setSelectedProduct(null);
                          showNotif(`${selectedProduct.name[language]} berhasil ditambahkan ke keranjang!`);
                        }}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition-colors"
                      >
                        Tambah ke Keranjang
                      </button>
                      <button
                        onClick={() => {
                          if (wishlist.find(item => item.id === selectedProduct.id)) {
                            setWishlist(wishlist.filter(item => item.id !== selectedProduct.id));
                          } else {
                            setWishlist([...wishlist, selectedProduct]);
                          }
                          setSelectedProduct(null);
                          showNotif(
                            wishlist.find(item => item.id === selectedProduct.id)
                              ? "Produk dihapus dari wishlist"
                              : "Produk ditambahkan ke wishlist!"
                          );
                        }}
                        className={`p-2 rounded-lg border ${
                          wishlist.find(item => item.id === selectedProduct.id)
                            ? 'bg-red-500 text-white border-red-500'
                            : darkMode
                              ? 'border-gray-600 text-white hover:bg-gray-700'
                              : 'border-gray-300 text-gray-800 hover:bg-gray-50'
                        }`}
                      >
                        <svg className="w-5 h-5" fill={wishlist.find(item => item.id === selectedProduct.id) ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <ChatWidget darkMode={darkMode} showChat={showChat} setShowChat={setShowChat} />
      </div>
    </div>
  );
}

export default App;