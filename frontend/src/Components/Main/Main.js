import React, { useEffect } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import {  useNavigate } from 'react-router-dom';
import Donate from '../Donate/Donate';
import View from '../View/View';
import Navbar from '../Navbar/Navbar';
import Login from '../Login/Login';

import './Main.css';
const Main = () => {
    
    useEffect(() => {
        const homeElement = document.getElementById('home-link');
        homeElement.click();
    }, []);
    const handleLogout = () => {
        // Clear user authentication token or username from state or localStorage
        // Redirect user to the login page
        navigate('/login');
      };
      const navigate = useNavigate();

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
           
            <i class="fa-solid fa-piggy-bank">    Donate</i>
                  
                <nav>
                   
                    <ul>
                        <li><Link to="/Navbar"><b>Home</b></Link></li>
                        <li><Link to="/Donate"><b>Donate</b></Link></li>
                        <li><Link to="/View"><b>Access Donor</b></Link></li>
                        <li><Link to="/Aboutus"><b>About</b></Link></li>
                        <li><Link to="/Contact"><b>Contact</b></Link></li>
                        <li><Link id="home-link" to="/Login" onClick={handleLogout}><b>Login</b></Link></li>
                    </ul>
                </nav>
            </div>
            
            

            <div className="footer-basic">
                <footer>
                    <div className="social">
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-google"></i>
                    </div>
                    <ul>
                        <li><Link to="/Home">Home</Link></li>
                        <li><Link to="/Aboutus">About</Link></li>
                        <li><Link to="/Contact">Contact</Link></li>
                        <li><Link to="/Login">Login</Link></li>
                    </ul>
                </footer>
            </div>
        </>
    );
}

export default Main;
