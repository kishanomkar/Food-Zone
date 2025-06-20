import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  return (
    <nav className="flex flex-wrap items-center justify-between p-4 bg-gradient-to-r from-green-500 to-blue-600 text-white shadow-lg">
      <div className="text-2xl font-bold">🍽️ FoodZone</div>

      {/* Hamburger menu for small screens */}
      <button 
        className="md:hidden text-white text-xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* Menu items */}
      <div className={`md:flex space-x-6 text-lg ${menuOpen ? "block" : "hidden"} w-full md:w-auto mt-4 md:mt-0`}>
        {currentUser ? (
          <>
            <Link to="/" className="block md:inline">Home</Link>
            <Link to="/cart" className="block md:inline">Cart</Link>
            <Link to="/profile" className="block md:inline">Profile</Link>
            <button
              onClick={() => {
                localStorage.removeItem("currentUser");
                window.location.reload();
              }}
              className="bg-red-500 px-3 py-1 rounded hover:bg-red-600 block md:inline"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="block md:inline">Login</Link>
            <Link to="/register" className="block md:inline">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
