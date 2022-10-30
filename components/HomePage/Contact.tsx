import React from 'react';
import Header from '../Header';
import Button from '../UI/Button';
import Layout from '../UI/Layout';

interface Form {
  fullName: string;
  email: string;
  message: string;
}

const Contact = () => {
  return (
    <div className='h-screen text-[#F7F7FC]'>
      <Header />
      <Layout>
        <div className='lg:flex  lg:justify-between'>
          <div className=''>
            <div
              className='text-[76px] lg:text-[104px]'
              style={{ fontFamily: 'Okine' }}
            >
              Contact
            </div>
            <div className='w-[234px]'>
              We Provide You The Best interface To Keep Your Business Intact
              With Each Other By Maintaining Your Inventory
            </div>
          </div>
          <form
            className='mt-9 w-full lg:max-w-[490px] flex flex-col gap-y-10 lg:mr-[144px] lg:py-[90px] lg:px-[48px]'
            style={{ boxShadow: '0px 4px 38px #363739' }}
          >
            <input
              type='text'
              placeholder='Full Name'
              className='border-b-2 border-white focus:border-primary placeholder:text-[#F7F7F7] bg-transparent w-full py-2 px-3 outline-none'
            />
            <input
              type='email'
              placeholder='Email'
              className='border-b-2 border-white focus:border-primary placeholder:text-[#F7F7F7] bg-transparent w-full py-2 px-3 outline-none'
            />
            <div className=''>
              <textarea
                placeholder='Message'
                className='border-b-2 border-white focus:border-primary placeholder:text-[#F7F7F7] bg-transparent w-full py-2 px-3 outline-none'
              />

              <div className='text-[#4c9412fc] text-xs flex justify-end'>
                31 / 50
              </div>
            </div>

            <Button buttonType='primary' type='submit'>
              Contact Now
            </Button>
          </form>
        </div>
      </Layout>
    </div>
  );
};

export default Contact;
