import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/MovieStreamPage';
import LoginPage from './components/LoginPage';
import ProductPage from './components/ProductPage';
import AboutPage from './components/AboutPage';       // NEW
import ContactPage from './components/ContactPage';   // NEW
import FavoritesPage from './components/FavoritesPage'; // NEW

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage onLogin={() => setIsLoggedIn(true)} />} />
      <Route path="/product" element={<ProductPage onLogout={() => setIsLoggedIn(false)} />} />
      <Route path="/about" element={<AboutPage />} />           {/* NEW */}
      <Route path="/contact" element={<ContactPage />} />       {/* NEW */}
      <Route path="/favorites" element={<FavoritesPage />} />   {/* NEW */}
    </Routes>
  );
}

export default App;
