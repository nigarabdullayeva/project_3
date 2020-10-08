import React, {Component} from 'react';
import '../containers/Profile.css'

class Profile extends Component {
  state={
    profileImg:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
  }
  imageHandler = (e) =>{
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2){
        this.setState({profileImg: reader.result})
      }
    }
    reader.readAsDataURL(e.target.files[0])
  }
    render() {
      const {profileImg} = this.state
      return (
       
        <>
         <br/>
        <h4>Hello, Username! </h4>
       <br/>

       <div className="container">
        <div className="row">
          <div className="column">
        <div className="profile">
          
          <img src={profileImg} alt="profile" id="img" className="img" width="150" height="150"/>
        
        <br/>
        
        <input type="file" name="image-upload" id="input" accept="images/*" onChange={this.imageHandler}/>
      <li>Username</li>
      <li>Email</li>
        </div>
        </div>
        </div>
        
        <div className="container">
        <div className="column">
        <aside className="history">History</aside>
        </div>
        </div>
        </div>
        {/* <label htmlFor="input" className="image-upload">
          <i className="material-icons">add_photo_alternate</i>
          Choose your photo
        </label> */}
        </>
      );
    }
  
  }
  
  
  export default Profile;