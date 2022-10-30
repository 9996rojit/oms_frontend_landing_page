import Image from 'next/image';
import React from 'react';
import { useWindowSize } from '../../hooks/useWindowDimension';
import logo from '../../public/assets/logo.svg';
import Button from '../UI/Button';
import HeaderResponsive from './HeaderResponsive';

const navLinks = [
  { name: 'About Us', path: '/' },
  { name: 'Features', path: '/' },
  { name: 'Services', path: '/' },
  { name: 'Features', path: '/' },
];

const Header: React.FC<{ className?: string }> = ({ className }) => {
  const { width } = useWindowSize();

  return (
    <header
      className={`flex items-center justify-between px-4 lg:px-[100px] gap-[156px] ${
        className ? className : ''
      }`}
    >
      <div className='relative w-[70px] h-[50px]  lg:w-[103.51px] lg:h-[72.09px]'>
        <Image src={logo} layout='fill' alt='logo' />
      </div>

      {width > 1024 ? (
        <>
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
        </>
      ) : (
        <HeaderResponsive />
      )}
    </header>
  );
};

export default Header;
