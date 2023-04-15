import React, { useState } from 'react';
import "../css/Dropdown.css"

export default function Dropdown() {
  // const [selectedOption, setSelectedOption] = useState('');
  const [selectedOption, setSelectedOption] = useState('option1');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      {/* <label htmlFor="dropdown">Select an option:</label> */}
      <select id="dropdown" value={selectedOption} onChange={handleOptionChange}>
        {/* <option value="">--Please choose an option--</option> */}
        <option value="option1">Home</option>
        <option value="option2">Education</option>
        <option value="option3">Sports</option>
      </select>
      {/* {selectedOption} */}  {/*This contains the current selectedOption*/}
    </div>
  );
}
