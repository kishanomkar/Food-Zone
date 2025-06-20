import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const colorScheme = {
  bg: "bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500",
  card: "bg-white/80 backdrop-blur-md shadow-xl",
  input: "focus:ring-2 focus:ring-pink-400 border-gray-300",
  button: "bg-gradient-to-r from-pink-500 to-purple-500 hover:from-purple-500 hover:to-pink-500 transition-colors",
  label: "text-gray-700 font-semibold",
  title: "text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-pink-500",
};

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.find(u => u.email === email)) return alert("User already exists");

    const newUser = { id: Date.now().toString(), name, email, password, cart: [] };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration successful! Please log in.");
    navigate("/login");
  };

  return (
    <div className={`${colorScheme.bg} min-h-screen flex items-center justify-center`}>
      <div className={`${colorScheme.card} rounded-3xl p-10 w-full max-w-md`}>
        <h2 className={`${colorScheme.title} mb-8 text-center drop-shadow-lg`}>Create Account</h2>
        <form
          onSubmit={e => {
            e.preventDefault();
            handleRegister();
          }}
          className="space-y-6"
        >
          <div>
            <label className={colorScheme.label}>Name</label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Your Name"
              className={`w-full mt-2 p-3 rounded-xl border ${colorScheme.input} bg-white/70`}
              required
            />
          </div>
          <div>
            <label className={colorScheme.label}>Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="you@email.com"
              className={`w-full mt-2 p-3 rounded-xl border ${colorScheme.input} bg-white/70`}
              required
            />
          </div>
          <div>
            <label className={colorScheme.label}>Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Password"
              className={`w-full mt-2 p-3 rounded-xl border ${colorScheme.input} bg-white/70`}
              required
            />
          </div>
          <button
            type="submit"
            className={`${colorScheme.button} w-full py-3 rounded-xl text-lg font-bold shadow-lg mt-4`}
          >
            Register
          </button>
        </form>
        <div className="text-center mt-6">
          <span className="text-gray-600">Already have an account? </span>
          <button
            className="text-pink-600 font-semibold hover:underline"
            onClick={() => navigate('/login')}
            type="button"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;