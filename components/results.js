import React from "react";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailIcon from "@mui/icons-material/Email";
import AddressIcon from "@mui/icons-material/LocationOn";

const Results = ({ team }) => {
  return (
    <div>
      <div className="text-white mt-3 px-7 text-left font-mono font-bold text-lg">{team}</div>
    </div>
  );
};

export default Results;