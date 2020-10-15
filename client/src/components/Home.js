import React, {useState, useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


function Home() {
  const input = useRef(null);
  const [results, setResults] = useState([]); // return [[], val => setValue(val)]

  const onSubmitSearch = async (evt) => {
    evt.preventDefault();
    console.log(input.current.value);
    if(input.current && input.current.value){
    const data = await axios.get('/api/search',{params: {
      search: input.current.value,
      category: 'type' 
    }}).then(({data}) => data);
    console.log(data);
    setResults(data)
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
      <select className="form-control ">
        <option>Select category</option>
        <option>Skis</option>
        <option>Snowboards</option>
        <option>Bicycles</option>
        <option>Roller blades</option>
        <option>Golf clubs</option>
        <option>Surfboards</option>
      </select>
      <br />
      <button onClick={onSubmitSearch} className="btn btn-primary my-2 my-sm-0" type="submit">Search</button>

      {results.length ? results.map((result) => <div key={result._id}>
        {result.title},{result.category},{result.location}</div>) : null}
    </>
  )
}
export default Home