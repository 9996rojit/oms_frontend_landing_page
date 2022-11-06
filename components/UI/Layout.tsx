import React from 'react';

const Layout: React.FC<{ children: any; className?: string }> = (props) => {
  const { children, className, ...rest } = props;
  return (
    <div className={`px-4 lg:px-[100px] overflow-hidden h-full ${className}`}>
      {children}
    </div>
  );
};

export default Layout;
