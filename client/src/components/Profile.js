import React from 'react';
// import '../containers/Profile.css'
import User from '../components/User'
import Item from "../components/Item"

const Profile = ({ handleLogout }) => {
  return (
    <>
        <br/>
      <button className="btn-primary" onClick={handleLogout}>Logout</button>
      <h1>User Profile Page</h1>
      <User/>

      <Item/>
    </>
  )
}
export default Profile
