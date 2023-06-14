import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return <footer>{`Copyright ${year} Level Up Works`}</footer>;
};

export default Footer;
