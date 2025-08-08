// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/MovieStreamPage';
import LoginPage from './components/LoginPage';
import ProductPage from './components/ProductPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/product" element={<ProductPage />} />
    </Routes>
  );
}

export default App;

