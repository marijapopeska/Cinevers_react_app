import React from 'react';

const HeaderItem = ({ Icon, hideOnMobile = false, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div
      className={`flex cursor-pointer group ${
        hideOnMobile ? 'hidden md:flex' : ''
      }`}
      onClick={handleClick}
    >
      <Icon className={`h-6 ${hideOnMobile ? 'group-hover:animate-bounce hover:text-white ' : ''}`} />
    </div>
  );
};

export default HeaderItem;
