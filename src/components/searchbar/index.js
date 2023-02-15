import React, {  useState } from "react";
import "./styles.css";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2"

const SearchBar = (props) => {
  const [search, setSearch] = useState("ditto");
  const {onSearch} = props
  const onChangeHandler = (e) => {
    setSearch(e.target.value);
    if(e.target.value === 0){
      onSearch(undefined)
    }
  };

  const buttonHandleClick = () => {
    onSearch(search);
  };

  return (
    <div className="searchbar_container">
      <div>
        <input
          placeholder="Buscar Pokemon"
          className="searchbar"
          onChange={onChangeHandler}
        />
      </div>

      <button className="searchbar_button" onClick={buttonHandleClick}><p>
        Buscar</p><HiOutlineMagnifyingGlass size={20}/>
      </button>
    </div>
  );
};

export default SearchBar;
