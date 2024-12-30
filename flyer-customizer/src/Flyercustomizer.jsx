import React, { useState } from 'react';
import FileUpload from './FileUpload';
import Draggable from 'react-draggable';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import './App.css';

const FlyerCustomizer = () => {
  const [template, setTemplate] = useState(null);
  const [images, setImages] = useState([]); // To hold multiple images
  const [cropper, setCropper] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null); // To track cropping

  const handleUploadTemplate = (templateUrl) => {
    setTemplate(templateUrl);
  };

  const handleUploadImage = (imageUrl) => {
    setImages((prevImages) => [...prevImages, { src: imageUrl, cropped: null }]);
  };

  const startCropping = (index) => {
    setSelectedImageIndex(index);
  };

  const onCrop = () => {
    if (cropper && selectedImageIndex !== null) {
      const croppedData = cropper.getCroppedCanvas().toDataURL();
      setImages((prevImages) =>
        prevImages.map((img, idx) =>
          idx === selectedImageIndex ? { ...img, cropped: croppedData } : img
        )
      );
      setSelectedImageIndex(null); // Exit cropping mode
    }
  };

  return (
    <div>
      <FileUpload onUploadTemplate={handleUploadTemplate} onUploadImage={handleUploadImage} />
      <div className="flyer-container">
        {template && (
          <img
            src={template}
            alt="Flyer Template"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            }}
          />
        )}
        {images.map((img, index) =>
          selectedImageIndex === index ? (
            // Cropper for the selected image
            <div key={index} style={{ display: 'inline-block', position: 'relative' }}>
              <Cropper
                src={img.src}
                style={{ height: 300, width: '100%' }}
                initialAspectRatio={1}
                aspectRatio={1}
                guides={false}
                cropBoxResizable
                viewMode={1}
                dragMode="move"
                cropBoxMovable
                autoCropArea={0.8}
                onInitialized={(instance) => setCropper(instance)}
              />
              <button className='crop-btn' onClick={onCrop}>Crop</button>
            </div>
          ) : (
            // Draggable cropped image or original if not cropped
            <Draggable key={index}>
              <img
                src={img.cropped || img.src}
                alt={`Uploaded ${index + 1}`}
                onDoubleClick={() => startCropping(index)} // Double-click to start cropping
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '20%',
                }}
              />
            </Draggable>
          )
        )}
      </div>
    </div>
  );
};

export default FlyerCustomizer;
