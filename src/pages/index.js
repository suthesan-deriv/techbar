import React from 'react';
import Seo from '../components/seo'
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';

import LayoutDefault from '../layouts/LayoutDefault';

const Home = () => {
  return (

    <LayoutDefault>
      <Seo
        title={'TechBar Computer Services | Repairs, upgrades, installations and consultations'}
        description={'TechBar provides reliable, affordable and convenient computer services. TechBar provides various services such as repairs, upgrades, installations, consultations and more'}
        has_organization_schema
      />
      <Hero className="illustration-section-01" />
      <FeaturesTiles />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      <Testimonial topDivider />
      <Cta split />
    </LayoutDefault>
  );
}

export default Home;