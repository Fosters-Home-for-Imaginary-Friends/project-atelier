import React, { useContext } from 'react';
import { QnaContext } from '../../Qna.jsx';

const Search = (props) => {
  const { setQuestion } = useContext(QnaContext);

  return (
    <form className="search-form">
      <input
        className="search-bar"
        placeholder='Have a Question? Search for answers...'
        type='text'
        onChange={(event) => {
          setQuestion(event.target.value)
        }}
      />
    </form>
  )
}

export default Search;