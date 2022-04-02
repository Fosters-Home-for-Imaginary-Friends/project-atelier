import React from "react";
import CSSStyles from "./CSSStyles.jsx";
import Overview from "./overview/Overview.jsx";
import ProductLists from "./related/ProductLists.jsx";
import Ratings from "./ratings/Ratings.jsx";
import {fetchProducts, fetchProduct, fetchStyles, fetchRelated} from "../helpers.js";
import {fetchReviews, fetchReviewMetadata, postReview, putReviewHelpful} from "../helpers.js";
import {getQuestions, getAnswers, postQuestion, postAnswer, putQuestionHelpful, putQuestionReport, putAnswerHelpful, putAnswerReport} from "../helpers.js";


const App = () => {

  return (
    <div>
      <CSSStyles />
      <Overview />
      <ProductLists />
      <Ratings />
    </div>
  );
}

export default App;