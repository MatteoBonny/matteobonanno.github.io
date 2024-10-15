import React from 'react';
import './Footer_Button.css';

const Footer_Button = ({ text, link }) => {
  return (
    <a
      href={link}
      title={text}
      className="button relative block w-40 h-11 text-pink-500 border border-black-500 rounded-lg text-center leading-[2.8rem] transition-colors duration-300 ease-out overflow-hidden"
    >
      <i className="fa fa-dribbble mr-2"></i> {text}
    </a>
  );
};

export default Footer_Button;
