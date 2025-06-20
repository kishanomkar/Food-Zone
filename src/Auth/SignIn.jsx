import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      alert("Login successful");
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
   <div className="flex justify-center items-center">
        <form className="bg-gray-100 shadow-lg rounded-lg px-8 py-10 w-full max-w-md flex flex-col items-center animate-fadeIn">
          <h2 className="text-3xl font-bold text-black mb-4">Sign In</h2>

          {/* Email & Password Inputs */}
          <div className="flex flex-col w-full gap-4">
            <input
              type="email"
              name="email"
              required
              className="h-12 w-full bg-gray-300 text-black placeholder-gray-500 rounded-md px-4 focus:ring-2 focus:ring-orange-500 transition"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              name="password"
              required
              className="h-12 w-full bg-gray-300 text-black placeholder-gray-500 rounded-md px-4 focus:ring-2 focus:ring-orange-500 transition"
              placeholder="Enter your Password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}

            />
          </div>

          
          {/* Remember Me & Forgot Password
          <div className="flex justify-between items-center w-full text-sm text-gray-600 mt-3">
            <label className="flex items-center">
              <input type="checkbox" name="remember" className="h-4 w-4 accent-orange-500" />
              <span className="ml-2">Remember Me</span>
            </label>
            <button
              type="button"
              onClick={() => setShowForgotPassword(true)}
              className="hover:underline hover:text-orange-500 transition"
            >
              Forgot Password?
            </button>
          </div> */}

          
          

          {/* Sign-In Button */}
          <button
            type="submit"
            className="bg-orange-600 text-white font-semibold rounded-full px-6 py-2 mt-6 hover:bg-orange-500 transition animate-pulse"
            onClick={handleLogin}
          >
            Sign In
          </button>

          {/* Social Login */}
          <div className="mt-6 w-full text-center">
            <p className="text-gray-500 text-sm mb-3">Or Sign In With</p>
            <div className="flex justify-center gap-4">
              <button
                type="button"
                className="bg-white rounded-full p-3 shadow-md hover:bg-gray-200 transition"
                aria-label="Sign in with Google"
              >
                🔍 Google
              </button>
              <button
                type="button"
                className="bg-white rounded-full p-3 shadow-md hover:bg-gray-200 transition"
                aria-label="Sign in with Facebook"
              >
                📘 Facebook
              </button>
              <button
                type="button"
                className="bg-white rounded-full p-3 shadow-md hover:bg-gray-200 transition"
                aria-label="Sign in with Twitter"
              >
                🐦 Twitter
              </button>
            </div>
          </div>
        </form>

      </div>
      
  );
};

export default SignIn;
