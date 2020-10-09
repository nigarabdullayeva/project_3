import React from 'react';
// import '../containers/Profile.css'
import User from '../components/User'

const Profile = ({ handleLogout }) => {
  return (
    <>
        <br/>
      <button className="btn-primary" onClick={handleLogout}>Logout</button>
      <h1>User Profile Page</h1>
      <User/>
    </>
  )
}
export default Profile;