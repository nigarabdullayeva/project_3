import React from 'react';
// import React, {useEffect} from 'react';
import User from '../components/User'
import History from '../components/History'
import '../containers/Profile.css' 
import axios from 'axios';

 
const Profile = ({ handleLogout, user }) => {

  const itemsForRent =  () => {
    console.log(user.email)
    axios.get('/api/items/myitems/all', {
        params:{email: user.email}
      })
      .then(({ data }) => console.log("returned items",data))
      .catch((err)=>{console.log(err)})    
  }
  //  useEffect(()=>{
    itemsForRent()
  //  },[]) 

  return (
    <>
      <br/>
      <p>You are currently signed in as : {user.email}</p>
      <button className="btn-primary" onClick={handleLogout}>Logout</button>
      <br/>
      <User/>
      <History/>
    </>
  )
}
export default Profile
