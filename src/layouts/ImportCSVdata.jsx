import React, { useState } from "react";
import Papa from "papaparse";

function ImportCSVButton({ onImport }) {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    if (selectedFile) {
      Papa.parse(selectedFile, {
        complete: (result) => {
          onImport(result.data);
          // console.log(result.data);
        },
      });
    }
  };

  return (
    <>
      <label htmlFor="csv" className="bg-gray-500 border-solid border-2 border-gray-500 hover:bg-white hover:text-gray-400 text-white font-bold py-2 px-4 rounded">
        Import CSV
      </label>
      <input id="csv" className="hidden" type="file" accept=".csv" onChange={handleFileChange} />
      {/* {file && <p>File uploaded: {file.name}</p>} */}
    </>
  );
}

export default ImportCSVButton;