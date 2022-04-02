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
Return: Array of product data objects
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
Return: Product data object
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
Return: Array of style data objects
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
Return: Array of product_id integers
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
Return: Array of review data objects
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

export {fetchProducts, fetchProduct, fetchStyles, fetchRelated};
export {fetchReviews};
