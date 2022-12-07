import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { SiLinktree } from 'react-icons/si'
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">Scroll Up</a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/saqlain-shah/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
        <a href="https://github.com/cyedzada-1" target="_blank" rel="noreferrer" ><FaGithub /></a>
        <a href="https://linktr.ee/saqlain_shah" target="_blank" rel="noreferrer" ><SiLinktree /></a>
      </div>
    
    </footer>
  )
}

export default Footer
