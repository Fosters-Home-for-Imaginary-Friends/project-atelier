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

const generateKey = () => {
  return Math.floor(Math.random() * 10000000);
};

const productCardComparison = (prevProductCard, newProductCard) => {
  return prevProductCard.product_id === newProductCard.product_id
    && prevProductCard.related === newProductCard.related;
}

export {getFeatures, generateKey, getAverageRating, getStarFill, productCardComparison};