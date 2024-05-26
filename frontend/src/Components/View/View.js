// Import React and required modules

import {  Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './View.css'

// Functional component for the App
const View = () => {
  // State variables
  const [donors, setDonors] = useState([]);
  
  const [fetchId, setFetchId] = useState(''); // State variable to store the ID for fetching data
  const [fetchedDonor, setFetchedDonor] = useState(null); // State variable to store the fetched donor
  


    

  // Fetch all donors from the backend when the component mounts
  useEffect(() => {
    fetchDonors();
  }, []);

  // Function to fetch all donors
  const fetchDonors = () => {
    axios.get('http://localhost:5000/api/donors')
      .then(response => {
        console.log('Fetched donors:', response.data);
        setDonors(response.data);
      })
      .catch(error => console.error('Error fetching donors:', error));
  };
  // Function to handle deleting a donor
  const handleDeleteDonor = (id) => {
    axios.delete(`http://localhost:5000/api/donors/${id}`)
      .then(response => {
        console.log(response.data);
        fetchDonors(); // Refresh the donors list
      })
      .catch(error => console.error('Error deleting donor:', error));
  };

  // Function to fetch data for a specific donor based on ID
  const handleFetchData = () => {
    axios.get(`http://localhost:5000/api/donors/${fetchId}`)
      .then(response => {
        console.log('Fetched donor:', response.data);
        setFetchedDonor(response.data);
      })
      .catch(error => {
        console.error('Error fetching donor:', error);
        setFetchedDonor(null);
      });
  };



  // JSX structure for the component
  return (
    <>
 {/* Form to fetch data for a specific donor */}
 
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
<h2 className="h">Here we can view the donor list</h2>
<div class="container">
  <div class="row">
  <div class="col" style={{marginLeft: "45%"}}>
  <a href="/Access" class="btn btn-primary"><b>View</b></a>
</div>


  </div>
</div>
        <div className="container" style={{ marginTop: '50px', maxWidth: '400px' }}>
  <div className='card'>
    <div className='card-body'>
      <h2 className='card-title'>Fetch Donor Data</h2>
      <div className='row align-items-center'>
        <div className='col'>
          <label htmlFor="fetchId" className="form-label"><b>ID Number</b></label>
          <input
            type="text"
            id="fetchId"
            className="form-control"
            placeholder="Enter ID"
            value={fetchId}
            onChange={(e) => setFetchId(e.target.value)}
          />
        </div>
      </div>
      <div className='row mt-2'>
        <div className='col'>
          <button className='btn btn-success' onClick={handleFetchData}><b>Fetch Data</b></button>
        </div>
      </div>

      {/* Display fetched donor data */}
      {fetchedDonor ? (
        <div>
          <h4>    Donor information</h4>
          <p>ID: {fetchedDonor[0]}</p>
          <p>Name: {fetchedDonor[1]}</p>
          <p>Amount: {fetchedDonor[2]}</p>
          <button className='btn btn-danger' onClick={() => handleDeleteDonor(fetchedDonor[0])}>Delete</button>
        </div>
      ) : (
        <p className="mt-3">No data available for the specified ID</p>
      )}
    </div>
  </div>
</div>




<br>
</br><br>
</br>
<br></br>
<br></br>
<br></br>
<br></br>
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
export default View;