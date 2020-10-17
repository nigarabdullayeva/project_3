import React, { Component } from 'react';
import '../containers/Profile.css'
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
            <FileUpload />
          </div>
        </div>
      </>
    );
  }
}



export default User;