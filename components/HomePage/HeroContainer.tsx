import Image from 'next/image';
import React from 'react';
import Seemlessly from '../../public/assets/seemlessly1.svg';
import MaintainYour from '../../public/assets/Maintain Your.svg';
import SupplyChain from '../../public/assets/Supply Chain.svg';

const HeroContainer = () => {
  return (
    <div className='mt-14'>
      {/* <div className='relative w-[487px] h-[134px]'>
        <Image src={Seemlessly} layout='fill' alt='Seemlessly' />
      </div> */}

      <p className='stoke text-8xl' style={{ fontFamily: 'okine' }}>
        Seemlessly
      </p>

      <div className='relative left-[290px] w-[646px] h-[134px]'>
        <Image src={MaintainYour} layout='fill' alt='Maintain Your' />
      </div>
      <div className='relative w-[646px] h-[134px]'>
        <Image src={SupplyChain} layout='fill' alt='Supply Chain' />
      </div>
    </div>
  );
};

export default HeroContainer;
