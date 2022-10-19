import Image from 'next/image';
import React, { useState } from 'react';
import greyMule from '../../public/assets/greyMule.svg';

const LINKS = [
  { name: 'About Us', path: '' },
  { name: 'Home', path: '' },
  { name: 'Features', path: '' },
  { name: 'Services', path: '' },
  { name: 'Contact', path: '' },
];

const FinalSection = () => {
  const [active, setActive] = useState('Home');

  return (
    <div className='flex justify-between  pb-4 border-b mb-9'>
      <div className='mx-4 lg:mx-[100px]'>
        <div className='relative h-[113px] w-[162px] lg:w-[653px] lg:h-[460px] lg:-top-20'>
          <Image src={greyMule} layout='fill' alt='gray Mule' />
        </div>
      </div>
      <ul className='flex flex-col space-y-4 mx-4 lg:mx-[100px]'>
        {LINKS?.map((link, i) => {
          return (
            <li
              key={i}
              className={`text-[#FCFCFC] text-[28px] lg:text-4xl ${
                active === link?.name ? '!text-primary' : ''
              }`}
            >
              {link?.name || ''}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FinalSection;
