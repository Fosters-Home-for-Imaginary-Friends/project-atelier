import React, { useState, useEffect, createContext } from "react";
import ImageCarousel from './ImageCarousel.jsx';
import ImageBar from "./ImageBar.jsx";
import ProductInformation from './ProductInformation.jsx';
import { fetchProduct, fetchStyles } from "../../helpers.js";

export const OverviewContext = createContext({
  product: null,
  productId: null,
  styles: null,
  currentStyle: null,
  loading: true
});

const Overview = () => {

  const [product, setProduct] = useState({});
  const [productId, setProductId] = useState(0);
  const [styles, setStyles] = useState([]);
  const [currentStyle, setCurrentStyle] = useState({});
  const [loading, setLoading] = useState(true);

  const getProductData = (product_id) => {
    fetchProduct(product_id)
      .then((response) => {
        setProduct(response);
        setProductId(response.id);
        return response.id;
      })
      .then((response) => {
        return fetchStyles(response);
      })
      .then((styleData) => {
        setStyles(styleData);
        return styleData;
      })
      .then((styleData) => {
        for (let i = 0; i < styleData.length; i++) {
          let style = styleData[i];
          if (style['default?']) {
            setCurrentStyle(style);
          }
        }
      })
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  useEffect(() => {
    getProductData(40344);
  }, []);

  return (
    <OverviewContext.Provider value={{ product, productId, styles, currentStyle, loading }}>
      <div className="overview">
        <section className="overview-images">
          <ImageCarousel />
          <ImageBar />
        </section>
          <ProductInformation />
      </div>
    </OverviewContext.Provider>
  )
}

export default Overview;