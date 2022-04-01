import axios from 'axios';
import config from '/config.js';

const options = {
  headers: {
    'Authorization': `${config.TOKEN}`
  }
};
const host = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp';

const fetchProducts = () => {
  axios.get(host + '/products', options)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.error(err);
    });
}

export {fetchProducts};