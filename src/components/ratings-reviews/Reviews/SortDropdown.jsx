import React from 'react';

let SortDropdown = (props) => {
  let listChange = (e) => {
    props.sortChange(e.target.value);
  }
  return (
    <div className="sort-dropdown-container">
      <select className="sort-dropdown" name="relevance" onChange={listChange}>
        <option value="relevant"> relevance</option>
        <option value="helpful"> helpfulness</option>
        <option value="newest"> newest</option>
      </select>
    </div>
  )
}

export default SortDropdown;