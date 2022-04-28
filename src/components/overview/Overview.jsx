import React from 'react';
import ImageCarousel from './components/images/ImageCarousel.jsx';
import ImageBar from './components/images/ImageBar.jsx';
import ProductInformation from './components/information/ProductInformation.jsx';
import { OverviewContextProvider } from './context/OverviewContext.jsx';

function Overview() {
  return (
    <OverviewContextProvider>
      <div id="overview" className="overview">
        <div className="overview-container">
          <section className="overview-images-container">
            <ImageCarousel />
            <ImageBar />
          </section>
          <ProductInformation />
        </div>
      </div>
    </OverviewContextProvider>
  );
}

export default Overview;
