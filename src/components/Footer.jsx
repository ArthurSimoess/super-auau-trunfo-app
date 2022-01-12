import React from 'react';
import github from '../images/github.png';
import linkedinicon from '../images/linkedinicon.png';

function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center gap-3 text-center bg-gray-200 inset-x-0 bottom-0 p-2 mt-32 sm:flex-row sm:gap-10 2xl:fixed">
      <p className="sm:text-lg">Site desenvolvido por Arthur Simões utilizando ReactJS e TailwindCSS 👨🏾‍💻</p>
      <nav className="flex gap-1 items-center">
        <a href="https://github.com/ArthurSimoess/super-trunfo-project"><img src={github} alt="github icon" className="w-10" /></a>
        <a href="https://www.linkedin.com/in/arthurrsim%C3%B5es"><img src={linkedinicon} alt="linkedin icon" className="w-12" /></a>
      </nav>
    </footer>
  );
}

export default Footer;
