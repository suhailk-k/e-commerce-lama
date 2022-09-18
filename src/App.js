import React from 'react';
import Navbar from './Components/Navbar';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App '>
      <Router>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/login' exact element={<Login />} />
          <Route path='/register' exact element={<Register />} />
          <Route path='/productlist' exact element={<ProductList />} />
          <Route path='/product' exact element={<Product />} />
          <Route path='/cart' exact element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
