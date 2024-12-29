import React, { useState } from 'react';
import FileUpload from './FileUpload';
import './App.css';

const FlyerCustomizer = () => {
  const [template, setTemplate] = useState(null);
  const [image, setImage] = useState(null);

  const handleUploadTemplate = (templateUrl) => {
    setTemplate(templateUrl);
  };

  const handleUploadImage = (imageUrl) => {
    setImage(imageUrl);
  };

  return (
    <div>
      <FileUpload onUploadTemplate={handleUploadTemplate} onUploadImage={handleUploadImage} />
      <div
        className="dropZone"
        style={{
          position: 'relative',
          width: '100%',
          height: '500px', // Adjust height as needed
          border: '2px solid #ccc',
          backgroundColor: '#f0f0f0',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        {template && <img src={template} alt="Flyer Template" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />}
        {image && (
          <img
            src={image}
            alt="Uploaded Image"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '60%', // Adjust size as needed
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
