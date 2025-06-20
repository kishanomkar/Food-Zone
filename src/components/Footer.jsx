import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Utensils,
  MapPin,
  Phone,
  Mail,
  Copyright,
} from "lucide-react";

const Footer = () => {
  return (
    <section className="w-full bg-gradient-to-br from-yellow-50 via-pink-50 to-orange-100 dark:from-gray-900 dark:via-pink-950 dark:to-yellow-900 py-20 transition-colors duration-500">
      <footer className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
        {/* Brand Info */}
        <div>
          <div className="flex items-center gap-3 text-4xl font-extrabold">
            <Utensils className="bg-gradient-to-tr from-yellow-400 via-pink-400 to-orange-500 h-16 w-16 text-white rounded-full p-4 shadow-2xl border-4 border-white dark:border-gray-900" />
            <h1 className="text-pink-700 dark:text-yellow-200 drop-shadow-lg">Food</h1>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-pink-500 to-orange-500 animate-gradient-x">
              Zone
            </span>
          </div>
          <p className="text-orange-700 dark:text-yellow-200 mt-8 text-lg font-medium">
            Discover delicious food, fast delivery, and a world of flavors at your fingertips.
          </p>
          <p className="text-pink-600 dark:text-pink-200 mt-2 text-base italic">
            Serving happiness, one meal at a time.
          </p>
          <div className="flex gap-5 mt-10">
            <a
              href="#"
              className="rounded-full p-3 bg-gradient-to-tr from-yellow-100 via-pink-100 to-orange-100 dark:from-yellow-700 dark:via-pink-700 dark:to-orange-700 shadow-xl hover:scale-110 transition-all duration-300 hover:bg-pink-500 group"
              aria-label="Facebook"
            >
              <Facebook className="w-7 h-7 text-orange-600 dark:text-yellow-100 group-hover:text-white" />
            </a>
            <a
              href="#"
              className="rounded-full p-3 bg-gradient-to-tr from-pink-100 via-yellow-100 to-orange-100 dark:from-pink-700 dark:via-yellow-700 dark:to-orange-700 shadow-xl hover:scale-110 transition-all duration-300 hover:bg-yellow-400 group"
              aria-label="Twitter"
            >
              <Twitter className="w-7 h-7 text-pink-500 dark:text-yellow-100 group-hover:text-white" />
            </a>
            <a
              href="#"
              className="rounded-full p-3 bg-gradient-to-tr from-orange-100 via-yellow-100 to-pink-100 dark:from-orange-700 dark:via-yellow-700 dark:to-pink-700 shadow-xl hover:scale-110 transition-all duration-300 hover:bg-red-500 group"
              aria-label="Linkedin"
            >
              <Linkedin className="w-7 h-7 text-blue-700 dark:text-yellow-100 group-hover:text-white" />
            </a>
            <a
              href="#"
              className="rounded-full p-3 bg-gradient-to-tr from-yellow-100 via-pink-100 to-orange-100 dark:from-yellow-700 dark:via-pink-700 dark:to-orange-700 shadow-xl hover:scale-110 transition-all duration-300 hover:bg-gradient-to-tr hover:from-pink-500 hover:via-yellow-400 hover:to-orange-500 group"
              aria-label="Instagram"
            >
              <Instagram className="w-7 h-7 text-pink-400 dark:text-yellow-100 group-hover:text-white" />
            </a>
          </div>
        </div>

        {/* Explore Section */}
        <div>
          <h1 className="text-2xl font-bold mb-7 text-pink-600 dark:text-yellow-400 tracking-wide underline decoration-wavy decoration-2 decoration-orange-400">
            Explore
          </h1>
          <ul className="space-y-5">
            {["Home", "Services", "Foods", "Contact", "About"].map((item) => (
              <li key={item}>
                <span className="text-orange-700 dark:text-yellow-200 hover:text-pink-500 dark:hover:text-yellow-300 transition-colors duration-200 font-semibold cursor-pointer px-2 py-1 rounded-lg hover:bg-orange-100 dark:hover:bg-pink-900">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h1 className="text-2xl font-bold mb-7 text-pink-600 dark:text-yellow-400 tracking-wide underline decoration-wavy decoration-2 decoration-pink-400">
            Help
          </h1>
          <ul className="space-y-5">
            {["Account", "Service Center", "Privacy Policy", "Terms & Conditions", "About"].map((item) => (
              <li key={item}>
                <span className="text-orange-700 dark:text-yellow-200 hover:text-pink-500 dark:hover:text-yellow-300 transition-colors duration-200 font-semibold cursor-pointer px-2 py-1 rounded-lg hover:bg-pink-100 dark:hover:bg-yellow-900">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h1 className="text-2xl font-bold mb-7 text-pink-600 dark:text-yellow-400 tracking-wide underline decoration-wavy decoration-2 decoration-yellow-400">
            Contact
          </h1>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="bg-gradient-to-tr from-yellow-100 via-pink-100 to-orange-100 dark:from-yellow-700 dark:via-pink-700 dark:to-orange-700 p-3 rounded-full shadow-lg">
                <MapPin className="text-pink-500 dark:text-yellow-300 w-6 h-6" />
              </span>
              <span className="text-orange-700 dark:text-yellow-200 text-lg font-medium">Delhi, New Delhi</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="bg-gradient-to-tr from-yellow-100 via-pink-100 to-orange-100 dark:from-yellow-700 dark:via-pink-700 dark:to-orange-700 p-3 rounded-full shadow-lg">
                <Phone className="text-pink-500 dark:text-yellow-300 w-6 h-6" />
              </span>
              <span className="text-orange-700 dark:text-yellow-200 text-lg font-medium">+91 96757 XXXXX</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="bg-gradient-to-tr from-yellow-100 via-pink-100 to-orange-100 dark:from-yellow-700 dark:via-pink-700 dark:to-orange-700 p-3 rounded-full shadow-lg">
                <Mail className="text-pink-500 dark:text-yellow-300 w-6 h-6" />
              </span>
              <span className="text-orange-700 dark:text-yellow-200 text-lg font-medium">foodzone1001@gmail.com</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Footer Bottom Bar */}
      <div className="w-full bg-gradient-to-r from-yellow-400 via-pink-500 to-orange-500 dark:from-yellow-700 dark:via-pink-700 dark:to-orange-700 text-white text-center py-6 mt-16 text-xl font-bold shadow-inner flex items-center justify-center gap-2">
        <Copyright className="inline-block w-6 h-6 align-middle" />
        <span className="tracking-wide drop-shadow-lg">FoodZone | All Rights Reserved.</span>
      </div>
    </section>
  );
};

export default Footer;
