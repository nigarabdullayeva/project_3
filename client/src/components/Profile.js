import React from 'react'


const Profile = ({ handleLogout }) => {
  return (
    <>
      <h1>User Profile Page</h1>
      <button className="btn-primary" onClick={handleLogout}>Logout</button>
    </>
  )
}
export default Profile