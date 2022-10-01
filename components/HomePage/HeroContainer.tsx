import Image from 'next/image';
import React from 'react';
import Seemlessly from '../../public/assets/seemlessly1.svg';
import MaintainYour from '../../public/assets/Maintain Your.svg';
import SupplyChain from '../../public/assets/Supply Chain.svg';
import arrow from '../../public/assets/arrow.svg';

const HeroContainer = () => {
  return (
    <div className='mt-[54px]'>
      {/* <div className='relative w-[487px] h-[134px]'>
        <Image src={Seemlessly} layout='fill' alt='Seemlessly' />
      </div> */}

      <p className=' text-white text-8xl' style={{ fontFamily: 'okine' }}>
        Seemlessly
      </p>

      <div className='relative left-[290px] w-[646px] h-[134px]'>
        <Image src={MaintainYour} layout='fill' alt='Maintain Your' />
      </div>
      <div className='relative w-[646px] h-[134px]'>
        <Image src={SupplyChain} layout='fill' alt='Supply Chain' />
      </div>

      <div className='flex justify-between mt-[100px]'>
        <div className='relative h-[85px] w-[85px]'>
          <Image src={arrow} layout='fill' alt='arrow' />
        </div>

        <p
          className='w-[325px] text-white'
          style={{ fontFamily: 'okineNormal' }}
        >
          We Provide You The Best interface To Keep Your Business Intact With
          Each Other By Maintaining Your Inventory
        </p>
      </div>
    </div>
  );
};

export default HeroContainer;
