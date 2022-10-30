import React from 'react';
import Header from '../Header';
import Layout from '../UI/Layout';

const Contact = () => {
  return (
    <div className='h-screen text-[#F7F7FC]'>
      <Header />
      <Layout>
        <div className='text-[76px]' style={{ fontFamily: 'Okine' }}>
          Contact
        </div>
        <div className='w-[234px]'>
          We Provide You The Best interface To Keep Your Business Intact With
          Each Other By Maintaining Your Inventory
        </div>
      </Layout>
    </div>
  );
};

export default Contact;
