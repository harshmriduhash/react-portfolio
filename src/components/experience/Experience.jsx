import React from 'react';
import { AiFillHtml5,  AiFillGithub } from 'react-icons/ai';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import { IoLogoCss3, IoLogoJavascript } from 'react-icons/io';
import { DiSass, DiReact, DiNodejsSmall } from 'react-icons/di';
import { SiTailwindcss, SiTypescript, SiMaterialui, SiExpress, SiMongodb } from 'react-icons/si';
import { BiGitBranch } from 'react-icons/bi';
import { } from 'react-icons/';
import { } from 'react-icons/';
import { } from 'react-icons/';
import { } from 'react-icons/';
import { } from 'react-icons/';
import { } from 'react-icons/';
import { } from 'react-icons/';
import './experience.css';

const Experience = () => {
  return (
    <section id="experience">
      <h5>The Skills I Have</h5>
      <h2>Skills</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Front-end Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiFillHtml5 className="experience__details-icon" />
              <h4>HTML</h4>
            </article>
            <article className="experience__details">
              <IoLogoCss3 className="experience__details-icon" />
              <h4>CSS</h4>
            </article>
            <article className="experience__details">
              <DiSass className="experience__details-icon" />
              <h4>SCSS</h4>
            </article>
            <article className="experience__details">
              <SiTailwindcss className="experience__details-icon" />
              <h4>Tailwind</h4>
            </article>
            <article className="experience__details">
              <SiMaterialui className="experience__details-icon" />
              <h4>Material-UI</h4>
            </article>
            <article className="experience__details">
              <IoLogoJavascript className="experience__details-icon" />
              <h4>JavaScript</h4>
            </article>
            <article className="experience__details">
              <SiTypescript className="experience__details-icon" />
              <h4>TypeScript</h4>
            </article>
            <article className="experience__details">
              <DiReact className="experience__details-icon" />
              <h4>React</h4>
            </article>
          </div>
        </div>
          <div className="experience__backend">
            <h3>Back-end Development</h3>
            <div className="experience__content">
              <article className="experience__details">
                <DiNodejsSmall className="experience__details-icon" />
                <h4>NodeJS</h4>
              </article>
              <article className="experience__details">
                <SiExpress className="experience__details-icon" />
                <h4>ExpressJS</h4>
              </article>
              <article className="experience__details">
                <SiMongodb className="experience__details-icon" />
                <h4>MongoDB</h4>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <h4>Mongoose</h4>
              </article>
            
              <article className="experience__details">
              <BiGitBranch className="experience__details-icon" />
                <h4>Git</h4>
              </article>
            <article className="experience__details">
              <AiFillGithub className="experience__details-icon" />
              <h4>GitHub</h4>
            </article>
          </div>
        </div>
     

      </div>
    </section>
  )
}

export default Experience
