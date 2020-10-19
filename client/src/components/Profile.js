import React from 'react';
import User from '../components/User'
import History from '../components/History'
import '../containers/Profile.css' 
 
const Profile = ({ handleLogout, user }) => {

  return (
    <>
    
      <br/>
      <p>You are currently signed in as : {user.email}</p>
      <button className="btn-primary" onClick={handleLogout}>Logout</button>
      <br/>
      <User/>
      <br/>
      <History/>
      
    </>
  )
}
export default Profile
