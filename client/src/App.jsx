import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [file, setFile] = useState(null); // define state for selected file

  const handleFileInputChange = (e) => {
    setFile(e.target.files[0]); // update state with selected file
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    axios.post('https://uploadten.herokuapp.com/upload', formData, { // Or  PATH  = "http://localhost:3001"
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(res => console.log(res))
    .catch(err => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileInputChange} />
      <button type="submit">Upload</button>
    </form>
  );
}

export default App;
