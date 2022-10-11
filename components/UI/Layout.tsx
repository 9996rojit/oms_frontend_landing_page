import React from 'react';

const Layout: React.FC<{ children: any }> = (props) => {
  const { children, ...rest } = props;
  return <div className='px-4 lg:px-[100px] overflow-hidden'>{children}</div>;
};

export default Layout;
