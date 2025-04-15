import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import './wishlist.css';

const Wishlist = ({ wishlist, setWishlist, cart, setCart }) => {
  // Add item to cart and remove it from wishlist
  const addtocart = (product) => {
    try {
      // Check if the item already exists in the cart
      const isItemInCart = cart.some((cartItem) => cartItem.id === product.id);
      if (!isItemInCart) {
        setCart((prevCart) => [...prevCart, { ...product, Days: 1 }]); // Add to cart with default days
        removeFromWishlist(product); // Remove from wishlist after adding
      } else {
        alert("Item is already in the cart.");
      }
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  // Remove item from wishlist
  const removeFromWishlist = (product) => {
    try {
      setWishlist((prevWishlist) =>
        prevWishlist.filter((wishlistItem) => wishlistItem.id !== product.id)
      );
    } catch (error) {
      console.error("Error removing item from wishlist:", error);
    }
  };

  return (
    <div className="wishlistcontainer">
      {/* Display message if wishlist is empty */}
      {wishlist.length === 0 ? (
        <div className="emptywishlist">
          <h2 className="empty">Wishlist is Empty</h2>
          <Link to="/product" className="emptywishlistbtn">
            Shop Now
          </Link>
        </div>
      ) : (
        // Wishlist items rendering
        <div className="content">
          {wishlist.map((item) => (
            <div className="wishlist_item" key={item.id}>
              <div className="img_box">
                <img src={item.Img} alt={item.Title} />
              </div>
              <div className="detail">
                <div className="info">
                  <h4>{item.Cat}</h4>
                  <h3>{item.Title}</h3>
                  <p>Rent: ₹{item.Rent}</p>
                </div>
                <div className="actions">
                  <button
                    onClick={() => addtocart(item)}
                    className="addtocart"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => removeFromWishlist(item)}
                    className="remove"
                  >
                    <AiOutlineClose />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
