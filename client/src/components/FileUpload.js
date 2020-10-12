// import SkeletonImage from 'antd/lib/skeleton/Image';
// import e from 'express';
import React, { useState } from 'react';
import { render } from 'react-dom';
// import { storage } from '../FirebaseUpload'

const FileUpload = () => {

    const [image, setImage] = useState(null);

    const handleChange = e => {
    if (e.target.files[0]) {
        setImage(e.target.files[0]);
        }
    };

    const handleUpload = () => {};

    console.log('image:', image)

    return (
        <div>
            Hi all!
            <input type='file' onChange={handleChange} />
            <button onClick={handleUpload}>Upload</button>
        </div>
    )
}

render(<FileUpload/>, document.querySelector('#root'));

export default FileUpload