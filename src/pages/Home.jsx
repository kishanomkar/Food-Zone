import { useEffect, useState } from "react";
import FoodItemCard from "../components/FoodItemCard";
import Loader from "../components/Loader";

const colorMap = {
  Vegetarian: "from-green-400 via-emerald-500 to-green-700",
  Dessert: "from-pink-400 via-fuchsia-500 to-pink-700",
  Seafood: "from-blue-400 via-cyan-400 to-blue-700",
  Vegan: "from-lime-400 via-green-300 to-lime-600",
  Pasta: "from-yellow-400 via-amber-300 to-yellow-600",
  Breakfast: "from-orange-400 via-amber-500 to-orange-700",
  Miscellaneous: "from-purple-400 via-indigo-400 to-purple-700",
  Starter: "from-red-400 via-rose-400 to-red-700",
};

const accentMap = {
  Vegetarian: "bg-emerald-100 border-emerald-300",
  Dessert: "bg-pink-100 border-pink-300",
  Seafood: "bg-blue-100 border-blue-300",
  Vegan: "bg-lime-100 border-lime-300",
  Pasta: "bg-yellow-100 border-yellow-300",
  Breakfast: "bg-orange-100 border-orange-300",
  Miscellaneous: "bg-purple-100 border-purple-300",
  Starter: "bg-red-100 border-red-300",
};

const Home = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const categories = [
    "Vegetarian",
    "Dessert",
    "Seafood",
    "Vegan",
    "Pasta",
    "Breakfast",
    "Miscellaneous",
    "Starter"
  ];

  const fetchCategoryItems = async (category) => {
    try {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
      const data = await res.json();
      return data.meals.map(meal => ({
        id: meal.idMeal,
        name: meal.strMeal,
        image: meal.strMealThumb,
        category,
        description: `Delicious ${category} dish`,
        price: Math.floor(Math.random() * 200) + 100,
      }));
    } catch (error) {
      console.error(`Error fetching ${category} items:`, error);
      return [];
    }
  };

  const fetchFoodItems = async () => {
    try {
      const allItemsPromises = categories.map(category => fetchCategoryItems(category));
      const allItems = await Promise.all(allItemsPromises);
      const mergedItems = allItems.flat();
      setFoodItems(mergedItems);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching food items:", error);
    }
  };

  useEffect(() => {
    fetchFoodItems();
  }, []);

  const handleAddToCart = (item) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${item.name} added to cart`);
  };

  if (loading)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-yellow-50 via-pink-50 to-blue-100">
        <Loader />
        <span className="mt-4 text-lg font-semibold text-gray-600 animate-pulse">Loading deliciousness...</span>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-pink-50 to-blue-100 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-10">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-center mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 drop-shadow-lg animate-fade-in">
            Food Zone Specials
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 text-center max-w-2xl bg-white/60 rounded-xl px-4 py-2 shadow mt-2">
            Explore a vibrant menu of handpicked dishes from around the world. Taste the colors!
          </p>
        </div>
        {categories.map((category) => (
          <div key={category} className="mb-14 animate-fade-in-up">
            <div className="flex items-center gap-3 mb-5">
              <span
                className={`inline-block w-2 h-10 rounded bg-gradient-to-b ${colorMap[category]}`}
              ></span>
              <h2
                className={`text-3xl font-bold bg-gradient-to-r ${colorMap[category]} text-transparent bg-clip-text drop-shadow`}
              >
                {category} Dishes
              </h2>
              <span className={`ml-2 px-3 py-1 text-xs rounded-full font-semibold shadow border ${accentMap[category]} text-gray-700`}>
                {foodItems.filter(item => item.category === category).length} items
              </span>
              <div className="flex-1 border-t border-dashed border-gray-300 ml-4"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {foodItems.filter(item => item.category === category).map(item => (
                <div
                  key={item.id}
                  className={`transition-transform duration-200 hover:scale-105 hover:shadow-2xl rounded-2xl border ${accentMap[category]} bg-white/80 shadow-lg backdrop-blur-sm`}
                  style={{
                    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.10)",
                  }}
                >
                  <FoodItemCard item={item} onAddToCart={handleAddToCart} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <footer className="mt-16 text-center text-gray-500 text-sm">
        <span className="inline-block px-3 py-1 rounded bg-gradient-to-r from-pink-100 via-yellow-100 to-blue-100 shadow">
          &copy; {new Date().getFullYear()} Food King. Taste the Rainbow!
        </span>
      </footer>
    </div>
  );
};

export default Home;
