import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const FoodItemCard = ({ item }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(cardRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
  }, []);

  const handleAddToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    
    gsap.to(cardRef.current, { scale: 1.05, duration: 0.2, ease: "power2.out", yoyo: true, repeat: 1 });
    
    alert(`${item.name} added to cart!`);
  };

  return (
    <div 
      ref={cardRef} 
      className="bg-white shadow-lg rounded-xl p-4 text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl"
    >
      <img src={item.image} alt={item.name} className="w-full h-70 object-cover rounded-lg mb-4" />
      <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
      <p className="text-gray-600 mt-2">{item.description}</p>
      <p className="text-green-600 font-bold mt-3 text-lg">Rs.{item.price}</p>
      <button 
        onClick={handleAddToCart} 
        className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition duration-300 cursor-pointer"
      >
        Add to Cart 🛒
      </button>
    </div>
  );
};

export default FoodItemCard;
