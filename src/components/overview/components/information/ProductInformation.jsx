import React, { useContext } from 'react';
import {
  SiFacebook, SiTwitter, SiPinterest, SiInstagram,
} from 'react-icons/si';
import StyleSelector from '../styles/StyleSelector.jsx';
import SizeSelector from '../sizes/SizeSelector.jsx';
import QuantitySelector from '../quantity/QuantitySelector.jsx';
import { OverviewContext } from '../../context/OverviewContext.jsx';
import { AppContext } from '../../../context/AppContext.jsx';
import { postCart } from '../../../../helpers.js';

function ProductInformation() {
  const {
    currentStyle,
    currentSize,
    setCurrentSize,
    loading,
  } = useContext(OverviewContext);

  const {
    productData,
  } = useContext(AppContext);

  if (loading) {
    return <div className="overview-product-info loading" />;
  }

  const handleAddToCartClick = () => {
    postCart(currentSize);
    setCurrentSize('');
  };

  return (
    <div className="overview-product-info">
      <h1>{productData.name}</h1>
      <section className="body-text">{productData.description}</section>
      { currentStyle.sale_price
        ? (
          <div className="sale-price-container">
            <section
              className="body-text sale-price"
            >
              {currentStyle.sale_price}
              {' '}
              USD
            </section>
            <section
              className="body-text original-price"
            >
              {productData.default_price}
              {' '}
              USD
            </section>
          </div>
        )
        : (
          <section
            className="body-text price"
          >
            {productData.default_price}
            {' '}
            USD
          </section>
        )}
      <div className="social-media-container">
        <a
          href="https://facebook.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <SiFacebook className="social-media-icon" />
        </a>
        <a
          href="https://twitter.com/intent/tweet"
          rel="noopener noreferrer"
          target="_blank"
        >
          <SiTwitter className="social-media-icon" />
        </a>
        <a
          href="https://pinterest.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <SiPinterest className="social-media-icon" />
        </a>
        <a
          href="https://instagram.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <SiInstagram className="social-media-icon" />
        </a>
      </div>
      <StyleSelector />
      <SizeSelector />
      <QuantitySelector />
      <div>
        <button
          className="info-button add"
          onClick={() => handleAddToCartClick()}
        >
          ADD TO BAG
        </button>
      </div>
    </div>
  );
}

export default ProductInformation;
