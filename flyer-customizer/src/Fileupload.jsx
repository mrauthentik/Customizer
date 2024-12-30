import { useDropzone } from 'react-dropzone';

const FileUpload = ({ onUploadTemplate, onUploadImage }) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length) {
        if (acceptedFiles[0].type.startsWith('image/')) {
          onUploadImage(URL.createObjectURL(acceptedFiles[0]));
        } else {
          onUploadTemplate(URL.createObjectURL(acceptedFiles[0]));
        }
      }
    },
    multiple:false,
  });

  return (
    <div>
      <div
        {...getRootProps()}
        style={{
          border: '2px dashed #ccc',
          padding: '20px',
          textAlign: 'center',
          cursor: 'pointer',
          backgroundColor: isDragActive ? '#e0e0e0' : '#f9f9f9',
        }}
      >
        <input {...getInputProps()} />
        <p>Drag & drop a flyer template or image here, or click to select</p>
      </div>
    </div>
  );
};

export default FileUpload;
