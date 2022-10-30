import Image from 'next/image';
import React, { useState } from 'react';
import Header from '../Header';
import Layout from '../UI/Layout';
import aboutObjects from '../../public/assets/aboutObjects.svg';
import { useWindowSize } from '../../hooks/useWindowDimension';

const Aboutus = () => {
  const { width } = useWindowSize();

  const [showExtraText, setShowExtraText] = useState(false);

  return (
    <div className=' text-[#F7F7FC] mt-[63px]'>
      <Header className='mb-[20px]' />
      <Layout>
        <div className='flex flex-col lg:flex-row  gap-y-7 lg:gap-x-20 lg:justify-between min-h-screen h-auto'>
          <div>
            <div
              className='text-[76px] lg:text-[102px]'
              style={{ fontFamily: 'Okine' }}
            >
              About Us
            </div>
            <div className=' flex flex-col gap-y-5 lg:flex-row lg:gap-x-8'>
              <span className='w-[234px]'>
                We Provide You The Best interface To Keep Your Business Intact
                With Each Other By Maintaining Your InventoryWe Provide You The
                Best interface To Keep Your Business Intact With Each Other By
                Maintaining Your InventoryWe Provide You The Best interface To
                Kee
              </span>

              {width < 1024 && !showExtraText ? (
                <div
                  className='text-primary underline cursor-pointer'
                  onClick={() => setShowExtraText(true)}
                >
                  ReadMore
                </div>
              ) : (
                <span className='w-[234px] flex flex-col gap-y-5'>
                  <span>
                    We Provide You The Best interface To Keep Your Business
                    Intact With Each Other By Maintaining Your Inventory
                  </span>
                  <span>
                    We Provide You The Best interface To Keep Your Business
                    Intact With Each Other By Maintaining Your Inventory
                  </span>

                  {width < 1024 && (
                    <span
                      className='text-primary underline cursor-pointer'
                      onClick={() => setShowExtraText(false)}
                    >
                      ShowLess
                    </span>
                  )}
                </span>
              )}
            </div>
          </div>

          <div className=''>
            <div className='relative h-[230px] max-w-[431px] w-full lg:w-[713px] lg:h-[381px]'>
              <Image src={aboutObjects} layout='fill' alt='bar' />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Aboutus;
