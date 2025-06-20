import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { initUsers } from './localstorage/localstorage';

initUsers(); // initialize users when app starts

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
