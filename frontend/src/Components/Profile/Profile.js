import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  // State variable to store user details
  const [userDetails, setUserDetails] = useState(null);

  // Fetch user details when the component mounts
  useEffect(() => {
    fetchUserProfile();
  }, []);

  // Function to fetch user details
  const fetchUserProfile = () => {
    // Fetch user profile details from your backend
    axios.get('http://localhost:2000/api/register')
      .then(response => {
        console.log('Fetched user profile:', response.data);
        setUserDetails(response.data); // Set the user details in state
      })
      .catch(error => {
        console.error('Error fetching user profile:', error);
      });
  };

  return (
    <div>
      <h2>User Profile</h2>
      {userDetails ? (
        <div>
          <p><strong>User ID:</strong> {userDetails.userid}</p>
          <p><strong>Name:</strong> {userDetails.name}</p>
          <p><strong>Email:</strong> {userDetails.emailid}</p>
          <p><strong>Mobile:</strong> {userDetails.mobile}</p>
          {/* Display more user details as needed */}
        </div>
      ) : (
        <p>Loading user profile...</p>
      )}
    </div>
  );
};

export default Profile;
