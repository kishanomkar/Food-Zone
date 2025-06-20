import { Utensils, Rocket, Sun } from 'lucide-react';
import { MoveRight } from 'lucide-react';
import { CircleCheckBigIcon, MoveUpRight } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import { Copyright, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Learn = () => {
  window.open('https://en.wikipedia.org/wiki/Foodhub', '_blank');
};

const FrontWrapper = (props) => {
    const navigate = useNavigate();

    const handleAuthRedirect = () => {
        navigate('/signin');
    };

    return <Front {...props} handleAuthRedirect={handleAuthRedirect} />;
};

const handleAuthRedirect2 = () => {
  alert("Subscribed to Newsletter!")
}

const darkmode = () => {
  const isDark = document.body.classList.toggle('dark-mode');
  const headings = document.querySelectorAll('h1, h2, h3, h4, h5');
  headings.forEach((heading) => {
    heading.style.color = isDark ? 'white' : '';
  });
  const icons = document.querySelectorAll('[data-icon="utensils"], [data-icon="rocket"], [data-icon="sun"]');
  icons.forEach((icon) => {
    icon.style.color = isDark ? 'white' : '';
  });
  document.body.style.backgroundColor = isDark ? 'black' : '';
  const image = document.getElementById('theme-image');
  if (image) {
    image.src = isDark ? './fastfood3.png' : './fastfood4.png';
  }
};

const Front = () => {
  return (
    <div>
      <main className="px-4 md:px-10">
        {/* Navbar */}
        <nav className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-12 py-6">
          {/* Logo */}
          <div className="flex items-center gap-2 text-xl font-extrabold tracking-tighter">
            <Utensils className="bg-orange-600 h-10 w-10 text-white rounded-full p-1" data-icon="utensils" />
            <h1>Food</h1>
            <span className="text-orange-500">Hub</span>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-5 text-[16px]">
            {['Home', 'Services', 'Food', 'Contact', 'About'].map((item) => (
              <h2 key={item} className="hover:text-orange-600 font-medium transition cursor-pointer">
                {item}
              </h2>
            ))}
          </div>

          {/* Right Icons & Buttons */}
          <div className="flex gap-4 items-center">
            <Sun className="text-black cursor-pointer" onClick={darkmode} data-icon="sun" />
            <button
              className="bg-white border-2 border-gray-500 text-black rounded-full px-4 py-1 hover:text-white hover:bg-orange-600 transition hover:border-0"
              onClick={handleAuthRedirect}
            >
              SignIn
            </button>
            <button
              className="bg-white border-2 border-gray-500 text-black rounded-full px-4 py-1 hover:text-white hover:bg-orange-600 transition hover:border-0"
              onClick={handleAuthRedirect}
            >
              SignUp
            </button>
          </div>
        </nav>

        {/* Main Section */}
        <section className="flex flex-col lg:flex-row justify-between items-center mt-16 gap-10">
          {/* Left Text Content */}
          <div className="max-w-xl">
            <h3 className="text-gray-500 text-sm font-semibold mb-4">---FRESH & DELICIOUS</h3>
            <div className="text-5xl font-bold leading-tight mb-6">
              <h2 className="mb-2">Delicious Meals</h2>
              <h2>
                <span className="text-orange-600">Delivered</span> to Your Door
              </h2>
            </div>
            <div className="text-gray-700 text-base mb-10">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, blanditiis.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
            <div className="flex gap-5">
              <button
                className="bg-white border-2 border-gray-500 text-black rounded-full px-6 py-2 hover:text-white hover:bg-orange-600 transition hover:border-0"
                onClick={handleAuthRedirect}
              >
                Order Now
              </button>
              <button
                className="bg-white border-2 border-gray-500 text-black rounded-full px-6 py-2 hover:text-white hover:bg-orange-600 transition hover:border-0"
                onClick={Learn}
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img id="theme-image" src="./fastfood4.png" alt="Fast Food" className="w-[400px] h-auto mt-5 @apply animate-grow" />
            <div className="flex bg-orange-600 rounded-md p-3 pl-4 pr-6 gap-3 absolute -bottom-12 left-28 shadow-xl">
              <div className="flex items-center justify-center w-12 h-12 bg-amber-50 rounded-full">
                <Rocket className="h-8 w-8 text-orange-500" data-icon="rocket" />
              </div>
              <div className="text-white text-base">
                <h5>Delivery</h5>
                <h5>20 min</h5>
              </div>
            </div>
          </div>
        </section>
      </main>

      <section className='mt-10 px-4 md:px-10'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-6'>
          <div>
            <h1 className='text-3xl md:text-5xl mb-3 text-center md:text-left'>
              Our <span className='text-orange-600'>Popular</span> Items
            </h1>
            <h3 className='text-center md:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa?</h3>
          </div>
          <div
            className='flex gap-2 bg-white border-2 border-gray-500 text-black rounded-full px-4 py-2 hover:text-white hover:bg-orange-600 transition cursor-pointer'
            onClick={handleAuthRedirect}
          >
            <h6>View All</h6>
            <div className='flex items-center justify-center w-8 h-8 border-2 border-black rounded-full text-white bg-orange-600 hover:text-black hover:bg-white'>
              <MoveRight className='h-6 w-6' />
            </div>
          </div>
        </div>

        <div className='mt-10'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <div
              className="w-full h-[210px] bg-[url('/pizza.png')] bg-cover bg-center rounded-xl p-4 flex flex-col justify-end"
            >
              <div className='text-white'>
                <h1 className='text-lg'>Food Cheese Pizza</h1>
                <h2>Free Delivery for first order</h2>
              </div>
              <button
                className='mt-2 bg-white border border-gray-500 text-black rounded-full px-6 py-2 hover:text-white hover:bg-orange-600 transition cursor-pointer'
                onClick={handleAuthRedirect}
              >
                Order Now
              </button>
            </div>

            <div
              className="w-full h-[210px] bg-[url('https://media.istockphoto.com/photos/tasty-pepperoni-pizza-and-cooking-ingredients-tomatoes-spices-basil-picture-id979167764?b=1&k=20&m=979167764&s=170667a&w=0&h=035tP2oRjMEZAos2JbrsbmXjCvVZGF2FevSHdYrNzsA=')] bg-cover bg-center rounded-xl p-4 flex flex-col justify-end"
            >
              <div className='text-white'>
                <h1 className='text-lg'>Margherita Pizza</h1>
                <h2>Flat 10% Discount on Sunday</h2>
              </div>
              <button
                className='mt-2 bg-white border border-gray-500 text-black rounded-full px-6 py-2 hover:text-white hover:bg-orange-600 transition cursor-pointer'
                onClick={handleAuthRedirect}
              >
                Order Now
              </button>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-5'>
            <div
              className="w-full h-[210px] bg-[url('https://foodiescollective.com.au/cdn/shop/articles/8_hot_dog_toppings.jpg?v=1667524884')] bg-cover bg-center rounded-xl p-4 flex flex-col justify-end"
            >
              <div className='text-white'>
                <h1 className='text-lg'>Hot Dog</h1>
                <h2>Get 20% off on your order</h2>
              </div>
              <button
                className='mt-2 bg-white border border-gray-500 text-black rounded-full px-6 py-2 hover:text-white hover:bg-orange-600 transition cursor-pointer'
                onClick={handleAuthRedirect}
              >
                Order Now
              </button>
            </div>

            <div
              className="w-full h-[210px] bg-[url('https://img.freepik.com/premium-photo/burger-top-view-flat-lay-background-copyspace_198067-93387.jpg')] bg-cover bg-center rounded-xl p-4 flex flex-col justify-end"
            >
              <div className='text-white'>
                <h1 className='text-lg'>Burger King</h1>
                <h2>Free Delivery for first order</h2>
              </div>
              <button
                className='mt-2 bg-white border border-gray-500 text-black rounded-full px-6 py-2 hover:text-white hover:bg-orange-600 transition cursor-pointer'
                onClick={handleAuthRedirect}
              >
                Order Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className='flex flex-col md:flex-row items-center mt-10 px-4 md:px-10'>
        <div className='md:w-1/2 flex justify-center'>
          <img src="./paneertikka.png" alt="Paneer Tikka" className='h-80 w-96 md:h-96 md:w-[500px] rounded-xl object-cover' />
        </div>

        <div className='md:w-1/2 mt-8 md:mt-0 md:ml-10 text-center md:text-left'>
          <h3 className='text-gray-500 text-lg font-semibold mb-4'>--- ABOUT US</h3>
          <div className='text-3xl md:text-5xl font-bold'>
            <h2 className='mb-2'>Inspired By Taste,</h2>
            <h2>Built On <span className='text-orange-600'>Quality</span></h2>
          </div>

          <div className='text-gray-700 mt-6 mb-8'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>

          <div className='space-y-3'>
            <div className='flex items-center gap-4'>
              <CircleCheckBigIcon className="!text-black dark:!text-white w-6 h-6" />
              <h2>Fresh Food, Fast Delivery</h2>
            </div>
            <div className='flex items-center gap-4'>
              <CircleCheckBigIcon className="!text-black dark:!text-white w-6 h-6" />
              <h2>Taste the Freshness in Every Bite</h2>
            </div>
            <div className='flex items-center gap-4'>
              <CircleCheckBigIcon className="!text-black dark:!text-white w-6 h-6" />
              <h2>10% off every Sunday on all food items</h2>
            </div>
          </div>

          <div className='flex items-center justify-center md:justify-start mt-6 text-orange-600 cursor-pointer'>
            <button className='text-lg font-semibold' onClick={Learn}>Learn More</button>
            <MoveUpRight className='w-6 h-6 ml-2' />
          </div>
        </div>
      </section>

      <div className='w-full px-4 md:px-10 mt-10'>
        {/* Header Section */}
        <section className='flex flex-col items-center text-center'>
          <h3 className='text-gray-500 text-sm font-semibold mb-4'>--- OUR SERVICES</h3>
          <div className='text-3xl md:text-5xl font-bold'>
            <h2 className='mb-2'>Bringing Quality and</h2>
            <h2>Convenience to <span className='text-orange-600'>Your Table</span></h2>
          </div>
          <div className='text-gray-700 mt-6 mb-8 max-w-lg mx-auto'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, blanditiis.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
        </section>

        {/* Food Items Section */}
        <section className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 text-center'>
          {/* Mc White Coffee */}
          <div className='flex flex-col items-center space-y-4'>
            <img src="./img1.png" alt="Mc White Coffee"
              className='w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 object-cover rounded-full' />
            <h1 className='text-xl font-semibold'>Mc White Coffee</h1>
            <button
              className='flex items-center justify-center bg-white border border-gray-500 text-black rounded-full px-6 py-2 hover:bg-yellow-600 transition'
              onClick={handleAuthRedirect}
            >
              Order Now <ChevronRight className='ml-2' />
            </button>
          </div>

          {/* Double Burger */}
          <div className='flex flex-col items-center space-y-4'>
            <img src="./img2.png" alt="Double Burger"
              className='w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 object-cover rounded-full' />
            <h1 className='text-xl font-semibold'>Double Burger</h1>
            <button
              className='flex items-center justify-center bg-white border border-gray-500 text-black rounded-full px-6 py-2 hover:bg-orange-600  transition'
              onClick={handleAuthRedirect}
            >
              Order Now <ChevronRight className='ml-2' />
            </button>
          </div>

          {/* Hawaiian Pizza */}
          <div className='flex flex-col items-center space-y-4'>
            <img src="./img3.png" alt="Hawaiian Pizza"
              className='w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 object-cover rounded-full' />
            <h1 className='text-xl font-semibold'>Hawaiian Pizza</h1>
            <button
              className='flex items-center justify-center bg-white border border-gray-500 text-black rounded-full px-6 py-2 hover:bg-emerald-600  transition'
              onClick={handleAuthRedirect}
            >
              Order Now <ChevronRight className='ml-2' />
            </button>
          </div>
        </section>
      </div>

      <section className='w-full flex justify-center items-center mt-10 px-4 md:px-10'>
        <div className='w-full max-w-6xl bg-gray-300 rounded-2xl px-6 py-10 text-center shadow-lg'>
          <div className='text-3xl md:text-5xl font-bold mb-4'>
            <h6>Subscribe to <span className='text-orange-600'>Our Newsletter</span></h6>
          </div>

          <div className='text-gray-700 text-sm md:text-lg mb-6'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, blanditiis.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>

          <div className='flex flex-col sm:flex-row items-center justify-center gap-4 w-full'>
            <input
              type="email"
              placeholder="Enter Your Email"
              className='text-gray-500 px-4 py-2 rounded-full border border-gray-500 w-full sm:w-1/2'
            />
            <button
              className='bg-orange-600 text-white font-medium px-6 py-2 rounded-full hover:bg-orange-700 transition w-full sm:w-auto'
              onClick={handleAuthRedirect2} 
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <section className='w-full bg-gray-100 py-10 mt-7'>
        <footer className='max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Brand Info */}
          <div>
            <div className='flex items-center gap-2 text-2xl font-extrabold'>
              <Utensils className='bg-orange-600 h-10 w-10 text-white rounded-full p-1' />
              <h1>Food</h1><span className='text-orange-500'>Zone</span>
            </div>
            <p className='text-gray-500 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p className='text-gray-500'>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            <p className='text-gray-500'>Lorem, ipsum dolor.</p>
            <div className='flex gap-4 mt-4'>
              <Facebook className="text-black dark:text-white w-6 h-6 cursor-pointer" />
              <Twitter className="text-black dark:text-white w-6 h-6 cursor-pointer" />
              <Linkedin className="text-black dark:text-white w-6 h-6 cursor-pointer" />
              <Instagram className="text-black dark:text-white w-6 h-6 cursor-pointer" />
            </div>
          </div>

          {/* Explore Section */}
          <div>
            <h1 className='text-xl font-semibold mb-3'>Explore</h1>
            <ul className='space-y-2'>
              <li>Home</li>
              <li>Services</li>
              <li>Foods</li>
              <li>Contact</li>
              <li>About</li>
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h1 className='text-xl font-semibold mb-3'>Help</h1>
            <ul className='space-y-2'>
              <li>Account</li>
              <li>Service Center</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>About</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h1 className='text-xl font-semibold mb-3'>Contact</h1>
            <div className='space-y-2'>
              <div className='flex items-center gap-2'>
                <MapPin className="!text-black dark:text-white w-5 h-5" />
                <span>Delhi, New Delhi</span>
              </div>
              <div className='flex items-center gap-2'>
                <Phone className="!text-black dark:text-white w-5 h-5" />
                <span>+91 96757 XXXXX</span>
              </div>
              <div className='flex items-center gap-2'>
                <Mail className="!text-black dark:text-white w-5 h-5" />
                <span>foodZone1001@gmail.com</span>
              </div>
            </div>
          </div>
        </footer>

        {/* Footer Bottom Bar */}
        <div className='w-full bg-orange-500 text-white text-center py-3 mt-6 text-lg'>
          <Copyright className='inline-block mr-1' />
          FoodZone | All Rights Reserved.
        </div>
      </section>
    </div>
  );
};

export default Front;
