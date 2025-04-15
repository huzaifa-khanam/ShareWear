import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineCloseCircle } from 'react-icons/ai';
import { BsArrowRight, BsEye } from 'react-icons/bs';
import Homeproduct from './homeproduct';
import './home.css';

const Home = ({ detail, view, close, setClose, addtocart ,toggleWishlist }) => {
  return (
    <>
      {close ? (
        <div className='product_detail'>
          <div className='container'>
            <button className='closebtn' onClick={() => setClose(false)}>
              <AiOutlineCloseCircle />
            </button>
            {detail.map((curElm) => {
              return (
                <div className='productbox' key={curElm.id}>
                  <div className='img-box'>
                    <img src={curElm.Img} alt={curElm.Title}></img>
                  </div>
                  <div className='detail'>
                    <h4>{curElm.Cat}</h4>
                    <h2>{curElm.Title}</h2>
                    <p>Designer elegance crafted for your special moments.</p>
                    <h3>Rent: ₹{curElm.Rent}</h3>
                    <h2>{curElm.Price}</h2>
                    <button onClick={() => addtocart(curElm)}>Add to Cart</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}

      <div className='top_banner'>
        <div className='container'>
          <div className='detail'>
            <h2>Why Buy?<br />When You Can Rent Hassle-Free</h2>
            <Link to='/product' className='link'>Shop Now <FaArrowRight /></Link>
          </div>
          <div className='img-box'>
            <img src='img/banner/b1.jpg' alt="img"></img>
          </div>
        </div>
      </div>

      <div className='product_type'>
        <div className='container'>
          <div className='box'>
            <div className='img_box'>
              <img src='img/products/p1.png' alt='img1'></img>
            </div>
            <div className='detail'>
              <p>Product 1</p>
            </div>
          </div>
          <div className='box'>
            <div className='img_box'>
              <img src='img/products/p2.png' alt='img2'></img>
            </div>
            <div className='detail'>
              <p>Product 2</p>
            </div>
          </div>
          <div className='box'>
            <div className='img_box'>
              <img src='img/products/p3.png' alt='img3'></img>
            </div>
            <div className='detail'>
              <p>Product 3</p>
            </div>
          </div>
        </div>
      </div>

      <div className='feature'>
        <div className="fea-box">
          <img src="img/features/f1.png" alt=""></img>
          <h6>Free Shipping</h6>
        </div>
        <div className="fea-box">
          <img src="img/features/f2.png" alt=""></img>
          <h6>Online Order</h6>
        </div>
        <div className="fea-box">
          <img src="img/features/f3.png" alt=""></img>
          <h6>Save Money</h6>
        </div>
        <div className="fea-box">
          <img src="img/features/f5.png" alt=""></img>
          <h6>Happy Sell</h6>
        </div>
        <div className="fea-box">
          <img src="img/features/f6.png" alt=""></img>
          <h6>24/7 Support</h6>
        </div>
      </div>

      <div className='product'>
        <h2>Favorites at a Steal!</h2>
        <div className='container'>
          {Homeproduct.map((curElm) => {
            return (
              <div className='box' key={curElm.id}>
                <div className='img_box'>
                  <img src={curElm.Img} alt={curElm.Title}></img>
                  <div className='icon'>
                    <li onClick={() => addtocart(curElm)}><AiOutlineShoppingCart /></li>
                    <li onClick={() => view(curElm)}><BsEye /></li>
                    <li onClick={() => toggleWishlist(curElm)}><AiOutlineHeart /></li>
                  </div>
                </div>
                <div className='detail'>
                  <h4>{curElm.Title}</h4>
                  <p>{curElm.Cat}</p>
                  <h3>Rent: ₹{curElm.Rent}</h3>
                  <h4>{curElm.Price}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className='banner'>
        <div className='container'>
          <div className='detail'>
            <h4>Top Picks, Best Prices</h4>
            <h3>Trending in Women's Lehengas</h3>
            <p>Rent for Just ₹ 3000</p>
            <Link to="/product" className='link'>Shop Now <BsArrowRight /></Link>
          </div>
          <div className='img-Box'>
            <img src='img/banner/banner2.jpg' alt='sliderimg'></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
