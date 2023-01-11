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
              <h4>HTML5</h4>
            </article>
            <article className="experience__details">
              <IoLogoCss3 className="experience__details-icon" />
              <h4>CSS3</h4>
            </article>
            <article className="experience__details">
              <DiSass className="experience__details-icon" />
              <h4>Bootstrap5</h4>
            </article>
            <article className="experience__details">
              <SiTailwindcss className="experience__details-icon" />
              <h4>Next.js</h4>
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
                <h4>Postgresql</h4>
              </article>
              <article className="experience__details">
              <BiGitBranch className="experience__details-icon" />
                <h4>Redis</h4>
              </article>
            <article className="experience__details">
              <AiFillGithub className="experience__details-icon" />
              <h4>socket.io</h4>
            </article>
            <article className="experience__details">
              <BiGitBranch className="experience__details-icon" />
                <h4>SQL</h4>
              </article>
            <article className="experience__details">
              <AiFillGithub className="experience__details-icon" />
              <h4>AWS</h4>
            </article>
          </div>
        </div>
     
        <div className="experience__backend">
            <h3>Advanced</h3>
            <div className="experience__content">
              <article className="experience__details">
                <DiNodejsSmall className="experience__details-icon" />
                <h4>SSH</h4>
              </article>
              <article className="experience__details">
                <SiExpress className="experience__details-icon" />
                <h4>HTTP/HTTPS</h4>
              </article>
              <article className="experience__details">
                <SiMongodb className="experience__details-icon" />
                <h4>Testing</h4>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <h4>Code splitting</h4>
              </article>
              <article className="experience__details">
              <BiGitBranch className="experience__details-icon" />
                <h4>Client Side Optimization</h4>
              </article>
            <article className="experience__details">
              <AiFillGithub className="experience__details-icon" />
              <h4>Server Side Optimization</h4>
            </article>
            <article className="experience__details">
              <BiGitBranch className="experience__details-icon" />
                <h4>Authentcation</h4>
              </article>
            <article className="experience__details">
              <AiFillGithub className="experience__details-icon" />
              <h4>GIT/GITHUB</h4>
            </article>
          </div>
        </div>

        <div className="experience__backend">
            <h3>Cloud</h3>
            <div className="experience__content">
              <article className="experience__details">
                <DiNodejsSmall className="experience__details-icon" />
                <h4>CI/CD</h4>
              </article>
              <article className="experience__details">
                <SiExpress className="experience__details-icon" />
                <h4>Docker</h4>
              </article>
              <article className="experience__details">
                <SiMongodb className="experience__details-icon" />
                <h4>Lambda</h4>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <h4>I AM</h4>
              </article>
              <article className="experience__details">
              <BiGitBranch className="experience__details-icon" />
                <h4>Security</h4>
              </article>
            <article className="experience__details">
              <AiFillGithub className="experience__details-icon" />
              <h4>SEO</h4>
            </article>
            <article className="experience__details">
              <BiGitBranch className="experience__details-icon" />
                <h4>RestAPIs</h4>
              </article>
            <article className="experience__details">
              <AiFillGithub className="experience__details-icon" />
              <h4>System Design</h4>
            </article>
          </div>
        </div>

        

      </div>
    </section>
  )
}

export default Experience
