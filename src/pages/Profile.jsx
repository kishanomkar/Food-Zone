import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [discount, setDiscount] = useState(0);
  const [showTimer, setShowTimer] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [showDownload, setShowDownload] = useState(false);

  useEffect(() => {
    try {
      const user = JSON.parse(localStorage.getItem("currentUser"));
      const cart = Array.isArray(JSON.parse(localStorage.getItem("cart")))
        ? JSON.parse(localStorage.getItem("cart"))
        : [];
      if (user) setUserData(user);
      setCartItems(cart);
      setDiscount(Math.floor(Math.random() * 15) + 5);
    } catch (err) {
      console.error("Error loading localStorage data:", err);
    }
  }, []);

  useEffect(() => {
    if (!showTimer || timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [showTimer, timeLeft]);

  const totalPrice = cartItems.reduce((sum, item) => sum + (item?.price || 0), 0);
  const discountedPrice = totalPrice - (totalPrice * (discount / 100));

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const handleOrder = () => {
    alert("Order placed successfully!");
    const randomMinutes = Math.floor(Math.random() * 31) + 20;
    setTimeLeft(randomMinutes * 60);
    setShowTimer(true);
    setShowDownload(true);
  };

  const handleDownloadReceipt = () => {
    let receipt = `Food King - Order Receipt\n\n`;
    receipt += `Name: ${userData.name}\nEmail: ${userData.email}\n\n`;
    receipt += `Ordered Items:\n`;
    cartItems.forEach((item, idx) => {
      receipt += `${idx + 1}. ${item.name} - ₹${item.price}\n`;
    });
    receipt += `\nTotal Price: ₹${totalPrice}\n`;
    receipt += `Discount: ${discount}%\n`;
    receipt += `Final Price: ₹${discountedPrice.toFixed(2)}\n\n`;
    receipt += `Thank you for ordering with Food King!`;

    const blob = new Blob([receipt], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "FoodKing_Receipt.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  if (!userData) {
    return (
      <div className="text-center text-lg p-10">
        Please log in to view profile.
      </div>
    );
  }

  return (
    <>
      <div className="p-6 max-w-xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">👤 User Profile</h1>

        <div className="bg-white shadow-md p-5 rounded-lg">
          <h2 className="text-xl font-semibold">📌 User Details</h2>
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Email:</strong> {userData.email}</p>
        </div>

        <div className="bg-white shadow-md p-5 rounded-lg mt-5">
          <h2 className="text-xl font-semibold">🛍️ Order Summary</h2>
          {cartItems.length === 0 ? (
            <p>No orders placed yet.</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="border-b py-2">
                <p><strong>{item.name}</strong> - ₹{item.price}</p>
              </div>
            ))
          )}
        </div>

        <div className="bg-white shadow-md p-5 rounded-lg mt-5">
          <h2 className="text-xl font-semibold">💰 Price Breakdown</h2>
          <p><strong>Total Price:</strong> ₹{totalPrice}</p>
          <p><strong>Discount Applied:</strong> {discount}%</p>
          <p className="text-green-600 font-bold text-lg">
            Final Price: ₹{discountedPrice.toFixed(2)}
          </p>
          <button
            onClick={handleOrder}
            className="p-3 rounded-md bg-red-500 hover:bg-red-600 text-white cursor-pointer"
            disabled={showTimer}
          >
            Order Now
          </button>
          {showTimer && (
            <span className="ml-4 text-blue-600 font-semibold">
              Delivery in: {formatTime(timeLeft)}
            </span>
          )}
          {showDownload && (
            <button
              onClick={handleDownloadReceipt}
              className="ml-4 p-3 rounded-md bg-green-500 hover:bg-green-600 text-white cursor-pointer"
            >
              Download Receipt
            </button>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
