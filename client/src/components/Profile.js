import React from 'react';
// import '../containers/Profile.css'
import User from '../components/User'

const Profile = ({ handleLogout }) => {
  return (
    <>
      <h1>User Profile Page</h1>
      <User/>
      <button className="btn-primary" onClick={handleLogout}>Logout</button>
    </>
  )
}
export default Profile
