import { useEffect, useState } from "react";
import FoodItemCard from "../components/FoodItemCard";
import Loader from "../components/Loader";

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
]; // You can add more categories

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
        price: Math.floor(Math.random() * 200) + 100, // Assign random price
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
      const mergedItems = allItems.flat(); // Merge all categories into a single array

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

  if (loading) return <div className="text-center p-10 text-lg"><Loader/></div>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Restaurant Specials</h1>
      {categories.map((category) => (
        <div key={category}>
          <h2 className="text-2xl font-bold text-left mt-6">{category} Dishes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {foodItems.filter(item => item.category === category).map(item => (
              <FoodItemCard key={item.id} item={item} onAddToCart={handleAddToCart} />
              
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
