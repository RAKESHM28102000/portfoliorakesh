import React, { useState} from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants';
// import { urlFor, client } from '../../client';
import './Testimonial.scss';

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([{name:"Prasanna kumar",company:"MPR POWER TECH",imgUrl:images.adidas,feedback:"Cool 😎 WEB DEVELOPER"},
  {name:"Mano K",company:"MPR",imgUrl:images.adidas,feedback:"Awesome GRAPHIC DESIGNER"}]);

  const [brands, setBrands] = useState([{name:"Bolt",imgUrl:images.bolt},
  {name:"spotify",imgUrl:images.spotify},
  {name:"skype",imgUrl:images.skype},
  {name:"New balance",imgUrl:images.asus}]);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  // useEffect(() => {
  //   const query = '*[_type == "testimonials"]';
  //   const brandsQuery = '*[_type == "brands"]';

  //   client.fetch(query).then((data) => {
  //     setTestimonials(data);
  //   });

  //   client.fetch(brandsQuery).then((data) => {
  //     setBrands(data);
  //   });
  // }, []);

  return (
    <>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img src={testimonials[currentIndex].imgUrl} alt={testimonials[currentIndex].name} />
            <div className="app__testimonial-content">
              <p className="p-text">{testimonials[currentIndex].feedback}</p>
              <div>
                <h4 className="bold-text">{testimonials[currentIndex].name}</h4>
                <h5 className="p-text">{testimonials[currentIndex].company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
              <HiChevronLeft />
            </div>

            <div className="app__flex" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={brand._id}
          >
            <img src={brand.imgUrl} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'testimonial',
  'app__primarybg',
);