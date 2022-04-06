import React, {useState, useEffect} from 'react';
import ProductList from './ProductList.jsx';
import ProductCard from './ProductCard.jsx';
import CompareModal from './CompareModal.jsx';
import {fetchRelated, fetchProduct, fetchStyles} from '../../helpers.js';

//Placeholder for the data from the currently view product in the overview component
const CurrentProduct = {
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
}

const ProductLists = () => {
  const [relatedCards, setRelatedCards] = useState([]);
  const [currentID, setcurrentID] = useState(40356);
  const [currentProduct, setCurrentProduct] = useState(CurrentProduct);
  const [modalView, setModalView] = useState({visibility: 'visible'});
  const [features, setFeatures] = useState({
    currentName: 'loading',
    selectedName: 'loading',
    features: {
      newFeature: {
        current: 'loading',
        selected: 'loading'
      }
    }
  });

  //Comparison Modal
  const toggleModal = (newCard) => {
    setModalView((oldState) => {
      return oldState.visibility === 'hidden' ? {visibility: 'visible'} : {visibility: 'hidden'};
    });
    getFeatures(newCard);
  };

  const getFeatures = (newCard) => { //Parses for features
    let featureObject = {
      currentName: currentProduct.name,
      selectedName: newCard.name,
      features: {}
    }
    let featureList = featureObject.features;
    let current = currentProduct.features;
    let selected = newCard.features;

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
    setFeatures(featureObject);
  };

  //Product Cards
  // TODO: Create an outfit list state

  const createRelatedCards = (product_id) => { //Returns an array of Product Cards
    return fetchRelated(product_id)
      .then((data) => Promise.all(data.map((id) => fetchProduct(id) //Returns an array of objects with product and style info
            .then((product) => fetchStyles(id)
              .then((styles) => {
                return {product: product, styles: styles};
              }))
            .catch((err) => console.error(err)))))
      .then((items) => setRelatedCards(items.map((item, key) => <ProductCard key={key} selectCard={toggleModal} product={item.product} styles={item.styles} />)))
      .catch((err) => console.error(err));
  }

  // TODO: Make sure it rerenders when the currently viewed product changes
  useEffect(() => {
    createRelatedCards(currentID);
  }, [currentID]);

  return (
    <React.Fragment>
      <div className="product-list" id="related-products">
        <CompareModal toggleModal={toggleModal} modalView={modalView} features={features} />
        <span>Related Products</span>
        <ProductList cards={relatedCards} />
      </div>
      <div className="product-list">
        <span>Outfit List</span>
        <ProductList cards={relatedCards} />
      </div>
    </React.Fragment>
  );
};

export default ProductLists;