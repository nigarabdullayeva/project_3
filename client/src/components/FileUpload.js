// import { storage } from 'firebase';
// import SkeletonImage from 'antd/lib/skeleton/Image';
// import e from 'express';
import React, { useState } from 'react';
import { render } from 'react-dom';
import { storage } from '../fire'
// import { storage } from '../FirebaseUpload/index'


const FileUpload = () => {

    const [image, setImage] = useState(null);

    const handleChange = e => {
    if (e.target.files[0]) {
        setImage(e.target.files[0]);
        }
    };
    
    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            snapshot => {},
            error => {
                // console.log(error);
            },
            () => {
                storage
                .ref("images")
                .child(image.name)
                .getDownloadURL()
                .then(url => {
                    console.log(url);
                })
            }
        )
    };

    console.log('image:', image)

    return (
        <div className="upload">
            <br/>
            Upload photos
            <input type='file' onChange={handleChange} />
            <button onClick={handleUpload}>Upload</button>
        </div>
    )
}

render(<FileUpload/>, document.querySelector('#root'));

export default FileUpload