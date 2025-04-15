import React from "react";
import { AiOutlineCloseCircle, AiOutlineShoppingCart, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import Productdetail from "./productdetail";
import "./product.css";

const Product = ({
  product = [], // Default to an empty array
  setProduct = () => {},
  detail = [],
  view = () => {},
  close = false,
  setClose = () => {},
  addtocart = () => {},
  toggleWishlist = () => {},
  wishlist = [], // Default to an empty array
}) => {
  // Filter products based on category
  const filterProduct = (category) => {
    const updatedProducts = Productdetail.filter((item) => item.Cat === category);
    setProduct(updatedProducts);
  };

  // Display all products
  const AllProducts = () => {
    setProduct(Productdetail);
  };

  return (
    <>
      {/* Product Detail Modal */}
      {close && (
        <div className="product_detail">
          <div className="container">
            <button className="closebtn" onClick={() => setClose(false)}>
              <AiOutlineCloseCircle />
            </button>
            {detail?.length === 0 ? (
              <p>No Product Selected</p>
            ) : (
              detail.map((curElm) => (
                <div className="productbox" key={curElm.id}>
                  <div className="img-box">
                    <img src={curElm.Img} alt={curElm.Title} />
                  </div>
                  <div className="detail">
                    <h4>{curElm.Cat}</h4>
                    <h2>{curElm.Title}</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt.
                    </p>
                    <h3>Rent: ₹{curElm.Rent}</h3>
                    <h2>{curElm.Price}</h2>
                    <button onClick={() => addtocart(curElm)}>Add to Cart</button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* Products Section */}
      <div className="products">
        <h2># Products</h2>
        <p>Home . Products</p>
        <div className="container">
          {/* Category Filter */}
          <div className="filter">
            <div className="categories">
              <h3>Categories</h3>
              <ul>
                <li onClick={AllProducts}>All Products</li>
                <li onClick={() => filterProduct("Lehenga")}>Lehenga</li>
                <li onClick={() => filterProduct("Gown")}>Gown</li>
                <li onClick={() => filterProduct("Suit")}>Suit</li>
                <li onClick={() => filterProduct("Saree")}>Saree</li>
                <li onClick={() => filterProduct("Kurta")}>Men Kurtas</li>
                <li onClick={() => filterProduct("Sherwani")}>Sherwani</li>
                <li onClick={() => filterProduct("Jewellery")}>Jewellery</li>
              </ul>
            </div>
          </div>

          {/* Display Product Cards */}
          <div className="productbox">
            <div className="contant">
              {product?.length === 0 ? (
                <p>No products found in this category...</p>
              ) : (
                product.map((curElm) => (
                  <div className="box" key={curElm.id}>
                    <div className="img_box">
                      <img src={curElm.Img} alt={curElm.Title} />
                      <div className="icon">
                        {/* Add to Cart */}
                        <span onClick={() => addtocart(curElm)}>
                          <AiOutlineShoppingCart />
                        </span>
                        {/* View Product */}
                        <span onClick={() => view(curElm)}>
                          <BsEye />
                        </span>
                        {/* Add to Wishlist */}
                        <span
                          className="wishlist"
                          onClick={() => toggleWishlist(curElm)}
                        >
                          {wishlist?.find((item) => item.id === curElm.id) ? (
                            <AiFillHeart style={{ color: "red" }} />
                          ) : (
                            <AiOutlineHeart />
                          )}
                        </span>
                      </div>
                    </div>
                    <div className="detail">
                      <h4>{curElm.Title}</h4>
                      <p>{curElm.Cat}</p>
                      <h3>Rent: ₹{curElm.Rent}</h3>
                      <h4>{curElm.Price}</h4>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;