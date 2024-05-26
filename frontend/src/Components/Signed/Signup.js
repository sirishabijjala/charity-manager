import './Signed.css';
import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';


export default function Signup(){

  const [Signup, setSignup] = useState([]);
  const [newSignup, setNewSignup] = useState({
    userid: '',
    name: '',
    emailid:'',
    password:'',
    mobile:'',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    fetchSignup();
  }, []);

  const fetchSignup = () => {
    fetch('http://localhost:2000/api/register')
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched signup:', data);
        setSignup(data);
      })
      .catch((error) => console.error('Error fetching signup:', error));
  };

  const handleAddSignup = async () => {
    try {
      const response = await fetch('http://localhost:2000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newSignup),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Internal Server Error');
      }

      console.log('User signup successfully');
      fetchSignup(); // Refresh the signup list
      setNewSignup({
        userid: '',
        name: '',
        emailid:'',
        password:'',
        mobile:'',
      });       // Clear the input fields
      setSuccessMessage(`You Registered Successfully ${newSignup.name} !.`); // Set the success message
      setErrorMessage(''); // Reset error message
    } catch (error) {
      console.error('Error adding donor:', error.message);
      setSuccessMessage(''); // Clear any existing success message
      setErrorMessage('Error adding donor: ' + error.message);
    }
  };

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
        <br/><br/>
        <h1 style={{color:"black",textAlign:'center',padding:'10px'}}></h1>
        <h3 className='su2'>Sign Up</h3>  
        <p className="hr-line"></p>

       
        <div className='contain1 su1'>
            <div className='content1'>
                <div class="right-side1">
                <form action="#">
                    <div class="input-box1" style={{height: "33px"}}><i class="fa-solid fa-user" style={{color:"#4a4c70"}}></i>
                    <input type="text" placeholder="Enter your userid"   value={newSignup.userid}
                    onChange={(e) => setNewSignup({ ...newSignup, userid: e.target.value })}/>
                    </div><br></br>
                    <div class="input-box1" style={{height: "33px"}}><i class="fa-solid fa-user" style={{color:"#4a4c70"}}></i>    
                         <input type="text" placeholder="Enter your name"  value={newSignup.name}
                    onChange={(e) => setNewSignup({ ...newSignup, name: e.target.value })}/>
                    </div><br></br>
                    <div class="input-box1" style={{height: "33px"}}><i class="fa-solid fa-envelope" style={{color:"#4a4c70"}}></i>
                    <input type="text" placeholder="Enter your email" value={newSignup.emailid}
                    onChange={(e) => setNewSignup({ ...newSignup, emailid: e.target.value })}/>
                    </div><br></br>
                    <div class="input-box1" style={{height: "33px"}}><i class="fa-solid fa-lock" style={{color:"#4a4c70"}}></i>
                    <input type="password" placeholder="Enter your password"   value={newSignup.password}
                    onChange={(e) => setNewSignup({ ...newSignup, password: e.target.value })}/>
                    </div><br></br>
                    <div class="input-box1" style={{height: "33px"}}><i class="fa-solid fa-phone" style={{color:"#4a4c70"}}></i>
                    <input type="text" placeholder="Enter your mobile number" value={newSignup.mobile}
                    onChange={(e) => setNewSignup({ ...newSignup, mobile: e.target.value })}/>
                    </div><br></br>
                    <div class="button1">
                    <input type="button" value="Sign Up" onClick={handleAddSignup}/>
                    </div><br/>
                    {successMessage && (
                        <p style={{ color: 'green', fontSize: '20px', fontWeight: 'bold' }}>{successMessage} <i class="fa-solid fa-thumbs-up fa-xl" style={{color:'grey'}}></i></p>
                    )}
                    {errorMessage && <p style={{ color: 'red' , fontWeight:'bold'}}>{errorMessage}</p>}
                </form></div></div><p style={{padding:"10px 10px 10px 70px"}}>If you have an account <Link to='/Signin'>SignIn</Link></p>
        </div>
        <img src="https://img.freepik.com/free-vector/contact-us-landing-page-illustration_52683-18236.jpg" style={{height:'450px',width:'500px',float:'right',margin:'-450px 175px 10px 0'}} className='ig'></img>

        <br/><br/><br/><br/>

        
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