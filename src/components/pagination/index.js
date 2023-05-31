import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import './styles.css'
function Pagination(props) {
  const { page, totalPages, onPreviousClick, onNextClick } = props;
  return (
    <div className="pagination_container">
      <div className="pagination">
      <button onClick={onPreviousClick}className="pagination_button">
        <FaChevronLeft size={20}/>
      </button>
      <div className="pagination_text">
        {page} of {totalPages}
      </div>
      <button onClick={onNextClick} className="pagination_button">
        <FaChevronRight size={20}/>
      </button>
      </div>
    </div>
  );
}

export default Pagination;
