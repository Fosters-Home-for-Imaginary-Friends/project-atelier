import axios from 'axios';
import config from '/config.js';

const options = {
  headers: {
    'Authorization': `${config.TOKEN}`
  }
};
const host = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp';

const fetchProducts = () => {
  return axios.get(host + '/products', options)
    .then((res) => res.data)
    .catch((err) => console.error(err));
};

const fetchProduct = (product_id) => {
  return axios.get(host + '/products/:' + product_id, options)
    .then((res) => res.data)
    .catch((err) => console.error(err));
};

export {fetchProducts, fetchProduct};