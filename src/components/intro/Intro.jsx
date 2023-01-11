import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/portfolio.jpg';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>5 years</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>35+ Completed Projects</small>
            </article>
          </div>
          <p>It's not what I write here or on my CV, its what wonders I can do when I'm on my desk having my laptop open at your office, 
            a Full Stack Developer (MERN stack) with great Problem Solving skills and rich 5 Years of experience in 
            designing, developing, deploying and managing highly scalable Products/WebApps. 
            As a developer, I'm passionate about learning new technologies and working with teams to create user-friendly & best Product . 
            Over 5 years of experience in web development, and as a Tech Lead. 
            Eager to develop skills in a fast-paced environment and contribute to a company's success.</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro