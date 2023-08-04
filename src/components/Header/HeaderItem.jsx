import React from 'react';

const HeaderItem = ({ Icon, hideOnMobile = false }) => {
  return (
    <div
      className={`flex cursor-pointer group ${
        hideOnMobile ? 'hidden md:flex' : ''
      }`}
    >
      <Icon className={`h-6 ${hideOnMobile ? 'group-hover:animate-bounce hover:text-white ' : ''}`} />
    </div>
  );
};

export default HeaderItem;
