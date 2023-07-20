import React from 'react';

const HeaderItem = ({ Icon, hideOnMobile = false }) => {
  return (
    <div
      className={`flex flex-col items-center cursor-pointer group w-12 sm:w-12 ${
        hideOnMobile ? 'hidden md:flex' : 'hover:text-white'
      }`}
    >
      <Icon className={`h-6 mb-1 ${hideOnMobile ? 'group-hover:animate-bounce' : ''}`} />
    </div>
  );
};

export default HeaderItem;
