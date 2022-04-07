import {getRelated, getStyles, getProduct, getReviewMetadata} from '../../helpers.js';

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

const getAverageRating = (ratings) => {
  let ratingTotal = 0;
  let ratingCount = 0;

  for (let score in ratings) {
    ratingTotal += (parseInt(score) * parseInt(ratings[score]));
    ratingCount++;
  }

  return ratingCount > 0 ? ratingTotal / ratingCount : false;
};

const getStarFill = (averageRating) => {
  let stars = Array(5).fill(0);
  let decimal = averageRating % 1;
  let fullStars = averageRating - decimal;
  let percent = (Math.round(decimal * 4) / 4).toFixed(2) * 100;
  let lastStarFill = 0;
  stars.fill(20, 0, fullStars);

  switch (percent) {
    case 100:
      lastStarFill = 20;
      break;
    case 75:
      lastStarFill = 13;
      break;
    case 50:
      lastStarFill = 11;
      break;
    case 25:
      lastStarFill = 9;
      break;
  }

  if (fullStars < 5) {
      stars[fullStars] = lastStarFill;
  }
  return stars;
};

//Creates an array of objects storing the product, style, and review data for related products
// TODO: Change Function so that it only maps an array once
const getRelatedProductsData = (product_id) => {
  return getRelated(product_id)
    .then((data) => Promise.all(data.map((id) => getProduct(id)
          .then((product) => getStyles(id)
            .then((styles) => getReviewMetadata(id)
              .then((reviews) => ({product: product, styles: styles, reviews: reviews.ratings})))))))
    .catch((err) => console.error(err));
};

const getProductInfo = (product) => {
  return getStyles(product.id)
    .then((styles) => getReviewMetadata(product.id)
      .then((reviews) => ({product: product, styles: styles, reviews: reviews.ratings})));
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

const generateHash = function(str) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash;
};

const generateKey = () => {
  return Math.floor(Math.random() * 10000000);
};

export {getRelatedProductsData, currentPlaceholder, getFeatures, generateKey, getAverageRating, getStarFill, getProductInfo};