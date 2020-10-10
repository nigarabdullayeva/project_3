import React from 'react'
import API from "../utils/API";



function Item() {
  //API.saveItemTest();
  console.log(API.saveItemTest());
  


  return (
      <>
      
    <form>
     <div className="form-group">
    <label for="exampleInputEmail1">Item title </label>
    <input type="text" className="form-control"/>
    <div className="form-group">
    <label for="exampleInputPassword1">Description</label>
    <input type="text" className="form-control" />
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
    </div>
    </form>     
    </>
  )

}
export default Item