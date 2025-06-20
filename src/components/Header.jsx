import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home", auth: true },
  { to: "/cart", label: "Cart", auth: true },
  { to: "/profile", label: "Profile", auth: true },
  { to: "/login", label: "Login", auth: false },
  { to: "/register", label: "Register", auth: false },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const location = useLocation();

  return (
    <nav className="flex flex-wrap items-center justify-between p-4 bg-gradient-to-r from-gray-900 via-indigo-800 to-gray-700 text-white shadow-2xl transition-all duration-300 border-b-4 border-yellow-300">
      <div className="flex items-center gap-3">
        <span className="text-4xl animate-bounce drop-shadow-lg">🍽️</span>
        <span className="text-3xl font-extrabold tracking-wider bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
          FoodZone
        </span>
      </div>

      {/* Hamburger menu for small screens */}
      <button
        className="md:hidden text-white text-4xl focus:outline-none transition-transform hover:scale-110"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? "✖" : "☰"}
      </button>

      {/* Menu items */}
      <div
        className={`w-full md:w-auto mt-4 md:mt-0 md:flex items-center gap-8 text-lg font-semibold transition-all duration-300 ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        {navLinks
          .filter(link => link.auth === !!currentUser)
          .map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`block md:inline px-5 py-2 rounded-xl transition-all duration-200 shadow-md
                ${
                  location.pathname === link.to
                    ? "bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-700 text-white font-bold shadow-xl scale-105"
                    : "hover:bg-gradient-to-r hover:from-gray-800 hover:via-indigo-700 hover:to-gray-600 hover:text-yellow-100 hover:scale-105"
                }
                bg-gray-800/80
              `}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

        {currentUser && (
          <button
            onClick={() => {
              localStorage.removeItem("currentUser");
              window.location.reload();
            }}
            className="block md:inline px-5 py-2 rounded-xl bg-gradient-to-r from-red-700 via-pink-700 to-yellow-600 shadow-lg hover:from-yellow-600 hover:via-pink-700 hover:to-red-700 hover:scale-110 transition-all duration-200 font-bold text-white border-2 border-white"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Header;
