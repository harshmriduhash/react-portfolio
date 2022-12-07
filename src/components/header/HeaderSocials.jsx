import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { SiLinktree } from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/saqlain-shah/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/cyedzada-1" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://linktr.ee/saqlain_shah" target="_blank" rel="noreferrer" ><SiLinktree /></a>
    </div>
  )
}

export default HeaderSocials
