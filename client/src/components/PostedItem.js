import React from "react";

function PostedItem(props) {
  return (
    <div className="text-center">
      
      <h3>Title: {props.title}</h3>
      <h2>Description: {props.description}</h2>
      <h2>Location: {props.location}</h2>
      <h2>Price: {props.released}</h2>
      <h2>Location: {props.released}</h2>
      <img alt={props.title} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} />
    </div>
  );
}

export default PostedItem;