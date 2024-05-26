import React, { useState, useEffect } from 'react';
import './Signed.css';
import { Link, BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';



export default function Signin()
 {
  const [loginDetails, setLoginDetails] = useState({
    emailid: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [redirectToHome, setRedirectToHome] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:2000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          emailid: loginDetails.emailid,
          password: loginDetails.password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Internal Server Error');
      }

      console.log('Login successful');
      window.location.href = '/Navbar';
      // Set the state to redirect
    } catch (error) {
      console.error('Error logging in:', error.message);
      setErrorMessage('Invalid email or password');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const responseGoogle = (response) => {
    console.log(response);
    // Handle Google login response here, you may send it to your backend for authentication
  };
  const handleGoogleLoginSuccess = (credentialResponse) => {
    console.log(credentialResponse);
    console.log('Google login successful');
    // Navigate to home page or perform any other action upon successful Google login
    setRedirectToHome(true);
    setIsLoggedIn(true);
  };

  const handleGoogleLoginFailure = () => {
    console.log('Google login failed');
  };

  return (
   
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
     <br/><br/>
      <h1 style={{color:"#de1f26",textAlign:'center',padding:'10px'}}></h1>
      <h3 className='l'>Sign In</h3>
<div className='contain1 su1' style={{ margin: '75px 20px 20px 350px' }}>
        <div className='content1'>
          <div className="right-side1">
            <form onSubmit={handleLogin}>
            {errorMessage && <p style={{ color: 'red',fontWeight:'bold' }}>{errorMessage}<br/></p>}
              <div className="input-box1" style={{ height: "35px", width: "420px" }}>
                <i className="fa-solid fa-envelope" style={{ color: "#4a4c70" }}></i>
                <input type="text" placeholder="Enter email" name="emailid" value={loginDetails.emailid} onChange={handleInputChange} />
              </div><br></br>
              <div className="input-box1" style={{ height: "35px", width: "420px" }}>
                <i className="fa-solid fa-lock" style={{ color: "#4a4c70" }}></i>
                <input type="password" placeholder="Enter password" name="password" value={loginDetails.password} onChange={handleInputChange} />
              </div><br></br>
              <div className="button1">
                <input type="submit" value="Sign in"/></div><br></br>
                <p style={{ padding: "5px 7px 7px 50px" }}>If you don't have an account <Link to='/Signup'>SignUp</Link></p>

                <div>
      {isLoggedIn ? (
          <Navigate to="/Navbar" replace /> // Redirect to home page if logged in
          ) : (
                <GoogleOAuthProvider clientId="210027891769-oula70r40d1q7ctkefikdbi0tstj5qvi.apps.googleusercontent.com"><GoogleLogin
                onSuccess={handleGoogleLoginSuccess}
                onError={handleGoogleLoginFailure}
            
          
/>
</GoogleOAuthProvider>

)}
</div>

              <br />
            </form>
          </div>
        </div>
      </div>
      <img src="https://static.vecteezy.com/system/resources/previews/006/912/004/non_2x/secure-login-and-sign-up-concept-illustration-vector.jpg" style={{ height: '450px', width: '730px', float: 'right', margin: '-450px 175px 10px 0' }} className='su1' alt="signin" />

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
   
  );
}