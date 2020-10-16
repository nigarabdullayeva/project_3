// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import API from "../utils/API";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import List from "../components/List"

// function listItem() {
// const [item, setItem] = useState({})
// const [formObject, setFormObject] = useState({})

//   useEffect(() => {
//     loadItems()
//   }, [])

//   function loadItems () {
//       API.getItems()
//       .then(res =>
//       setItem(res.data)
//       ).catch (err => console.log(err));
//   };

  
//   return (
//      <div className="card">
//      <h1> All items </h1>
//       <img src={item.photoURL} className="card-img-top" />
//       <div className="card-body">
//        <h3 className="card-title">Title: {item.
//        title}</h3>
//        <p className="card-text">Description:{item.description}</p>
//       </div>
//       <ul className="list-group list-group-flush">
//        <li className="list-group-item">Location:{item.location} </li>
//        <li className="list-group-item">Price:{item.price} </li>
//        <li className="list-group-item">Contact Person: {item.userName}</li>
//        <li className="list-group-item">Phone: {item.phone} </li>
//       </ul>
//     <div className="card-body">
//     <a href="#" className="card-link">Rent Item</a>
//   </div>
//  </div>
//   )
// } 
// export default listItem



