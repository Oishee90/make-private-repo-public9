import React, { useState, useEffect } from 'react';


import UseAuth from '../../hook/UseAuth';

const UpdateProfilePage = () => {
  const { currentUser, updateUserProfile } = UseAuth
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);
 

  useEffect(() => {
    if (!currentUser) {
      history.push('/login'); // Redirect to login if user is not authenticated
    } else {
      // Fetch user information and update state
      setName(currentUser.displayName || '');
      setImage(currentUser.photoURL || '');
    }
  }, [currentUser, history]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await updateUserProfile(name, image);
      // Profile updated successfully
      console.log('Profile updated successfully!');
      setLoading(false);
      history.push('/'); // Redirect to home or profile page
    } catch (error) {
      console.error('Error updating profile:', error.message);
      setLoading(false);
      // Display error message to the user
    }
  };

  return (
    <div>
      <h2>Update Profile</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Image URL:</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Updating...' : 'Update Profile'}
        </button>
      </form>
    </div>
  );
};

export default UpdateProfilePage;
