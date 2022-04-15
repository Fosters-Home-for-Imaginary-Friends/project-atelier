import React, { useState, useEffect, useContext, createContext } from "react";
import ImageCarousel from './components/images/ImageCarousel.jsx';
import ImageBar from "./components/images/ImageBar.jsx";
import ImageModal from "./components/images/ImageModal.jsx";
import ProductInformation from './components/information/ProductInformation.jsx';
import { getStyles } from "../../helpers.js";
import { AppContext } from "../App.jsx";

export const OverviewContext = createContext({});

const Overview = () => {

  const [styles, setStyles] = useState([]);
  const [currentStyle, setCurrentStyle] = useState({});
  const [currentSize, setCurrentSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [previousPhoto, setPreviousPhoto] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);

  const { productId, productData } = useContext(AppContext);

  const getProductInformation = () => {
    if (!productData.id) {
      return;
    }
    getStyles(productData.id)
      .then((styleData) => {
        setStyles(styleData)
        return styleData;
      })
      .then((styleData) => {
        for (let i = 0; i < styleData.length; i++) {
          let style = styleData[i];
          if (style['default?']) {
            setCurrentStyle(style);
          }
        }
        return;
      })
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      })
  }

  useEffect(() => {
    getProductInformation();
  }, [productData.id]);

  return (
    <OverviewContext.Provider value={{ productId, styles, currentStyle, setCurrentStyle, currentSize, setCurrentSize, quantity, setQuantity, currentPhoto, setCurrentPhoto, previousPhoto, setPreviousPhoto, showModal, setShowModal, loading }}>
      <div id="overview" className="overview">
        {showModal ? <ImageModal /> : null}
        <div className="overview-container">
          <section className="overview-images-container">
            <ImageCarousel />
            <ImageBar />
          </section>
            <ProductInformation />
        </div>
      </div>
    </OverviewContext.Provider>
  )
}

export default Overview;
