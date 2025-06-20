import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    <div className="p-10 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        className="w-full mb-4 p-2 border rounded"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="w-full mb-4 p-2 border rounded"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="w-full mb-4 p-2 border rounded"
      />
      <button onClick={handleRegister} className="bg-blue-600 text-white px-4 py-2 rounded">
        Register
      </button>
    </div>
  );
};

export default Register;