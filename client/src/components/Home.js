import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "../components/Card"

function Home() {
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
      <input className="form-control" type="text" placeholder="Search for gear in this city" aria-label="Search" /><br />
      <select onChange={handleSetItem} className="form-control ">
        <option>Select category</option>
        <option>Skis</option>
        <option>Snowboards</option>
        <option>Bicycles</option>
        <option>Roller blades</option>
        <option>Golf clubs</option>
        <option>Surfboards</option>
      </select>
      <br />
      <button className="btn btn-primary my-2 my-sm-0" type="submit">Search</button>

      <br/>
      <Card />

    </>
  )
}
export default Home