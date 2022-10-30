import React from 'react';

interface Props {
  heading: string;
  description: string;
}

const DescriptionSection = (props: Props) => {
  return (
    <div>
      <h3 className='' style={{ fontFamily: 'Okine' }}>
        {props?.heading || ''}
      </h3>

      <p>{props?.description || ''}</p>
    </div>
  );
};

export default DescriptionSection;
