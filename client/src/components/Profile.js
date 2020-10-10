import React from 'react';
import User from '../components/User'
import History from '../components/History'

  

const Profile = ({ handleLogout }) => {
  return (
    <>
      
      <User/>
      <History/>
      <button className="btn-primary" onClick={handleLogout}>Logout</button>
    </>
  )
}
export default Profile
