import React from 'react'
import papaprse from 'papaparse';


function ExportCSVdata({ data, filename }) {

    const handleExport = () => {
        const csv = papaprse.unparse(data);
        const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
        const link = document.createElement("a");
        if (link.download !== undefined) {
          const url = URL.createObjectURL(blob);
          link.setAttribute("href", url);
          link.setAttribute("download", filename || "data.csv");
          link.style.visibility = "hidden";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      };



  return (
    <>
        <button className="bg-white-500 hover:bg-gray-400 border-solid border-2 border-gray-500 hover:text-white text-black-100 ml-4 font-bold py-2 px-4 rounded" onClick={handleExport}>Export</button>
    </>
  )
}

export default ExportCSVdata