import React from 'react';
import Header from '../Header';
import Layout from '../UI/Layout';
import ServiceManagement1 from '../../public/assets/serviceManagement1.svg';
import Image from 'next/image';

const Services = () => {
  return (
    <div className='min-h-screen  h-auto text-[#F7F7FC] my-20'>
      <Header className='mb-20' />
      <Layout className='h-full'>
        <div className='flex flex-col lg:flex-row gap-y-[30px] lg:justify-between'>
          <div className=''>
            <div
              className='text-[76px] lg:text-[104px]'
              style={{ fontFamily: 'Okine' }}
            >
              Services
            </div>
            <div className=' w-[234px]'>
              We Provide You The Best interface To Keep Your Business Intact
              With Each Other By Maintaining Your Inventory
            </div>
          </div>

          <div className='flex w-full flex-col gap-y-5 lg:flex-row lg:-ml-24 gap-x-8'>
            <div className='relative lg:w-[289px] h-[468px] lg:top-32'>
              <Image
                src={ServiceManagement1}
                layout='fill'
                alt='serviceManagement'
              />
            </div>
            <div className='relative w-full lg:w-[289px] h-[468px] lg:-top-5'>
              <Image
                src={ServiceManagement1}
                layout='fill'
                alt='serviceManagement'
              />
            </div>
            <div className='relative w-full lg:w-[289px] h-[468px] lg:top-32'>
              <Image
                src={ServiceManagement1}
                layout='fill'
                alt='serviceManagement'
              />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Services;
