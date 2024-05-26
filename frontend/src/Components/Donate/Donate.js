import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {  Link } from "react-router-dom";
import './Donate.css'

const Donate = () => {
  const [donors, setDonors] = useState([]);
  const [newDonor, setNewDonor] = useState({ id: '', name: '', amount: '' });
  const [thankYouMessage, setThankYouMessage] = useState('');

  useEffect(() => {
    fetchDonors();
  }, []);

  const fetchDonors = () => {
    axios.get('http://localhost:5000/api/donors')
      .then(response => {
        console.log('Fetched donors:', response.data);
        setDonors(response.data);
      })
      .catch(error => console.error('Error fetching donors:', error));
  };

  const handleAddDonor = () => {
    axios.post('http://localhost:5000/api/donors', newDonor)
      .then(response => {
        console.log(response.data);
        fetchDonors();
        setNewDonor({ id: '', name: '', amount: '' });
        setThankYouMessage(`Thank you, ${newDonor.name}!`); // Set the thank you message
      })
      .catch(error => console.error('Error adding donor:', error));
  };

  return (<>
    <div className="s1">
            <div className="social">
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-google"></i>
                    </div>
            </div>
            <div className="m">
           
            <i class="fa-solid fa-piggy-bank">    FUND FLOW</i>
                  
                <nav>
                   
                    <ul>
                        <li><Link to="/Navbar"><b>Home</b></Link></li>
                        <li><Link to="/Donate"><b>Donate</b></Link></li>
                        <li><Link to="/View"><b>Access Donor</b></Link></li>
                        <li><Link to="/Aboutus"><b>About</b></Link></li>
                        <li><Link to="/Contact"><b>Contact</b></Link></li>
                        <li><Link  to="/Signin"><b>Logout</b></Link></li>
                    </ul>
                </nav>
            </div>
   <div className='i1'>
    <img src="https://img.freepik.com/free-vector/charity-icons-flat-round-set_1284-34021.jpg"/>
    <div className="form-container1">
      <h2 className="s2">Donate</h2>
      <form>
        <label className="form-label" htmlFor="id">Id number</label>
        <input
          className="form-input"
          type="text"
          placeholder="id"
          id="id"
          name="id"
          value={newDonor.id}
          onChange={(e) => setNewDonor({ ...newDonor, id: e.target.value })}
        />

        <label className="form-label" htmlFor="fname"> Name</label>
        <input
          className="form-input"
          type="text"
          placeholder="Name"
          id="name"
          name="firstname"
          value={newDonor.name}
          onChange={(e) => setNewDonor({ ...newDonor, name: e.target.value })}
        />

        <label className="form-label" htmlFor="amount">Amount</label>
        <input
          className="form-input"
          type="number"
          placeholder="Amount"
          id="amount"
          name="Amount"
          value={newDonor.amount}
          onChange={(e) => setNewDonor({ ...newDonor, amount: e.target.value })}
        />

        <button className="form-button" type="button" onClick={handleAddDonor}>Add Donor</button>
      </form>

      {thankYouMessage && <p className="thank-you-message">{thankYouMessage}</p>}
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
          <h4>online shop</h4>
          <ul>
            <li><a href="#">watch</a></li>
            <li><a href="#">bag</a></li>
            <li><a href="#">shoes</a></li>
            <li><a href="#">dress</a></li>
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

export default Donate;
