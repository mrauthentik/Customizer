import React, { useState } from 'react';
import FileUpload from './FileUpload';
import custom from './assets/customizer-logo.jpeg'
import './App.css';

const FlyerCustomizer = () => {
  const [template, setTemplate] = useState(null);
  const [image , setImage] = useState(null);

  const handleUploadTemplate = (templateUrl) => {
    setTemplate(templateUrl);
  };

  const handleUploadImage = (imageUrl) => {
    setImage(imageUrl);
  };

  return (
    <div>
      <FileUpload onUploadTemplate={handleUploadTemplate} onUploadImage={handleUploadImage} />
      <div className="dropZone" >
        {template && <img src={custom} alt="Flyer Template" 
        style={{
             width: '100%', height: '100%', objectFit: 'contain' }} />}
        {image && (
          <img
            src={image}
            alt="Uploaded Image"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '20%', // Adjust size as needed
              height: 'auto',
            }}
          />
        )}
        {!template && !image && <p>Click and drag an image or template here</p>}
      </div>
    </div>
  );
};

export default FlyerCustomizer;
