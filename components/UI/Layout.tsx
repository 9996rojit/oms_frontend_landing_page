import React, { ReactChildren } from 'react';

const Layout: React.FC<{ children: any }> = (props) => {
  const { children, ...rest } = props;
  return <div className='px-[100px]'>{children}</div>;
};

export default Layout;
