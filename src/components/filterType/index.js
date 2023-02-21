import React, { useState } from 'react';
import "./styles.css"

import {FaFilter} from "react-icons/fa"





const Select = ({ options, value, onChange }) => {
     const [open,setIsOpen] = useState(true)
     const handleOpen = () =>{
             setIsOpen(!open);
           }
  return (<>
    <button onClick={handleOpen} className="filter_button"><FaFilter size={40}  /></button>
    {open && <select value={value} onChange={onChange} className="custom-select">
      {options.map((option) => (
        <option key={option.value} value={option.value} className="custom-option">
          {option.label}
        </option>
      ))}
    </select> }
    </>
  );
};

export default Select;