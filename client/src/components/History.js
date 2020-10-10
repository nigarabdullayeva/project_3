import React, {Component} from 'react';
import '../containers/Profile.css'

class History extends Component {
//   state={
//     profileImg:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
//   }
//   imageHandler = (e) =>{
//     const reader = new FileReader();
//     reader.onload = () => {
//       if (reader.readyState === 2){
//         this.setState({profileImg: reader.result})
//       }
//     }
//     reader.readAsDataURL(e.target.files[0])
//   }
    render() {
      
      return (
       
        <>
         
        
        <div className="container">
        <div className="column">
        <aside className="history">History</aside>
        </div>
        </div>
        
        
        </>
      );
    }
  
  }
  
  
  export default History;