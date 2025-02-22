import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import FoodMenu from './components/Menu/FoodMenu';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';  // Import Footer component

const App = () => {
  return (
    <BrowserRouter> {/* BrowserRouter should wrap all routes and the layout */}
      <>
        <Navbar /> {/* Navbar visible on all pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/menu" element={<FoodMenu />} />
        </Routes>
        <Footer /> {/* Footer will be visible after all routes */}
      </>
    </BrowserRouter>
  );
};

export default App;
