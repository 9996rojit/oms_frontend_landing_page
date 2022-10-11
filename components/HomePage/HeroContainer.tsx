import Image from 'next/image';
import React from 'react';
import { useWindowSize } from '../../hooks/useWindowDimension';
import arrow from '../../public/assets/arrow.svg';
import Button from '../UI/Button';

const HeroContainer = () => {
  const { width } = useWindowSize();

  return (
    <div
      className='mt-[30px] lg:mt-[54px] w-full relative'
      style={{
        height: width < 1024 ? 'calc(100vh - 80px)' : 'calc(100vh - 134px)',
      }}
    >
      <p
        className=' text-white text-[70px] lg:text-8xl leading-[75px]'
        style={{ fontFamily: 'okine' }}
      >
        Seemlessly
      </p>

      <div className='relative lg:left-[290px]'>
        <p
          className=' text-white text-[70px] lg:text-8xl leading-[75px]'
          style={{ fontFamily: 'okineNormal' }}
        >
          Maintain Your
        </p>
      </div>
      <div>
        <p
          className=' text-white text-[70px] lg:text-8xl leading-[75px]'
          style={{ fontFamily: 'okineNormal' }}
        >
          Supply Chain
        </p>
      </div>

      <div className='flex justify-between mt-[63px] lg:mt-[100px]'>
        <div className='hidden lg:block relative h-[85px] w-[85px]'>
          <Image src={arrow} layout='fill' alt='arrow' />
        </div>

        <div>
          <p
            className='w-[325px] text-white'
            style={{ fontFamily: 'okineNormal' }}
          >
            We Provide You The Best interface To Keep Your Business Intact With
            Each Other By Maintaining Your Inventory
          </p>
          <button className='text-primary underline mt-3'>Contact us</button>
        </div>
      </div>
      {width < 1024 && (
        <Button
          buttonType='primary'
          style={{
            width: '100%',
            boxShadow: '0px 8px 12px  rgba(135, 199, 84, 0.25)',
            marginTop: '65px',
          }}
        >
          Book a Demo
        </Button>
      )}
    </div>
  );
};

export default HeroContainer;
