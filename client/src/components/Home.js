import React, { useState, useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


function Home({user}) {
  const history=useHistory();
  const input = useRef(null);
 
  const [results, setResults] = useState([]);
  const [cat, setCat] = useState("");

  const changeCat = async (evt) => {
    evt.preventDefault();
    console.log(cat);
    await setCat(evt.target.value)
  }

  const onSubmitSearch = async (evt) => {
    evt.preventDefault();
    console.log(input.current.value,cat);
    if (input.current.value!=="" || cat!=="") {
      const data = await axios.get('/api/search', {
        params: {
          search: input.current.value,
          category: cat
        }
      }).then(({ data }) => data)
      .catch((err)=>{console.log(err)})
      console.log(data);
      setResults(data)
    }
  }
  const rentIt = (itemId)=>{
    if (user && user.uid) {
      axios.put('/api/items/'+itemId,{rentedBy:user.email})
      .then(({ data }) => data)
      .catch((err)=>{console.log(err)})
    }else{
    console.log(user);
    history.push("/login")
    }
  }
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="jumbotron text-center">
        <h1>Sport Adventures</h1>
        <h3>Find the right gear to fuel your next adventure</h3></div>
      <input ref={input} className="form-control" type="text" placeholder="Search for gear in this city" aria-label="Search" /><br />
      <select onChange={changeCat} className="form-control ">
        <option value="">Select category</option>
        <option value="skis">Skis</option>
        <option value="snowboards">Snowboards</option>
        <option value="bicycles">Bicycles</option>
        <option value="roller blades">Roller blades</option>
        <option value="golf clubs">Golf clubs</option>
        <option value="surfboards">Surfboards</option>
      </select>
      <br />
      <div className="text-center">
        <button onClick={onSubmitSearch} className="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
      </div>
      <br />

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
          </ul>
          <button onClick={()=> {
            history.go(0);
            rentIt(result._id)}} className="card-link">Rent it</button>
        </div>

      </div>) : null}
    </>
  )
}
export default Home