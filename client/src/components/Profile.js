import React, { useState, useEffect } from 'react';
import User from '../components/User'
import '../containers/Profile.css'
import axios from 'axios';
import { useHistory } from 'react-router-dom';


const Profile = ({ handleLogout, user }) => {
  const history=useHistory();
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

      {results.length ? results.map((result) => <div className="slide-in-bottom card float-right w-50" key={result._id}>
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

          {(result.rentedBy != null) ?
            <button
              onClick={(id) => {
                history.go(0);
                id = result._id;
                axios.put('/api/items/' + id, { rentedBy: null })
                  .then(({ data }) => data)
                  .catch((err) => { console.log(err) })
              }
              }
              className="card-link btn btn-outline-primary">
              Make item available
         </button> : null
          }
        </div>
      </div>) : null}

    </>
  )
}
export default Profile
