import React from 'react';
import github from '../images/github.png';
import linkedinicon from '../images/linkedinicon.png';

function Footer() {
  return (
    <footer className="absolute bottom-0">
      <nav className="gap-20 items-center flex ">
        <a href="https://github.com/ArthurSimoess/super-trunfo-project"><img src={github} alt="github icon" className="w-12" /></a>
        <a href="https://www.linkedin.com/in/arthurrsim%C3%B5es"><img src={linkedinicon} alt="linkedin icon" className="w-14" /></a>
      </nav>
    </footer>
  );
}

export default Footer;
