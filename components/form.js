import React, { useEffect, useState } from "react";

import "tailwindcss/tailwind.css";

export default function Forms() {
  const [teamMembers, setTeamMembers] = useState([1]);
  const maxTeamMembers = 6;
  const [selectedOption, setSelectedOption] = useState(4);
  useEffect(() => {
    // Generate team members when the selected option changes
    if (selectedOption > 0 && selectedOption <= maxTeamMembers) {
      const newTeamMembers = Array.from(
        { length: selectedOption },
        (_, index) => index + 1
      );
      setTeamMembers(newTeamMembers);
    }
  }, [selectedOption]);
  // tracks

  // abstract
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
  //abstract 2
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSub = async () => {
    if (!file) {
      console.error("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("https://forms.gle/zy4n3ipZfZWaWxaA6", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("File submitted successfully");
      } else {
        console.error("File submission failed");
      }
    } catch (error) {
      console.error("Error submitting file:", error);
    }
  };
  return (
    <form
      className="flex flex-col items-center  w-[100%] min-h-screen bg-[#0e0f62]"
      action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdvgoPeIs7DYNlr1C2-hjQt9-g28w0IX_Vq7fQPYm48Ip8QOg/formResponse"
      method="post"
    >
      <div className="w-[100%] md:w-[75%] lg:w-[60%] bg-white md:mt-[30px] md:rounded-[8px] md:mb-[20px]">
        <div className="bg-[#39a7ff] p-2  md:rounded-t-[8px]">
          <h1 className="text-white">Hack Revolution Registration Form</h1>
        </div>
        <div>
          <h1 className="text-black mx-[20px] mt-[20px] text-[28px]">
            Team Details
          </h1>
        </div>
        {/* <div className="flex flex-col items-center">
          <div className="w-full flex flex-col mt-[20px]">
            <span className="mx-[20px]">Enter Project Name</span>
            <input
              className="items-center justify-center mx-[20px] mt-[10px] border border-gray-300 p-2 rounded-md"
              placeholder="Project Name"
            />
          </div>
        </div> */}

        <div className="flex flex-col items-center">
          <div className="w-full flex flex-col mt-[20px]">
            <span className="mx-[20px]">Enter Team Name</span>
            <input
              className="items-center justify-center mx-[20px] mt-[10px] border border-gray-300 p-2 rounded-md"
              placeholder="Team Name"
              name="entry.1103247337"
              type="text"
            />
          </div>
        </div>

        <div>
          <h1 className="text-black mx-[20px] mt-[20px] text-[28px]">
            Team Lead Details
          </h1>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-full flex flex-col mt-[20px]">
            <span className="mx-[20px]">Enter Name</span>
            <input
              className="items-center justify-center mx-[20px] mt-[10px] border border-gray-300 p-2 rounded-md"
              placeholder="Team Lead Name"
              name="entry.1623103648"
              type="text"
            />
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-full flex flex-col mt-[20px]">
            <span className="mx-[20px]">Enter College</span>
            <input
              className="items-center justify-center mx-[20px] mt-[10px] border border-gray-300 p-2 rounded-md"
              placeholder="College Name"
              name="entry.1310005918"
              type="text"
            />
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="flex flex-col mt-[20px]">
            <span className="mx-[20px]">Enter Branch</span>
            <input
              className="items-center justify-center mx-[20px] mt-[10px] border border-gray-300 p-2 rounded-md"
              placeholder="Branch"
              name="entry.736663835"
              type="text"
            />
          </div>

          <div className="flex flex-col mt-[20px]">
            <span className="mx-[20px]">Enter Year</span>
            <input
              className="items-center justify-center mx-[20px] mt-[10px] border border-gray-300 p-2 rounded-md"
              placeholder="Year"
              name="entry.902096733"
              type="number"
            />
          </div>
          <div className="flex flex-col mt-[20px]">
            <span className="mx-[20px]">Enter Roll No</span>
            <input
              className="items-center justify-center mx-[20px] mt-[10px] border border-gray-300 p-2 rounded-md"
              placeholder="Roll No"
              name="entry.508171772"
              type="number"
            />
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="flex flex-col items-center">
            <div className="w-full flex flex-col mt-[20px]">
              <span className="mx-[20px]">Enter Mobile No</span>
              <input
                className="items-center justify-center mx-[20px] mt-[10px] border border-gray-300 p-2 rounded-md"
                placeholder="Mobile No"
                name="entry.1830224902"
                type="tel"
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-full flex flex-col mt-[20px]">
              <span className="mx-[20px]">Enter E-Mail</span>
              <input
                className="items-center justify-center mx-[20px] mt-[10px] border border-gray-300 p-2 rounded-md"
                placeholder="Email"
                name="entry.78167992"
                type="email"
              />
            </div>
          </div>
        </div>

        <div className="mx-[20px] mt-[20px] w-[100%] flex flex-row">
          <h1 className="text-black text-[28px]">Select Team Size:</h1>
          <select
            className="bg-white text-black text-[28px] mx-[10px] rounded-md"
            value={selectedOption}
            onChange={(e) => setSelectedOption(parseInt(e.target.value, 10))}
            type="radio"
            name="entry.208443343"
          >
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
          </select>
        </div>

        <div className="border border-gray-300 mx-[20px] my-[10px] py-[20px] rounded-[8px]">
          <div>
            {/* team member */}
            <h1 className="text-black mx-[20px] text-[28px]">Team Member 1</h1>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-full flex flex-col mt-[20px]">
              <span className="mx-[20px]">Enter Name</span>
              <input
                className="items-center justify-center mx-[20px] mt-[10px] border border-gray-300 p-2 rounded-md"
                placeholder="Name"
                name="entry.990198595"
              />
            </div>
          </div>
          <div className="flex flex-col mt-[20px]">
            <span className="mx-[20px]">Enter Roll No</span>
            <input
              className="items-center justify-center mx-[20px] mt-[10px] border border-gray-300 p-2 rounded-md"
              placeholder="Roll No"
              name="entry.1257053591"
            />
          </div>
        </div>

        <div className="border border-gray-300 mx-[20px] my-[10px] py-[20px] rounded-[8px]">
          <div>
            {/* team member 2*/}
            <h1 className="text-black mx-[20px] text-[28px]">Team Member 2</h1>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-full flex flex-col mt-[20px]">
              <span className="mx-[20px]">Enter Name</span>
              <input
                className="items-center justify-center mx-[20px] mt-[10px] border border-gray-300 p-2 rounded-md"
                placeholder="Name"
                name="entry.1703910065"
              />
            </div>
          </div>

          <div className="flex flex-col mt-[20px]">
            <span className="mx-[20px]">Enter Roll No</span>
            <input
              className="items-center justify-center mx-[20px] mt-[10px] border border-gray-300 p-2 rounded-md"
              placeholder="Roll No"
              name="entry.1034705848"
            />
          </div>
        </div>

        <div className="border border-gray-300 mx-[20px] my-[10px] py-[20px] rounded-[8px]">
          <div>
            {/* team member */}
            <h1 className="text-black mx-[20px] text-[28px]">Team Member 3</h1>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-full flex flex-col mt-[20px]">
              <span className="mx-[20px]">Enter Name</span>
              <input
                className="items-center justify-center mx-[20px] mt-[10px] border border-gray-300 p-2 rounded-md"
                placeholder="Name"
                name="entry.91481992"
              />
            </div>
          </div>

          <div className="flex flex-col mt-[20px]">
            <span className="mx-[20px]">Enter Roll No</span>
            <input
              className="items-center justify-center mx-[20px] mt-[10px] border border-gray-300 p-2 rounded-md"
              placeholder="Roll No"
              name="entry.554841891"
            />
          </div>
        </div>

        <div className="border border-gray-300 mx-[20px] my-[10px] py-[20px] rounded-[8px]">
          <div>
            {/* team member */}
            <h1 className="text-black mx-[20px] text-[28px]">Team Member 4</h1>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-full flex flex-col mt-[20px]">
              <span className="mx-[20px]">Enter Name</span>
              <input
                className="items-center justify-center mx-[20px] mt-[10px] border border-gray-300 p-2 rounded-md"
                placeholder="Name"
                name="entry.1910978085"
              />
            </div>
          </div>

          <div className="flex flex-col mt-[20px]">
            <span className="mx-[20px]">Enter Roll No</span>
            <input
              className="items-center justify-center mx-[20px] mt-[10px] border border-gray-300 p-2 rounded-md"
              placeholder="Roll No"
              name="entry.393674120"
            />
          </div>
        </div>

        <div className="border border-gray-300 mx-[20px] my-[10px] py-[20px] rounded-[8px]">
          <div>
            {/* team member */}
            <h1 className="text-black mx-[20px] text-[28px]">Team Member 5</h1>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-full flex flex-col mt-[20px]">
              <span className="mx-[20px]">Enter Name</span>
              <input
                className="items-center justify-center mx-[20px] mt-[10px] border border-gray-300 p-2 rounded-md"
                placeholder="Name"
                name="entry.1533344723"
              />
            </div>
          </div>

          <div className="flex flex-col mt-[20px]">
            <span className="mx-[20px]">Enter Roll No</span>
            <input
              className="items-center justify-center mx-[20px] mt-[10px] border border-gray-300 p-2 rounded-md"
              placeholder="Roll No"
              name="entry.566159635"
            />
          </div>
        </div>
        {/* tracks */}
        <div className="mx-[20px] mt-[20px]">
          <label className="text-[28px]">
            Select Track
            <select
              className="text-gray-700 text-[28px] mx-[10px] rounded-md"
              name="entry.908273825"
              type="radio"
            >
              <option value={"Generic Software"}>Generic Software</option>
              <option value={"Generic Hardware"}>Generic Hardware</option>
              <option value={"Health Care"}>Health Care</option>
              <option value={"Fin-Tech"}>Fin-Tech</option>
            </select>
          </label>
              
        </div>

        {/* <Abstract /> */}
        <div className="mx-[20px] mt-[20px]">
          <h1 className="text-[28px] ">Upload your Abstract</h1>
          <div>
            <input
              type="file"
              accept=".ppt, .pptx"
              id="fileInput"
              name="entry.429654859"
              onChange={handleFileChange}
            />
            <button
              className="bg-[#39a7ff] text-white p-2 rounded-md cursor-pointer"
              onClick={handleSub}
            >
              Choose File
            </button>
          </div>
        </div>
        <button
          className="w-full text-center bg-[#39a7ff] mt-[20px] p-2 rounded-b-[8px] text-white cursor-pointer"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
