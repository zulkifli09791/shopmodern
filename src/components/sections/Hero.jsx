// components/Hero.jsx
export default function Hero() {
  return (
    <div className="relative h-96 md:h-[500px] overflow-hidden mt-16">
      <div 
        className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90 z-10"
        style={{
          backgroundImage: 'url("https://placehold.co/1920x600/1e40af/ffffff?text=Modern+Shopping+Experience")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className="relative z-20 flex items-center justify-center h-full text-center text-white px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
            Temukan Produk Impian Anda
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Kualitas terbaik dengan harga terjangkau. Pengiriman cepat dan aman.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold text-lg transition-all transform hover:scale-105">
              Belanja Sekarang
            </button>
            <button className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-full font-semibold text-lg transition-all">
              Lihat Produk
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-bounce"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-pink-400 rounded-full opacity-20 animate-bounce" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-20 w-12 h-12 bg-green-400 rounded-full opacity-20 animate-bounce" style={{animationDelay: '2s'}}></div>
    </div>
  );
}