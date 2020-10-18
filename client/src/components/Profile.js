import React, { useState, useEffect } from 'react';
import User from '../components/User'
import '../containers/Profile.css'
import axios from 'axios';


const Profile = ({ handleLogout, user }) => {
  const [results, setResults] = useState([]);
  useEffect(() => {
    const itemsForRent = () => {
      axios.get('/api/items/myitems/all', {
        params: { email: user.email }
      })
        .then(({ data }) => setResults(data))
        .catch((err) => { console.log(err) })
    }
    itemsForRent()
  }, [user])

  return (
    <>
      <br />
      <h3>You are currently signed in as : {user.email}</h3>
      <button className="btn-primary" onClick={handleLogout}>Logout</button>
      <br />
      <User />

      {results.length ? results.map((result) => <div className="slide-in-bottom card float-right w-25" key={result._id}>
        {/* {console.log(result)} */}
        <div className="card-body">
          <h5 className="card-header text-center">{result.title}</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Category: {result.category}</li>
            <li className="list-group-item">Description: {result.description}</li>
            <li className="list-group-item">Location: {result.location}</li>
            <li className="list-group-item">Price: {result.price}</li>
            <li className="list-group-item">Phone number: {result.phone}</li>
            <li className="list-group-item">Email: {result.email}</li>
            <li className="list-group-item">RentedBy: {result.rentedBy}</li>
          </ul>
          {/* {console.log(result._id)} */}

          {(result.rentedBy != null) ?
            <button
              onClick={(id) => {
                id = result._id;
                axios.put('/api/items/' + id, { rentedBy: null })
                  .then(({ data }) => data)
                  .catch((err) => { console.log(err) })
              }
              }
              className="card-link">
              Make item available
         </button> : null
          }
        </div>
      </div>) : null}

    </>
  )
}
export default Profile
