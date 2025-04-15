import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './home'
import Product from './product'
import Cart from './cart'
import Wishlist from './wishlist'
import Contact from './contact'
import About from './about'
const Rout = ({ product, setProduct, detail, view, close, setClose, cart, setCart, addtocart , wishlist , setWishlist , toggleWishlist}) => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home detail={detail} view={view} close={close} setClose={setClose} addtocart={addtocart} toggleWishlist={toggleWishlist}/>} />
        <Route path='/product' element={<Product product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} addtocart={addtocart} toggleWishlist={toggleWishlist}/>} />
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart} wishlist={wishlist} setWishlist={setWishlist}/>} />
        <Route path='/wishlist' element={<Wishlist wishlist={wishlist} setWishlist={setWishlist} cart={cart} setCart={setCart}/>} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>

  )
}

export default Rout