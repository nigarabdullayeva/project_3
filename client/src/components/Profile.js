import React from 'react';
import User from '../components/User'
import History from '../components/History'
import Item from '../components/Item'
// import '../containers/Profile.css'  

const Profile = ({ handleLogout }) => {
  return (
    <>
      <br/>
      <button className="btn-primary" onClick={handleLogout}>Logout</button>
      <br/>
      <User/>
      <History/>
      <Item/>
    </>
  )
}
export default Profile
