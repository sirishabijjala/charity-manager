 
 import {  Link } from "react-router-dom";
 import React, { useState, useEffect } from 'react';
 import axios from 'axios';
 import './Access.css'
 const Access = () => {
    // State variables
    const [donors, setDonors] = useState([]);
    
    // State variable to store the fetched donor
    const handleDeleteDonor = (id) => {
        axios.delete(`http://localhost:5000/api/donors/${id}`)
          .then(response => {
            console.log(response.data);
            fetchDonors(); // Refresh the donors list
          })
          .catch(error => console.error('Error deleting donor:', error));
      };


      const fetchDonors = () => {
        axios.get('http://localhost:5000/api/donors')
          .then(response => {
            console.log('Fetched donors:', response.data);
            setDonors(response.data);
          })
          .catch(error => console.error('Error fetching donors:', error));
      };
    
      useEffect(() => {
        fetchDonors();
      }, []);
    // JSX structure for the component
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
                    <li><Link to="/Navbar"><b>Home</b></Link></li>
                    <li><Link to="/Donate"><b>Donate</b></Link></li>
                    <li><Link to="/View"><b>Access Donor</b></Link></li>
                    <li><Link to="/Aboutus"><b>About</b></Link></li>
                    <li><Link to="/Contact"><b>Contact</b></Link></li>
                    
                    <li><Link  to="/Signin"><b>logout</b></Link></li>
                </ul>
            </nav>
        </div>
        <br></br>
        <div class="container">
  <div class="row">
  <div class="col" style={{marginLeft: "40%"}}>
  <a href="/view" class="btn btn-primary"><b>Back</b></a>
</div></div></div>
<br></br>
<br></br>


        <div class="container" style={{marginLeft: "30%"}}>
  <div class="t1">
    <table class="table table-bordered table-striped table-hover">
      <thead class="thead-dark">
        <tr>
          <th class="text-center">Id</th>
          <th class="text-center">Name</th>
          <th class="text-center">Amount</th>
          <th class="text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        {donors.map((data, index) => (
          <tr key={index}>
            <td class="text-center">{data[0]}</td>
            <td>{data[1]}</td>
            <td class="text-right">Rs {data[2]}</td>
            <td class="text-center">
              <button class="btn btn-danger btn-sm" onClick={() => handleDeleteDonor(data[0])}><b>Delete</b></button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
<br></br>
<br></br>
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
  };
  
  // Export the component
  export default Access;
  