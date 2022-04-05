import React from 'react';

let SortDropdown = (props) => {
  let listChange = (e) => {
    props.sortChange(e.target.value);
  }
  return (
    <div>
    <select name="relevance" onChange={listChange}>
      <option value="relevant"> Relevance</option>
      <option value="helpful"> Helpfulness</option>
      <option value="newest"> Newest</option>
    </select>


    </div>
  )
}

export default SortDropdown;