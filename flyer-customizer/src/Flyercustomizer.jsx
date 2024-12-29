import React, { useState } from 'react';
import FileUpload from './Fileupload';

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
      <div style={{ position: 'relative', width: '600px', height: '800px', marginTop: '20px' }}>
        {template && <img src={template} alt="Flyer Template" style={{ width: '100%', height: '100%' }} />}
        {image && (
          <img
            src={image}
            alt="Uploaded Image"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',  
              width: '300px', // Adjust size as needed
              height: 'auto',
            }}
          />
        )}
      </div>
    </div>
  );
};

export default FlyerCustomizer;