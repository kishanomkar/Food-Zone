import { useState, useEffect } from "react";

const colorSchemes = [
  "from-pink-400 via-yellow-200 to-yellow-300",
  "from-green-400 via-blue-200 to-blue-300",
  "from-purple-400 via-indigo-200 to-indigo-300",
  "from-orange-400 via-red-200 to-red-300",
  "from-cyan-400 via-teal-200 to-teal-300",
  "from-fuchsia-400 via-rose-200 to-rose-300",
  "from-emerald-400 via-lime-200 to-lime-300",
];

function groupCartItems(items) {
  const map = {};
  items.forEach(item => {
    if (map[item.id]) {
      map[item.id].quantity += 1;
    } else {
      map[item.id] = { ...item, quantity: 1 };
    }
  });
  return Object.values(map);
}

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const rawCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(groupCartItems(rawCart));
  }, []);

  const handleRemove = (id) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const idx = cart.findIndex(item => item.id === id);
    if (idx !== -1) {
      cart.splice(idx, 1);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartItems(groupCartItems(cart));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-blue-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 via-orange-400 to-yellow-500 drop-shadow-2xl tracking-tight">
          🛒 Your Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center mt-24">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
              alt="Empty Cart"
              className="w-36 h-36 opacity-80 mb-6 animate-bounce"
            />
            <p className="text-center text-2xl font-bold text-gray-500">
              Your cart is empty!
            </p>
          </div>
        ) : (
          <>
            <div className="flex justify-end mb-8">
              <div className="bg-gradient-to-r from-green-400 via-lime-200 to-yellow-300 px-8 py-4 rounded-2xl shadow-lg border-2 border-white/70 flex items-center gap-4">
                <span className="text-xl font-bold text-gray-700">Total:</span>
                <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-500">
                  ₹{total}
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {cartItems.map((item, idx) => (
                <div
                  key={item.id}
                  className={`
                    bg-gradient-to-br ${colorSchemes[idx % colorSchemes.length]}
                    shadow-2xl p-6 rounded-3xl text-center
                    transform transition-all duration-300 hover:scale-105 hover:shadow-3xl
                    border-4 border-white/70 hover:border-fuchsia-400
                    relative group
                    ring-2 ring-offset-2 ring-pink-200/40
                  `}
                >
                  <div className="absolute top-4 right-4 bg-white/90 rounded-full px-4 py-1 text-sm font-bold text-gray-700 shadow group-hover:bg-yellow-100 transition-all duration-200 border border-yellow-300">
                    ₹{item.price}
                    {item.quantity > 1 && (
                      <span className="ml-2 text-fuchsia-600 font-extrabold">x{item.quantity}</span>
                    )}
                  </div>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-56 object-cover rounded-2xl mb-5 border-4 border-white shadow-lg group-hover:shadow-2xl transition-all duration-200"
                  />
                  <h3 className="text-2xl font-extrabold text-white drop-shadow mb-2 tracking-wide">
                    {item.name}
                  </h3>
                  <div className="flex justify-center gap-2 mb-2">
                    <span className="inline-block bg-white/80 text-pink-600 font-semibold px-3 py-1 rounded-full text-xs shadow">
                      {item.category || "Food"}
                    </span>
                    <span className="inline-block bg-white/80 text-yellow-600 font-semibold px-3 py-1 rounded-full text-xs shadow">
                      {item.quantity} pcs
                    </span>
                  </div>
                  <button
                    className="
                      bg-gradient-to-r from-red-500 via-pink-400 to-fuchsia-500
                      text-white px-7 py-2 rounded-full mt-4 font-bold
                      shadow-xl hover:from-pink-500 hover:to-red-500
                      hover:scale-110 transition-all duration-200
                      focus:outline-none focus:ring-2 focus:ring-pink-300
                      border-2 border-white/60 hover:border-fuchsia-400
                    "
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove 🗑️
                  </button>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      <footer className="mt-16 text-center text-gray-500 font-semibold text-sm">
        <span className="bg-gradient-to-r from-fuchsia-400 via-orange-300 to-yellow-300 bg-clip-text text-transparent">
          Food King &copy; {new Date().getFullYear()} | Enjoy your meal!
        </span>
      </footer>
    </div>
  );
};

export default Cart;
