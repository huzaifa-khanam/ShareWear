import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai'
import { RiFacebookFill } from 'react-icons/ri'
import { AiOutlineTwitter } from 'react-icons/ai'
import { BiLogoYoutube } from 'react-icons/bi'
import './footer.css'

const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className='container'>
          <div className='about'>
            <div className='logo'>
              <img src="./img/logo.png" alt='logo'></img>
            </div>
            <div className='detail'>
              <p>Your trusted source for premium rentals, brought to you by our expert team.</p>
              <div className='icon'>
                <li><RiFacebookFill /></li>
                <li><AiOutlineInstagram /></li>
                <li><AiOutlineTwitter /></li>
                <li><BiLogoYoutube /></li>
              </div>
            </div>
          </div>
          <div className='account'>
            <h3>My Account</h3>
            <ul>
              <li>Account</li>
              <li>Order</li>
              <li>Cart</li>
              <li>Shipping</li>
              <li>Return</li>

            </ul>
          </div>
          <div className='page'>
            <h3>Pages</h3>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer