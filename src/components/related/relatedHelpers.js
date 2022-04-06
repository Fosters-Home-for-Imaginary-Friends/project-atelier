
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
            .then((styles) => {
              return {product: product, styles: styles};
            }))
          .catch((err) => console.error(err)))))
    .catch((err) => console.error(err));
};

export {findRelatedProducts};