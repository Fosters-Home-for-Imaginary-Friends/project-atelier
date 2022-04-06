import {fetchRelated, fetchStyles, fetchProduct, fetchReviewMetadata} from '../../helpers.js';

const getFeatures = (overview, card) => { //Parses for features
  let featureObject = {
    currentName: overview.name,
    selectedName: card.name,
    features: {}
  }
  let featureList = featureObject.features;
  let current = overview.features;
  let selected = card.features;

  for (let i = 0; i < current.length; i++) {
    featureList[current[i].feature] = {
      current: current[i].value,
      selected: false
    };
  }
  for (let i = 0; i < selected.length; i++) {
    if (featureList[selected[i].feature]) {
      featureList[selected[i].feature].selected = selected[i].value;
    } else {
      featureList[selected[i].feature] = {
        current: false,
        selected: selected[i].value
      };
    }
  }
  return featureObject;
};

const findRelatedProducts = (product_id) => { //Returns an array of related Product Data
  return fetchRelated(product_id)
    .then((data) => Promise.all(data.map((id) => fetchProduct(id) //Returns an array of objects with product and style info
          .then((product) => fetchStyles(id)
            .then((styles) => fetchReviewMetadata(id)
              .then((reviews) => ({product: product, styles: styles, reviews: reviews})))))))
    .catch((err) => console.error(err));
};

const currentPlaceholder = {
  "id": 40356,
  "campus": "hr-rfp",
  "name": "Kaylee 1000 Sunglasses",
  "slogan": "Quo animi tempore.",
  "description": "Quisquam a quibusdam non expedita deserunt eos necessitatibus. Dolores est et consectetur est doloribus. Ipsam voluptatem et excepturi. Suscipit sit placeat qui corrupti. Et laboriosam id molestiae suscipit ipsum est vel dolore nulla.",
  "category": "Sunglasses",
  "default_price": "420.00",
  "created_at": "2021-08-13T14:38:44.588Z",
  "updated_at": "2021-08-13T14:38:44.588Z",
  "features": [
      {
          "feature": "Non-GMO",
          "value": null
      },
      {
          "feature": "Lens",
          "value": "\"Ultrasheen Silver\""
      },
      {
          "feature": "Lifetime Guarantee",
          "value": null
      },
      {
          "feature": "Fabric",
          "value": "\"95% Cotton, 5% Elastic\""
      }
  ]
};

var generateKey = function(str) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash;
};

export {findRelatedProducts, currentPlaceholder, getFeatures, generateKey};