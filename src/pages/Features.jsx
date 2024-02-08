import React from 'react';

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import HeroFeatures from '../partials/HeroFeatures';
import FeaturesZigzag from '../partials/FeaturesZigzag';
import CaseStudies from '../partials/CaseStudies';
import Footer from '../partials/Footer';
import ServiceSection1 from '../partials/ServiceSection1';
import ServiceSection2 from '../partials/ServiceSection2';
import ServiceSection3 from '../partials/ServiceSection3';
import ServiceSection4 from '../partials/ServiceSection4';
import CtaContact from '../partials/CtaContact';

function Features() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">

        {/*  Page illustration */}
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
          <PageIllustration />
        </div>

        {/*  Page sections */}
        <HeroFeatures />
        <FeaturesZigzag />
        {/* <Stats /> */}
        <ServiceSection1 />
        <ServiceSection2 />
        <ServiceSection3 /> 
        <CaseStudies />
        <ServiceSection4 />
        <CtaContact />



      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Features;