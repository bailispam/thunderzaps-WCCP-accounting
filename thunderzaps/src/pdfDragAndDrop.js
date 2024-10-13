import React, { useState } from 'react';
import style from "./style";

const PdfContain = () => {
  const [uploadReady, setUploadReady] = useState(false);
  const [filename, setFilename] = useState("Drop your file"); 

  const handleDrop = (event) => {
    event.preventDefault(); 
    const draggedFiles = event.dataTransfer.files; 
    if (draggedFiles.length > 0) {
      setUploadReady(true); 
      setFilename(draggedFiles[0].name);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault(); 
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
      <button name="enterFileButton" hidden={!uploadReady}>
        Enter file
      </button>
    </div>
  );
};

export default PdfContain;