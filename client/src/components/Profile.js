import React from 'react';
import User from '../components/User'
import History from '../components/History'
import '../containers/Profile.css'  
const Profile = ({ handleLogout, user }) => {

  return (
    <>
      <br/>
      <p>Welcome, {user.email}</p>
      <button className="btn-primary" onClick={handleLogout}>Logout</button>
      <br/>
      <User/>
      <History/>
    </>
  )
}
export default Profile
