import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { images } from '../../constants';
// import { urlFor, client } from '../../client';
const abouts=[{title:'Frontend Developer',description:'I am frontend developer with a passion for building beautiful and functional web applications',src:images.about04},
{title:'Web Designer',description:'Creative Web Designer Passionate About Crafting Engaging User Interfaces. Fresh Graduate Bringing a Blend of Design Skills and Modern Aesthetic Sensibility.',src:images.about02},
{title:'React Developer',description:'"Enthusiastic React.js Fresher Excited to Transform Ideas into Interactive User Experiences. Adept at Frontend Development and Eager to Contribute to Innovative Projects."',src:images.about03},
{title:'Backend Developer',description:'I am a backend developer with Proficient in Node.js, Express.js, and MongoDB,Dedicated to Learning and Contributing to Innovative Projects.',src:images.about01},
]


const About = () => {
  // const [abouts, setAbouts] = useState([]);

  // useEffect(() => {
  //   const query = '*[_type == "abouts"]';

  //   client.fetch(query).then((data) => {
  //     setAbouts(data);
  //   });
  // }, []);
 

  return (
    <>
      <h2 className="head-text">I Know that <span>Good Design</span> <br />means  <span>Good Business</span></h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.src} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);