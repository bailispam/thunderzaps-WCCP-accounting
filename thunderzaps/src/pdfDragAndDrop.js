import React, { useState } from 'react';
import axios from 'axios';
import style from "./style";

const PdfContain = () => {
  const [uploadReady, setUploadReady] = useState(false);
  const [filename, setFilename] = useState("Drop your file");
  const [file, setFile] = useState(null);

  const handleDrop = (event) => {
    event.preventDefault();
    const draggedFiles = event.dataTransfer.files;
    if (draggedFiles.length > 0) {
      const uploadedFile = draggedFiles[0];
      setFile(uploadedFile);
      setUploadReady(true);
      setFilename(uploadedFile.name);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleFileUpload = () => {
    if (!file) {
      return;
    }

    const formData = new FormData();
    formData.append('file', file); // 'file' is the key, use this in Django to retrieve the file.

    axios({
      url: "http://129.146.245.100/fund",
      method: "PUT", // Or 'POST' if you prefer
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((res) => {
        console.log('File uploaded successfully:', res.data);
        setUploadReady(false);
        setFilename("Drop your file");
      })
      .catch((err) => {
        console.error('File upload failed:', err);
      });
  };

  return (
    <div>
      <div
        name="FormContainer"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        style={{ border: '2px dashed #ccc', padding: '20px', textAlign: 'center', margin: '20px 0' }}
      >
        {filename}
      </div>
      <button name="enterFileButton" hidden={!uploadReady} onClick={handleFileUpload}>
        Upload File
      </button>
    </div>
  );
};

export default PdfContain;
