import { useState, useEffect } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  const handleRemove = (id) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    // Filter out the item with the given ID
    const updatedCart = cart.filter(item => item.id !== id);

    // Save the updated cart back to localStorage
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart); // Update state dynamically

    alert("Item removed from cart!");
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">🛒 Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-lg">Your cart is empty!</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cartItems.map((item) => (
            <div key={item.id} className="bg-white shadow-md p-4 rounded-lg text-center transform transition hover:scale-105">
              <img src={item.image} alt={item.name} className="w-full h-70 object-cover rounded mb-3" />
              <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
              <p className="text-green-600 font-semibold text-lg">₹{item.price}</p>
              <button 
                className="bg-red-500 text-white px-4 py-2 rounded-lg mt-3 hover:bg-red-600 transition duration-300 cursor-pointer"
                onClick={() => handleRemove(item.id)}
              >
                Remove 🗑️
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
