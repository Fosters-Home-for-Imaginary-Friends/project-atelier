import axios from 'axios';
import config from '/config.js';

//Import whatever functions you want from this file
//API get requests return promises that resolve to your data
//Check the parameter requirements next to each function

const options = {
  headers: {
    'Authorization': `${config.TOKEN}`
  }
};

const host = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp';

/*------------------------ PRODUCTS ------------------------ */
/*------------------------ PRODUCTS ------------------------ */
/*------------------------ PRODUCTS ------------------------ */

/*
Function Description: Fetches product data for all products in database
Return: Promise resolving to an array of product data objects
Parameter Requirements: None
Parameter Descriptions:
  page: query page
  count: # of items per page
*/
const fetchProducts = (page = 1, count = 5) => {

  return axios.get(host + `/products?page=${page}&count=${count}`, options)
    .then((res) => res.data)
    .catch((err) => console.error(err));
};

/*
Function Description: Fetches product data for a queried product (queried using product_id)
Return: Promise resolving to a product data object
Parameter Requirements: product_id
Parameter Descriptions:
  product_id: product to query for (id property of product data object)
*/
const fetchProduct = (product_id) => {
  return axios.get(host + '/products/' + product_id, options)
    .then((res) => res.data)
    .catch((err) => console.error(err));
};

/*
Function Description: Fetches style data for a queried product
Return: Promise resolving to an array of style data objects
Parameter Requirements: product_id
Parameter Descriptions:
  product_id: product to query for (id property of product data object)
*/
const fetchStyles = (product_id) => {
  return axios.get(host + '/products/' + product_id + '/styles', options)
    .then((res) => res.data.results)
    .catch((err) => console.error(err));
};

/*
Function Description: Fetches product_id of products related to a queried product
Return: Promise resolving to an array of product_id integers
Parameter Requirements: product_id
Parameter Descriptions:
  product_id: product to query for (id property of product data object)
*/
const fetchRelated = (product_id) => {
  return axios.get(host + '/products/' + product_id + '/related', options)
    .then((res) => res.data)
    .catch((err) => console.error(err));
}

/*------------------------ REVIEWS ------------------------ */
/*------------------------ REVIEWS ------------------------ */
/*------------------------ REVIEWS ------------------------ */

/*
Function Description: Fetches all review data for a queried product
Return: Promise resolving to an array of review data objects
Parameter Requirements: product_id
Parameter Descriptions:
  product_id: product to query for (id property of product data object)
  page: query page
  count: # of items per page
  sort: sorts results by "newest", "helpful", or "relevant"
*/
const fetchReviews = (product_id, page = 1, count = 2, sort = "relevant") => {
  return axios.get(host + `/reviews/?product_id=${product_id}&page=${page}&count=${count}&sort=${sort}`, options)
    .then((res) => res.data.results)
    .catch((err) => console.error(err));
};

/*
Function Description: Fetches review meta data for a queried product
Return: Promise resolving to a review meta data object
Parameter Requirements: product_id
Parameter Descriptions:
  product_id: product to query for (id property of product data object)
*/
const fetchReviewMetadata = (product_id) => {
  return axios.get(host + `/reviews/meta/?product_id=${product_id}`, options)
    .then((res) => res.data)
    .catch((err) => console.error(err));
};

/*
Function Description: Post a review by feeding it a review object
Return: Promise resolving to the post response
Parameter Requirements: reviewObject
Parameter Descriptions:
  reviewObject: A review data object
*/
const postReview = (reviewObject) => {
  return axios.post(host + `/reviews`, reviewObject, options)
    .catch((err) => console.error(err));
};

/*
Function Description: Marks a review as helpful
Return: Promise resolving to the server response
Parameter Requirements: review_id
Parameter Descriptions:
  review_id: review to mark as helpful
*/
const putReviewHelpful = (review_id) => {
  return axios.put(host + `/reviews/${review_id}/helpful`, {review_id: review_id}, options)
    .catch((err) => console.error(err));
};

/*------------------------ Questions and Answers ------------------------ */
/*------------------------ Questions and Answers ------------------------ */
/*------------------------ Questions and Answers ------------------------ */

