import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import GoogleLogin from 'react-google-login';
import './Login.css';

const Login = () => {
  const [newLogin, setNewLogin] = useState({ username: '', password: '' });
  const [welcomeMessage, setWelcomeMessage] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleAddLogin = () => {
    setWelcomeMessage(`Welcome, ${newLogin.username}!`); // Set the welcome message
    // Navigate to the home page and pass the username as a parameter
    navigate(`/navbar?username=${newLogin.username}`);
  };

  const responseGoogle = (response) => {
    console.log(response);
    // Handle Google login response here, you may send it to your backend for authentication
  };

  return (
    
      <div className="form-container">
        <h2 className="s2">Login</h2>
        <form>
          <label className="form-label" htmlFor="id">Username</label>
          <input
            className="form-input"
            type="text"
            placeholder="id"
            id="username"
            name="Username"
            value={newLogin.username}
            onChange={(e) => setNewLogin({ ...newLogin, username: e.target.value })}
          />
          <label className="form-label" htmlFor="fname">Password</label>
          <input
            className="form-input"
            type="password"
            placeholder="password"
            id="password"
            name="password"
          />
          <button className="form-button" type="button" onClick={handleAddLogin}>Submit</button>
        </form>
        {welcomeMessage && <p className="welcome-message">{welcomeMessage}</p>}
        <GoogleLogin
          clientId="YOUR_CLIENT_ID.apps.googleusercontent.com" // Your Google Client ID
          buttonText="Login with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
      </div>
  
  );
};

export default Login;
