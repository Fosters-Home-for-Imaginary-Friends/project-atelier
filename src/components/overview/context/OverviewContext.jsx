/* eslint-disable no-console */
import React, {
  createContext, useContext, useState, useEffect, useMemo,
} from 'react';
import PropTypes from 'prop-types';
import { AppContext } from '../../context/AppContext.jsx';
import { getStyles } from '../../../helpers.js';

export const OverviewContext = createContext({});

export function OverviewContextProvider({ children }) {
  const {
    productData,
  } = useContext(AppContext);

  const [styles, setStyles] = useState([]);
  const [currentStyle, setCurrentStyle] = useState({});
  const [currentSize, setCurrentSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [previousPhoto, setPreviousPhoto] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);

  const getProductInformation = () => {
    if (!productData.id) {
      return;
    }
    getStyles(productData.id)
      .then((styleData) => {
        setStyles(styleData);
        return styleData;
      })
      .then((styleData) => {
        for (let i = 0; i < styleData.length; i += 1) {
          const style = styleData[i];
          if (style['default?']) {
            setCurrentStyle(style);
          }
        }
      })
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getProductInformation();
  }, [productData.id]);

  const OverviewContextValues = useMemo(() => ({
    styles,
    currentStyle,
    setCurrentStyle,
    currentSize,
    setCurrentSize,
    quantity,
    setQuantity,
    currentPhoto,
    setCurrentPhoto,
    previousPhoto,
    setPreviousPhoto,
    showModal,
    setShowModal,
    loading,
  }));

  return (
    <OverviewContext.Provider value={OverviewContextValues}>
      {children}
    </OverviewContext.Provider>
  );
}

OverviewContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