/*
Function Description: Fetches all questions for a queried product
Return: Promise resolving to an array of question data objects
Parameter Requirements: product_id
Parameter Descriptions:
  product_id: product to query for (id property of product data object)
  page: query page
  count: # of items per page
*/

<<<<<<< HEAD
const getQuestions = (product_id, page = 1, count = 4) => {
  return axios.get(host + `/qa/questions/?product_id=${product_id}&page=${page}&count=${count}`)
=======
const getQuestions = (product_id, page = 1, count = 5) => {
  return axios.get(host + `/qa/questions/?product_id=${product_id}&page=${page}&count=${count}`, options)
>>>>>>> master
    .then((res) => res.data.results)
    .catch((err) => console.error(err));
};

/*
Function Description: Fetches all answers for a queried product question
Return: Promise resolving to an array of answer data objects
Parameter Requirements: question_id
Parameter Descriptions:
  question_id: question to query answers for
  page: query page
  count: # of items per page
*/

const getAnswers = (question_id, page = 1, count = 5) => {
  return axios.get(host + `/qa/questions/${question_id}/answers/?page=${page}&count=${count}`, options)
  .then((res) => res.data.results)
  .catch((err) => console.error(err));
};

/*
Function Description: Posts a question for a product
Return: Promise resolving to the server response
Parameter Requirements: questionObject
Parameter Descriptions:
  questionObject: A question data object
*/

const postQuestion = (questionObject) => {
  return axios.post(host + `/qa/questions`, questionObject, options)
    .catch((err) => console.error(err));
};

/*
Function Description: Post an answer to a question
Return: Promise resolving to the server response
Parameter Requirements: question_id, answerObject
Parameter Descriptions:
  question_id: Question to add an answer to
  answerObject: An answer data object
*/

const postAnswer = (question_id, answerObject) => {
  return axios.post(host + `/qa/questions/${question_id}/answers`, answerObject, options)
    .catch((err) => console.error(err));
};

/*
Function Description: Mark a question as helpful
Return: Promise resolving to the server response
Parameter Requirements: question_id
Parameter Descriptions:
  question_id: ID of question to mark as helpful
*/

const putQuestionHelpful = (question_id) => {
  return axios.put(host + `/qa/questions/${question_id}/helpful`, {}, options)
    .catch((err) => console.error(err));
};

/*
Function Description: Report a question
Return: Promise resolving to the server response
Parameter Requirements: question_id
Parameter Descriptions:
  question_id: ID of question to mark as helpful
*/

const putQuestionReport = (question_id) => {
  return axios.put(host + `/qa/questions/${question_id}/report`, {}, options)
    .catch((err) => console.error(err));

};

/*
Function Description: Mark an answer as helpful
Return: Promise resolving to the server response
Parameter Requirements: answer_id
Parameter Descriptions:
  answer_id: ID of answer to mark as helpful
*/

const putAnswerHelpful = (answer_id) => {
  return axios.put(host + `/qa/answers/${answer_id}/helpful`, {}, options)
    .catch((err) => console.error(err));
};

/*
Function Description: Report an answer
Return: Promise resolving to the server response
Parameter Requirements: answer_id
Parameter Descriptions:
  answer_id: ID of answer to report
*/

const putAnswerReport = (answer_id) => {
  return axios.put(host + `/qa/answers/${answer_id}/report`, {}, options)
    .catch((err) => console.error(err));
};

/*
Function Description: Reports a review (no longer returned in query)
Return: Promise resolving to the server response
Parameter Requirements: review_id
Parameter Descriptions:
  review_id: review to report
*/
const reportReview = (review_id) => {
  return axios.put(host + `/reviews/${review_id}/report`, {}, options)
    .then((res) => res)
    .catch((err) => console.error(err));
};


//API call helper function documentation template
/*
Function Description:
Return: Promise resolving to
Parameter Requirements:
Parameter Descriptions:
*/

export {fetchProducts, fetchProduct, fetchStyles, fetchRelated};
export {fetchReviews, fetchReviewMetadata, postReview, putReviewHelpful, reportReview};
export {getQuestions, getAnswers, postQuestion, postAnswer, putQuestionHelpful, putQuestionReport, putAnswerHelpful, putAnswerReport};
