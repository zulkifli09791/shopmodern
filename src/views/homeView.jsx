import Hero from "../components/sections/Hero";
import CategorySection from "../components/sections/categorySection";
import ProductsSection from "../components/sections/productSection";
import TestimonialsSection from "../components/sections/TestimonialSection";
import { useState } from "react";

export default function HomeView({ darkMode, setSelectedProduct }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery] = useState("");

  return (
    <>
      <Hero />
      <CategorySection 
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        darkMode={darkMode}
      />
      <ProductsSection 
        searchQuery={searchQuery}
        selectedCategory={selectedCategory}
        darkMode={darkMode}
        setSelectedProduct={setSelectedProduct}
      />
      <TestimonialsSection darkMode={darkMode} />
    </>
  );
}