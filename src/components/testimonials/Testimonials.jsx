import React from 'react';
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,

      name: 'Uzair Ali',
      role: 'Full-Stack Web Developer. JavaScript ',
      test: 'As a developer and a problem solver, I think Saqlain is a great collaborative partner to have. I met Saqlain in some basic javascript & react projects and since then he has drastically progressed in her understanding of the development process. he always has a professional environment and has good audio and video quality which makes it easier to communicate with her.',
    },
    {
      id: 2,

      name: 'Yishak Wesego',
      role: 'Full-stack developer ',
      test: "It was a pleasure collaborating with Saqlain on different projects. One of the things that I think is special about her is that he never settles, even after completing the projects he finds other resources and strengthens her knowledge. Collaborating with her is easy and comfortable, it's like working with someone you've known for a long period of time.",
    },
    {
      id: 3,

      name: 'akbar (Aku) Khan',
      role: 'Full Stack Developer | JavaScript | React | Redux | Html&Css .',
      test: 'I worked with Saqlain in the same team and her communication skills are very strong. Her programming skill is one of the bests, given the time frame in the field. he is a good team player.  he will probably fit in most of the companies not only because he\'s a good team worker, but also because he has very good skills and I know he has much more potential to be shown.',
    },
    {
      id: 4,

      name: 'Isai Céspedes',
      role: 'Full-Stack Web Developer. JavaScript | Rails | React | Redux.',
      test: "I mentored Saqlain some months ago, and I can say that he is one of those people that you love to work with. he was always interested in what I was trying to teach her, paying attention and always asking questions if something was not clear. When it comes to professional skills, he is really committed to work, always doing her best and going beyond the requirements of the project he's building.",
    },
    {
      id: 5,

      name: 'Hamza Tarar',
      role: 'Software Developer',
      test: "Throughout all our collaborations, Saqlain has always conducted herself politely and kindly. he comes across as someone that's always willing to help and puts the team ahead of herself. But beneath this, I see a strength and determination to distinguish herself. he's not only someone I highly recommend but is also someone I greatly respect.",
    },
  ];
  return (
    <section id="testmonials">
      <h5>Feedback from my peers</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
         
            <h5 className='client__name'>{test.name}</h5>
            <small className="client__review">{test.test}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials
