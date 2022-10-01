import React from 'react';
import Header from '../Header';
import Layout from '../UI/Layout';
import HeroContainer from './HeroContainer';

const HomePage = () => {
  return (
    <div
      className='bg-[#2E2F31] min-h-screen'
      style={{ fontFamily: 'okineNormal' }}
    >
      <Header />
      <Layout>
        <HeroContainer />
      </Layout>
    </div>
  );
};

export default HomePage;
