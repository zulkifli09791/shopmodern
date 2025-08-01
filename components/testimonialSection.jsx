// components/TestimonialsSection.jsx
export default function TestimonialsSection({ darkMode }) {
  const testimonials = [
    {
      id: 1,
      name: "Andi Pratama",
      role: "Pelanggan Setia",
      comment: "Pengiriman cepat dan kualitas produk sangat baik. Akan belanja lagi!",
      rating: 5,
      avatar: "https://placehold.co/60x60/3b82f6/ffffff?text=A",
    },
    {
      id: 2,
      name: "Siti Rahayu",
      role: "Ibu Rumah Tangga",
      comment: "Harga terjangkau dengan kualitas premium. Pelayanan pelanggan sangat ramah.",
      rating: 5,
      avatar: "https://placehold.co/60x60/10b981/ffffff?text=S",
    },
    {
      id: 3,
      name: "Budi Santoso",
      role: "Profesional Muda",
      comment: "Website mudah digunakan dan fitur pencariannya sangat akurat.",
      rating: 4,
      avatar: "https://placehold.co/60x60/f59e0b/ffffff?text=B",
    },
  ];

  return (
    <div className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Apa Kata Pelanggan Kami</h2>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Baca pengalaman pelanggan kami yang telah menggunakan produk kami
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`p-6 rounded-xl transition-all hover:shadow-lg ${
                darkMode ? 'bg-gray-900' : 'bg-white'
              }`}
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} italic`}>
                "{testimonial.comment}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}