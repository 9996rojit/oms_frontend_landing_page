import Image from 'next/image';
import React from 'react';
import logo from '../../public/assets/logo.svg';
import Button from '../UI/Button';

const navLinks = [
  { name: 'About Us', path: '/' },
  { name: 'Features', path: '/' },
  { name: 'Services', path: '/' },
  { name: 'Features', path: '/' },
];

const Header = () => {
  return (
    <header className='flex items-center justify-center px-[100px] gap-[156px]'>
      <div className='relative w-[103.51px] h-[72.09px]'>
        <Image src={logo} layout='fill' alt='logo' />
      </div>
      <div className='flex-1 flex justify-between items-center'>
        {navLinks?.map((link, i) => {
          return (
            <div className=' text-white text-lg cursor-pointer' key={i}>
              {link?.name}
            </div>
          );
        })}
      </div>
      <div>
        <Button buttonType='primary'>Book a Demo</Button>
      </div>
    </header>
  );
};

export default Header;
