import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'; // Adjust the path if necessary


const Footer = () => {
  return (
    <div className='footer' id="footer">
      <diV className="footer-content">
      <diV className="footer-content-left">
         <img src={assets.logo} alt="" />
         <p>Our goal is to make ordering food quick, easy, and fun for everyone. We offer a diverse range of dishes to cater to all tastes, from comfort food to healthy options, so there's something for everyone. We pride ourselves on our quality ingredients, customer service, and seamless ordering experience. Whether you're looking for a quick snack or a full meal, we're here to satisfy your cravings</p>
         <div className="footer-social-icons">
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
         </div>
         </diV>
         <diV className="footer-content-center">
         <h2>COMPANY</h2>
         <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
        </ul>
         </diV>
         <diV className="footer-content-right">
           <h2>GET IN TOUCH</h2>
           <ul>
            <li>+337-564-234</li>
            <li>contact@chopshop.com</li>
           </ul>
         </diV>
      </diV>
      <hr/>
      <p className="footer-copyright">Copyright 2025 @ShopChop.com- All Right Reserved.</p>
    </div>
  )
}

export default Footer
