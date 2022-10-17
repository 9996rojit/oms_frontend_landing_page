import React from 'react';
import { useWindowSize } from '../../hooks/useWindowDimension';
import Header from '../Header';
import Button from '../UI/Button';
import Layout from '../UI/Layout';
import AboutusBanner from './AboutusBanner';
import ContactBanner from './ContactBanner';
import FeaturesBanner from './FeaturesBanner';
import HeroContainer from './HeroContainer';
import ServicesBanner from './ServicesBanner';

const HomePage = () => {
  const { width } = useWindowSize();

  return (
    <div
      className='bg-[#2E2F31] min-h-screen w-full overflow-hidden'
      style={{ fontFamily: 'okineNormal' }}
    >
      <Header />
      <Layout>
        <HeroContainer />
      </Layout>
      {width > 1024 && <AboutusBanner />}
      {width > 1024 && <FeaturesBanner />}
      {width > 1024 && <ServicesBanner />}
      {width > 1024 && <ContactBanner />}

      {/* {width < 1024 && (
        <div className=' overflow-hidden'>
          <Button
            buttonType='primary'
            style={{
              width: '100%',
              boxShadow: '0px 8px 12px  rgba(135, 199, 84, 0.25)',
              position: 'absolute',
              bottom: '24px',
              left: '8px',
            }}
          >
            Book a Demo
          </Button>
        </div>
      )} */}
    </div>
  );
};

export default HomePage;
