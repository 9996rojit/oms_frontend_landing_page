import React from 'react';

const Error: React.FC<{ message: string }> = ({ message }) => {
  return <div className='text-red-400'>{message}</div>;
};

export default Error;
