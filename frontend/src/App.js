// Import React and required modules
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route, Link } from "react-router-dom";

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Components/Navbar/Navbar';

import Donate from './Components/Donate/Donate';
import Profile from './Components/Profile/Profile';
import View from './Components/View/View';
import Access from './Components/Access/Access';
import Signin from './Components/Signed/Signin';
import Signup from './Components/Signed/Signup';
import Contact from './Components/Navbar/Contact'
import Home from './Components/Navbar/Home'


// Functional component for the App
function App() {

  // JSX structure for the component
  return (
    <>
   <Routes>
                <Route exact path='/Donate' element={<Donate />}></Route>
                <Route exact path='/View' element={<View />}></Route>
                <Route exact path='/' element={<Signin />}></Route>
                <Route exact path='/Profile' element={<Profile />}></Route>
                <Route exact path='/Access' element={<Access />}></Route>
                <Route exact path='/Signin' element={<Signin />}></Route>
                <Route exact path='/Signup' element={<Signup />}></Route>
                <Route exact path='/Navbar' element={<Navbar />}></Route>
                <Route exact path='/Home' element={<Home />}></Route>
                <Route exact path='/Contact' element={<Contact />}></Route>
            </Routes>

    </>
  );
};



// Export the component
export default App;
