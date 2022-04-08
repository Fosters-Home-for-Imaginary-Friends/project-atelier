import React, { useState, useEffect, useContext, createContext } from "react";
import ImageCarousel from './ImageCarousel.jsx';
import ImageBar from "./ImageBar.jsx";
import ProductInformation from './ProductInformation.jsx';
import { getProduct, getStyles } from "../../helpers.js";
import { AppContext } from "../App.jsx";

export const OverviewContext = createContext({});

const Overview = () => {

  const [product, setProduct] = useState({});
  const [styles, setStyles] = useState([]);
  const [currentStyle, setCurrentStyle] = useState({});
  const [currentSize, setCurrentSize] = useState('');
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [previousPhoto, setPreviousPhoto] = useState(0);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  const { productId } = useContext(AppContext);

  const getProductData = () => {
    getProduct(productId)
      .then((response) => {
        setProduct(response);
        return response.id;
      })
      .then((response) => {
        return getStyles(response);
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
            return style;
          }
        }
      })
      .then((style) => {
        setProgress(1 / style.photos.length)
      })
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      })
  }

  useEffect(() => {
    getProductData();
  }, [productId]);

  return (
    <OverviewContext.Provider value={{ product, productId, styles, currentStyle, setCurrentStyle, currentSize, setCurrentSize, currentPhoto, setCurrentPhoto, previousPhoto, setPreviousPhoto, progress, setProgress, loading }}>
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