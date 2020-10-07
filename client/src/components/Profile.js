import React from 'react'


const Profile = ({ handleLogout }) => {
  return (
    <>
      <h1>User Profile Page</h1>
      <button onClick={handleLogout}>Logout</button>
    </>
  )
}
export default Profile