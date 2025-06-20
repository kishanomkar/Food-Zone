import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import jsPDF from "jspdf";

// Enhanced color scheme with a modern, vibrant, mixed theme
const colorScheme = {
  primary:
    "bg-gradient-to-tr from-indigo-400 via-pink-300 to-yellow-300",
  card:
    "bg-white/80 backdrop-blur-lg shadow-2xl border border-pink-200 ring-2 ring-indigo-100",
  accent: "text-pink-600",
  button:
    "transition-all duration-200 px-5 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-400",
  orderBtn:
    "bg-gradient-to-r from-pink-500 via-indigo-400 to-yellow-400 hover:from-pink-600 hover:to-yellow-500 text-white",
  downloadBtn:
    "bg-gradient-to-r from-green-500 via-teal-400 to-cyan-400 hover:from-green-600 hover:to-cyan-500 text-white",
  disabledBtn: "opacity-60 cursor-not-allowed",
  timer:
    "ml-4 px-4 py-2 rounded-lg bg-indigo-100 text-indigo-700 font-semibold shadow",
  cardHeader:
    "flex items-center gap-2 mb-4 text-2xl font-bold tracking-wide bg-gradient-to-r from-pink-400 via-indigo-300 to-yellow-300 bg-clip-text text-transparent drop-shadow",
  divider:
    "h-1 w-20 bg-gradient-to-r from-pink-400 via-indigo-400 to-yellow-400 rounded-full mb-4 mx-auto",
};

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
  const discountedPrice = totalPrice - totalPrice * (discount / 100);

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
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "pt",
      format: "a4",
    });

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();

    doc.setFillColor(255, 255, 255);
    doc.rect(0, 0, pageWidth, pageHeight, "F");

    doc.setFont("helvetica", "bold");
    doc.setFontSize(28);
    doc.setTextColor(236, 72, 153); // pink
    doc.text("Food Zone", pageWidth / 2, 70, { align: "center" });

    doc.setFontSize(16);
    doc.setTextColor(79, 70, 229); // indigo
    doc.text("Order Receipt", pageWidth / 2, 100, { align: "center" });

    doc.setFontSize(13);
    doc.setTextColor(253, 224, 71); // yellow
    doc.text("Customer Details:", 50, 140);
    doc.setTextColor(33, 33, 33);
    doc.text(`Name: ${userData.name}`, 60, 160);
    doc.text(`Email: ${userData.email}`, 60, 180);

    doc.setFontSize(13);
    doc.setTextColor(16, 185, 129); // teal
    doc.text("Ordered Items:", 50, 210);
    doc.setTextColor(33, 33, 33);
    let y = 230;
    cartItems.forEach((item, idx) => {
      doc.text(`${idx + 1}. ${item.name} - ₹${item.price}`, 60, y);
      y += 20;
    });

    y += 10;
    doc.setFontSize(13);
    doc.setTextColor(59, 130, 246); // blue
    doc.text("Price Breakdown:", 50, y);
    y += 20;
    doc.setTextColor(33, 33, 33);
    doc.text(`Total Price: ₹${totalPrice}`, 60, y);
    y += 18;
    doc.setTextColor(34, 197, 94); // green
    doc.text(`Discount: ${discount}%`, 60, y);
    y += 18;
    doc.setTextColor(236, 72, 153); // pink
    doc.setFont("helvetica", "bold");
    doc.text(`Final Price: ₹${discountedPrice.toFixed(2)}`, 60, y);

    y += 40;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(14);
    doc.setTextColor(79, 70, 229); // indigo
    doc.text("A Special Note from Food Zone:", 50, y);
    y += 25;
    doc.setFontSize(12);
    doc.setTextColor(16, 185, 129); // teal
    const thankYouLetter = [
      "Dear Food Lover,",
      "",
      "Thank you so much for choosing Food Zone for your meal today!",
      "We are delighted to serve you with our delicious and fresh food.",
      "Your order means a lot to us, and we hope it brings joy and flavor to your day.",
      "",
      "If you have any feedback or suggestions, please let us know.",
      "We look forward to serving you again soon!",
      "",
      "With gratitude and tasty wishes,",
      "The Food Zone Team ",
    ];
    thankYouLetter.forEach((line, i) => {
      doc.text(line, 60, y + i * 18);
    });

    doc.setFontSize(10);
    doc.setTextColor(236, 72, 153); // pink
    doc.text(
      "Receipt generated by Food Zone | foodzone.example.com",
      pageWidth / 2,
      pageHeight - 30,
      { align: "center" }
    );

    doc.save("FoodZone_Receipt.pdf");
  };

  if (!userData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-indigo-100 via-pink-100 to-yellow-100">
        <div className="text-center text-lg p-10 rounded-2xl shadow-2xl bg-white/80 ring-2 ring-pink-200">
          Please log in to view profile.
        </div>
      </div>
    );
  }

  return (
    <>
      <div className={`${colorScheme.primary} min-h-screen py-10`}>
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col items-center mb-10">
            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-pink-400 via-indigo-400 to-yellow-300 flex items-center justify-center shadow-xl mb-4 border-4 border-white">
              <span
                role="img"
                aria-label="user"
                className="text-5xl"
              >
                👤
              </span>
            </div>
            <h1 className="text-4xl font-extrabold text-center mb-2 bg-gradient-to-r from-pink-500 via-indigo-400 to-yellow-400 bg-clip-text text-transparent drop-shadow-lg tracking-wide">
              User Profile
            </h1>
            <div className={colorScheme.divider} />
          </div>

          <div className={`${colorScheme.card} p-8 rounded-3xl mb-8 shadow-xl`}>
            <div className={colorScheme.cardHeader}>
              <span role="img" aria-label="pin">📌</span>
              <span>User Details</span>
            </div>
            <div className="pl-2 text-lg space-y-2">
              <p>
                <span className="font-semibold text-indigo-600">Name:</span>{" "}
                <span className="text-gray-800">{userData.name}</span>
              </p>
              <p>
                <span className="font-semibold text-pink-600">Email:</span>{" "}
                <span className="text-gray-800">{userData.email}</span>
              </p>
            </div>
          </div>

          <div className={`${colorScheme.card} p-8 rounded-3xl mb-8 shadow-xl`}>
            <div className={colorScheme.cardHeader}>
              <span role="img" aria-label="order">🛍️</span>
              <span>Order Summary</span>
            </div>
            {cartItems.length === 0 ? (
              <p className="text-gray-500 italic text-center">
                No orders placed yet.
              </p>
            ) : (
              <ul>
                {cartItems.map((item) => (
                  <li
                    key={item.id}
                    className="flex justify-between items-center border-b last:border-b-0 py-3 group transition-all"
                  >
                    <span className="font-medium group-hover:text-pink-600 transition">
                      {item.name}
                    </span>
                    <span className="font-semibold text-indigo-500 group-hover:text-pink-700 transition">
                      ₹{item.price}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className={`${colorScheme.card} p-8 rounded-3xl mb-8 shadow-xl`}>
            <div className={colorScheme.cardHeader}>
              <span role="img" aria-label="money">💰</span>
              <span>Price Breakdown</span>
            </div>
            <div className="pl-2 text-lg space-y-2">
              <p>
                <span className="font-semibold text-indigo-600">Total Price:</span>{" "}
                <span className="text-gray-700">₹{totalPrice}</span>
              </p>
              <p>
                <span className="font-semibold text-green-600">Discount Applied:</span>{" "}
                <span className="text-green-600 font-semibold">{discount}%</span>
              </p>
              <p className="font-bold text-2xl text-pink-700">
                Final Price: ₹{discountedPrice.toFixed(2)}
              </p>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <button
                onClick={handleOrder}
                className={`${colorScheme.button} ${colorScheme.orderBtn} ${showTimer ? colorScheme.disabledBtn : ""}`}
                disabled={showTimer}
              >
                <span role="img" aria-label="order">🛒</span> Order Now
              </button>
              {showTimer && (
                <span className={colorScheme.timer}>
                  <span role="img" aria-label="timer">⏰</span> Delivery in: {formatTime(timeLeft)}
                </span>
              )}
              {showDownload && (
                <button
                  onClick={handleDownloadReceipt}
                  className={`${colorScheme.button} ${colorScheme.downloadBtn}`}
                >
                  <span role="img" aria-label="download">⬇️</span> Download Receipt
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
