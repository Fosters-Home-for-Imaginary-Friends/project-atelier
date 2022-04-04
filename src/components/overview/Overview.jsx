import React, { useState, useEffect, createContext } from "react";
import ImageCarousel from './ImageCarousel.jsx';
import ImageBar from "./ImageBar.jsx";
import ProductInformation from './ProductInformation.jsx';
import {fetchProduct} from "../../helpers.js";

export const OverviewContext = createContext({
  product: null,
  productId: null,
  loading: true
});

const Overview = () => {

  // var product = {
  //   id: 40344,
  //   campus: "hr-rfp",
  //   name: "Camo Onesie",
  //   slogan: "Blend in to your crowd",
  //   description: "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
  //   category: "Jackets",
  //   default_price: "140.00",
  //   created_at: "2021-08-13T14:38:44.509Z",
  //   updated_at: "2021-08-13T14:38:44.509Z"
  // };

  const [product, setProduct] = useState({});
  const [productId, setProductId] = useState();

  useEffect(() => {
    // fetchProduct(40344)
    //   .then((response) => {
    //     setProduct(response);
    //     setProductId(response.id);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   })
    const fetchData = async () => {
      const data = await (fetchProduct(40344))
      setProduct(data);
      // setProductId(data.id);
    }

    fetchData()
      .catch(console.error);
  }, []);

  console.log(product);
  // console.log(productId);

  // const fetchProduct = (product_id) => {
  //   return axios.get(host + '/products/' + product_id, options)
  //     .then((res) => res.data)
  //     .catch((err) => console.error(err));
  // };

  return (
    <OverviewContext.Provider value={{ product, productId }}>
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