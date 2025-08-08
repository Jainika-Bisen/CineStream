// src/App.js
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/MovieStreamPage';
import LoginPage from './components/LoginPage';
import ProductPage from './components/ProductPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage onLogin={() => setIsLoggedIn(true)} />} />
      <Route path="/product" element={<ProductPage onLogout={() => setIsLoggedIn(false)} />} />
    </Routes>
  );
}

export default App;

