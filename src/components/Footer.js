import React from 'react';

import './Footer.css';

const Footer = () => {
  return (
    <article id='footer' className='slds-card'>
      <p className='footer-content'>
        powered by <a href='https://github.com/leifg/formulon' target='_blank' rel='noopener noreferrer'>formulon</a> built by <a href="https://leif.io" target='_blank' rel='noopener noreferrer'>Leif Gensert</a>
      </p>
    </article>
  )
}

export default Footer;
