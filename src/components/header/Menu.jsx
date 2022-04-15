import React from "react";
import PropTypes from "prop-types";

const Menu = ({ setShowMenu }) => {

  const handleOverviewClick = () => {
    let Overview = document.getElementById('overview')
    Overview.scrollIntoView({block: 'start', behavior: 'smooth'});
    setShowMenu(false);
  }

  const handleRelatedClick = () => {
    let Related = document.getElementById('related-list');
    Related.scrollIntoView({block: 'start', behavior: 'smooth'});
    setShowMenu(false);
  }

  const handleQuestionClick = () => {
    let Question = document.getElementById('qna-container');
    Question.scrollIntoView({block: 'start', behavior: 'smooth'});
    setShowMenu(false);
  }

  const handleRatingsClick = () => {
    let Ratings = document.getElementById('ratings-reviews-container');
    Ratings.scrollIntoView({block: 'start', behavior: 'smooth'});
    setShowMenu(false);
  }

  return (
    <ul className="menu-list">
      <li
        className="menu-list-item"
        onClick={() => handleOverviewClick()}>Overview</li>
      <li
        className="menu-list-item"
        onClick={() => handleRelatedClick()}>Related</li>
      <li
        className="menu-list-item"
        onClick={() => handleQuestionClick()}>Questions</li>
      <li
        className="menu-list-item"
        onClick={() => handleRatingsClick()}>Ratings</li>
    </ul>
  )
}

Menu.propTypes = {
  setShowMenu: PropTypes.func.isRequired
}

export default Menu;