import React from 'react';
import IMG1 from '../../assets/project1.JPG';
import IMG2 from '../../assets/project2.JPG';
import IMG3 from '../../assets/project3.JPG';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Railofy',
      img: IMG1,
      description:
        'One stop for all your train needs! Railofy is a leading TravelTech platform. Book confirmed IRCTC Train Tickets, Order food in Train , Check PNR Status ETC. An IRCTC Authorized Premium Partner with the mission to transform the train travel experience',
      technologies: 'React | JavaScript | CSS | HTML',
      link: 'http://railofy.in/',
    },
    {
      id: 2,
      title: 'Zury.in',
      img: IMG2,
      description: 'The Zury.in is the platform for women who are going through PCOs/PCOD. Zury helps you achieve the best version of yourself · Unlimited Consultation. Dedicated Expert Dieticians trained under Gynecologists ',
      technologies: 'React | JavaScript | Next.js',
      link: 'http://Zury.in/',
    },
    {
      id: 3,
      title: 'Docvita ',
      img: IMG3,
      description:
        'DocVita is largest online clinic on WhatsApp. With DocVita, you can book appointments & enroll in treatments with the top doctors and mental health Empowering 1.3 billion Indians to connect with India Top Doctors on Live Video',
      technologies: 'React  | HTML | LESS (CSS) ',
      link: 'https://docvita.com',
    }, 
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;