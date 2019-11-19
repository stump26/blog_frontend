import React from 'react';
import { Link } from '@material-ui/core';
import './Footer.scss';

const Footer = () => {
  return (
    <div class="Foot-menu">
      <span>
        ⓒ <Link href="/editor">stumpark</Link>, created by react.js
      </span>
    </div>
  );
};
export default Footer;
