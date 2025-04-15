import React, { useState } from 'react';
import Nav from './nav';
import Rout from './rout';
import { BrowserRouter } from 'react-router-dom';
import Footer from './footer';
import Productdetail from './productdetail'; // Assuming Productdetail is an array or module

const App = () => {
  // State declarations
  const [cart, setCart] = useState([]); // Initialize as an empty array
  const [close, setClose] = useState(false); 
  const [detail, setDetail] = useState([]); 
  const [product, setProduct] = useState(Productdetail || []); // Fallback to empty array
  const [wishlist, setWishlist] = useState([]); 

  // Search functionality
  const searchbtn = (product) => {
    const change = Productdetail.filter((x) => x.Cat === product); // Filter logic based on category
    setProduct(change);
  };

  // View product details
  const view = (product) => {
    setDetail([{ ...product }]);
    setClose(true);
  };

  // Add to Cart with safety checks
  const addtocart = (product) => {
    if (!cart) return; // Ensure cart exists
    const exist = cart.find((x) => x.id === product.id); // Use safe find
    if (exist) {
      alert('This Product is already added to cart');
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
      alert('Product is added to cart');
    }
  };

  // Toggle wishlist with safeguards
  const toggleWishlist = (product) => {
    if (!wishlist) return; // Ensure wishlist exists
    const exist = wishlist.find((x) => x.id === product.id);
    if (exist) {
      setWishlist(wishlist.filter((x) => x.id !== product.id));
      alert('Product removed from wishlist');
    } else {
      setWishlist([...wishlist, product]);
      alert('Product added to wishlist');
    }
  };

  return (
    <BrowserRouter>
      <Nav searchbtn={searchbtn} />
      <Rout
        product={product}
        setProduct={setProduct}
        detail={detail}
        view={view}
        close={close}
        setClose={setClose}
        cart={cart}
        setCart={setCart}
        addtocart={addtocart}
        wishlist={wishlist}
        toggleWishlist={toggleWishlist}
        setWishlist={setWishlist}
      />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
