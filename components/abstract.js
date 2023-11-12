import { useState, React } from "react";
import "tailwindcss/tailwind.css";

const Abstract = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  // On file select (from the pop up)
  const onFileChange = (event) => {
    // Update the state
    setSelectedFile(event.target.files[0]);
  };

  // On file upload (click the upload button)
  const onFileUpload = () => {
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append("myFile", selectedFile, selectedFile.name);

    // Details of the uploaded file
    console.log(selectedFile);
  };

  return (
    <div className="mx-[20px] mt-[20px]">
      <h1 className="text-[28px] ">Upload your Abstract</h1>
      <div>
        <input type="file" accept=".ppt, .pptx" onChange={onFileChange} />
        <button className="bg-[#39a7ff] text-white p-2 rounded-md cursor-pointer">
          Choose File
        </button>
      </div>
    </div>
  );
};

export default Abstract;