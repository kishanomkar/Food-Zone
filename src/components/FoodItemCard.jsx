import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const FoodItemCard = ({ item }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    );
  }, []);

  const handleAddToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));

    gsap.to(cardRef.current, {
      scale: 1.07,
      boxShadow: "0 8px 32px 0 rgba(255, 99, 132, 0.25)",
      duration: 0.2,
      yoyo: true,
      repeat: 1,
      ease: "power2.out",
      onComplete: () => {
        gsap.to(cardRef.current, { boxShadow: "0 4px 14px 0 rgba(255, 205, 86, 0.10)" });
      }
    });

    alert(`${item.name} added to cart!`);
  };

  return (
    <div
      ref={cardRef}
      className="relative bg-gradient-to-br from-yellow-100 via-pink-100 to-orange-100 shadow-xl rounded-3xl p-5 text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl border border-pink-200 group"
      style={{ minHeight: "480px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}
    >
      <div className="absolute top-4 right-4 bg-yellow-200 text-red-600 px-3 py-1 rounded-full text-xs font-bold shadow group-hover:bg-red-500 group-hover:text-white transition">
        NEW
      </div>
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-56 object-cover rounded-2xl mb-5 shadow-md border-4 border-white group-hover:border-pink-200 transition"
        style={{ objectPosition: "center" }}
      />
      <h3 className="text-2xl font-extrabold text-orange-700 group-hover:text-pink-600 transition">
        {item.name}
      </h3>
      <p className="text-red-400 mt-2 min-h-[48px]">{item.description}</p>
      <p className="text-pink-600 font-bold mt-4 text-xl tracking-wide drop-shadow">
        ₹{item.price}
      </p>
      <button
        onClick={handleAddToCart}
        className="mt-6 bg-gradient-to-r from-yellow-400 via-pink-400 to-orange-400 text-white px-7 py-2.5 rounded-xl font-semibold shadow-lg hover:from-pink-500 hover:to-red-500 hover:scale-105 hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-300"
      >
        Add to Cart <span className="ml-2">🛒</span>
      </button>
    </div>
  );
};

export default FoodItemCard;
