import { Copyright, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Utensils } from 'lucide-react';

const Footer = () => {
  return (
    <section className='w-full bg-gray-100 py-10'>
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
              <span>foodzone1001@gmail.com</span>
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
  );
}

export default Footer;
