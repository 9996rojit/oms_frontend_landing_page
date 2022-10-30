import React from 'react';
import Header from '../Header';
import Layout from '../UI/Layout';
import salesHistory from '../../public/assets/featureSalesHistory.svg';
import orderHistory from '../../public/assets/featureOrderHistory.svg';
import Image from 'next/image';
import orderManagement from '../../public/assets/featureorderManagement.svg';
import inventoryManagement from '../../public/assets/featureInventoryManagement.svg';

const Features = () => {
  return (
    <div className=' text-[#F7F7FC] mt-[63px]'>
      <Header className='mb-[20px] ' />
      <Layout>
        <div className='flex flex-col lg:flex-row gap-y-7 lg:gap-x-20 min-h-screen h-auto'>
          <div>
            <div
              className='text-[76px] lg:text-[102px] '
              style={{ fontFamily: 'Okine' }}
            >
              Features
            </div>
            <div className='w-[234px]'>
              We Provide You The Best interface To Keep Your Business Intact
              With Each Other By Maintaining Your Inventory
            </div>
          </div>

          <div className='flex flex-col gap-y-5'>
            <div className='flex flex-col lg:flex-row gap-y-5 lg:gap-x-7'>
              <div className='relative h-[256px] w-[343px] lg:top-[110px]'>
                <Image src={inventoryManagement} alt='order' layout='fill' />
              </div>
              <div className='relative h-[256px] w-[343px]'>
                <Image src={orderManagement} alt='order' layout='fill' />
              </div>
            </div>

            <div className='flex flex-col lg:flex-row gap-y-5 lg:gap-x-7 '>
              <div className='relative h-[256px] w-[343px] lg:top-[110px] lg:left-[84px]'>
                <Image src={orderHistory} alt='order' layout='fill' />
              </div>

              <div className='relative h-[256px] w-[343px] lg:left-[84px]'>
                <Image src={salesHistory} alt='order' layout='fill' />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Features;
