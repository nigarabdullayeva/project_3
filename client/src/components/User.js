import React, { Component } from 'react';
import '../containers/User.css'
import FileUpload from '../components/FileUpload'


class User extends Component {
  state = {}
  imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ profileImg: reader.result })
      }
    }
    reader.readAsDataURL(e.target.files[0])
  }
  render() {
    return (
      <>
        <br />
        <br />
        <div className="row">
          
           <div className="profile"> 
            {/* <div className="top-card-layout"> */}
              {/* <img className="backgroundimg" src="https://theknow.denverpost.com/wp-content/uploads/2020/01/TR14FLYTOSKI.jpg" alt="adventure"> </img> */}

           
            {/* <img className="backgroundimg" height="100" src="https://theknow.denverpost.com/wp-content/uploads/2020/01/TR14FLYTOSKI.jpg" width="200" alt="adventure"></img> */}
            <FileUpload />
            
          
             </div>
          {/* </div> */}
        </div>
      </>
    );
  }
}

export default User;