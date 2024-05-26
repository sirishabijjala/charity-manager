import { Routes, Route, Link } from "react-router-dom";
 // Import useLocation from react-router-dom

import Donate from '../Donate/Donate';
import View from '../View/View';
import Login from '../Login/Login';
import './Navbar.css'

const Contact = () => {
    
    
    return(
        <>
       <div className="s1">
        <div className="social">
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-google"></i>
                </div>
        </div>
        <div className="m">
       
        <i class="fa-solid fa-piggy-bank">    Fund Flow</i>
              
            <nav>
               
                <ul>
                    <li><Link to="/Home"><b>Home</b></Link></li>
                    
                    <li><Link to="/Aboutus"><b>About</b></Link></li>
                    <li><Link to="/Contact"><b>Contact</b></Link></li>
                    <li><Link  to="/Signup"><b>Signup</b></Link></li>
                    <li><Link  to="/Signin"><b>Signin</b></Link></li>
                </ul>
            </nav>
        </div>
        
        <h3 className='c2'>Contact Us</h3>  <br/>
        <p className="hr-lines"></p>
     
        <div className='c1'>
            
        <div class="contain">
            <div class="content">
                <div class="left-side">
                <div class="address details">
                    <i class="fas fa-map-marker-alt"></i>
                    <div class="topic">Address</div>
                    <div class="text-one">Narasaraopet,</div>
                    <div class="text-two">Andhra Pradesh</div>
                </div>
                <div class="phone details">
                    <i class="fas fa-phone"></i>
                    <div class="topic">Phone</div>
                    <div class="text-one">+91 9751791203</div>
                <div class="text-two">+91 9159669599</div>
            </div>
            <div class="email details">
                <i class="fas fa-envelope"></i>
                <div class="topic">Email</div>
                <div class="text-one">bloodbanksupport@gmail.com</div>
                <div class="text-two"> bloodbankenquiry@gmail.com</div>
            </div>
      </div>
      <div class="right-side">
        <div class="topic-text">Send us a message</div>
        <p>If you have any inquiries or any types of queries related to the blood bank management system, you can send us a message from here. It's our pleasure to help you.</p>
      <form action="#">
        <div class="input-box">
          <input type="text" placeholder="Enter your name"/>
        </div>
        <div class="input-box">
          <input type="text" placeholder="Enter your email"/>
        </div>
        <div class="input-box message-box">
          <input type="text" placeholder='Enter your message'/>
        </div>
        <div class="button1">
          <input type="button" value="Send Now" />
        </div>
      </form>
        </div>
        </div>
    </div>
    </div>

        
            <footer class="footer">
     <div class="container">
      <div class="row">
        <div class="footer-col">
          <h4>company</h4>
          <ul>
            <li><a href="#">about us</a></li>
            <li><a href="#">our services</a></li>
            <li><a href="#">privacy policy</a></li>
            <li><a href="#">affiliate program</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>get help</h4>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">shipping</a></li>
            <li><a href="#">returns</a></li>
            <li><a href="#">order status</a></li>
            <li><a href="#">payment options</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Components</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Donate</a></li>
            <li><a href="#">Access Donor</a></li>
            <li><a href="#">Aboutus</a></li>
            <li><a href="#">Contactus</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>follow us</h4>
          <div class="social-links">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
     </div>
  </footer>

          
            
        </>
    )
}
export default Contact;
