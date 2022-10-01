import React from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  icon?: React.ReactElement;
  buttonType: 'primary' | 'secondary';
}
const Button = (props: Props) => {
  const { children, icon, buttonType, ...rest } = props;
  return (
    <button
      className={` px-4 py-3 transform hover:duration-200 duration-200 ${
        props?.className
      } ${
        props?.buttonType === 'primary'
          ? 'bg-[#87C754] hover:bg-[#4C9412FC] active:bg-[#64BB1EFC] text-white'
          : 'border-[#87C754] hover:bg-[#87C75433]/20 active:bg-[#64BB1EFC] text-[#87C754]'
      }`}
      {...rest}
    >
      {props?.children}
    </button>
  );
};

export default Button;
