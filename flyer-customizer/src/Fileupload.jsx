import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

const FileUpload = ({ onUploadTemplate, onUploadImage }) => {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length) {
        if (acceptedFiles[0].type.startsWith('image/')) {
          onUploadImage(URL.createObjectURL(acceptedFiles[0]));
        } else {
          onUploadTemplate(URL.createObjectURL(acceptedFiles[0]));
        }
      }
    },
    multiple: false,
  });

  return (
    <div>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <button>Drag & drop a flyer template or image here, or click to select</button>
      </div>
    </div>
  );
};

export default FileUpload;