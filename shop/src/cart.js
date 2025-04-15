import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import './cart.css';

const Cart = ({ cart, setCart }) => {
  // Increase the number of days
  const addDays = (product) => {
    setCart(cart.map((curElm) =>
      curElm.id === product.id
        ? { ...curElm, Days: (curElm.Days || 1) + 1 }
        : curElm
    ));
  };

  // Decrease the number of days
  const decDays = (product) => {
    setCart(cart.map((curElm) =>
      curElm.id === product.id && (curElm.Days || 1) > 1
        ? { ...curElm, Days: (curElm.Days || 1) - 1 }
        : curElm
    ));
  };

  // Remove item from cart
  const removeFromCart = (product) => {
    setCart(cart.filter((curElm) => curElm.id !== product.id));
  };

  // Calculate total price
  const Totalprice = cart.reduce((price, item) => {
    const days = item.Days || 1;
    const rent = item.Rent || 0;
    return price + (days * rent);
  }, 0);

  // Handle checkout
  const handleCheckout = () => {
    alert("Thank you for your order! Your checkout is successful.");
    setCart([]); // Clear the cart after checkout
  };

  return (
    <div className="cartcontainer">
      {cart.length === 0 && (
        <div className="emptycart">
          <h2 className="empty">Cart is Empty</h2>
          <Link to="/product" className="emptycartbtn">
            Shop Now
          </Link>
        </div>
      )}

      <div className="contant">
        {cart.map((curElm) => (
          <div className="cart_item" key={curElm.id}>
            <div className="img_box">
              <img src={curElm.Img} alt={curElm.Title} />
            </div>
            <div className="detail">
              <div className="info">
                <h4>{curElm.Cat}</h4>
                <h3>{curElm.Title}</h3>
                <p>Rent: ₹{curElm.Rent}</p>
                <div className="Days">
                  <p>How many days would you like to rent?</p>
                  <button className="decDays" onClick={() => decDays(curElm)}>
                    -
                  </button>
                  <input
                    type="text"
                    value={curElm.Days || 1}
                    readOnly
                  />
                  <button className="addDays" onClick={() => addDays(curElm)}>
                    +
                  </button>
                </div>
                <h4>Sub total: ₹{curElm.Rent * (curElm.Days || 1)}</h4>
              </div>
              <div className="close">
                <button onClick={() => removeFromCart(curElm)}>
                  <AiOutlineClose />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <>
          <h2 className="totalprice">Total: ₹{Totalprice}</h2> {/* Display Total Price */}
          <button className="checkout" onClick={handleCheckout}>
            Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
