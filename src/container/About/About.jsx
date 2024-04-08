import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { images } from '../../constants';
import ResumeButton from '../../components/ResumeButton';
// import { urlFor, client } from '../../client';
const abouts=[{title:'Frontend Developer',description:'Proficient in HTML, CSS, and JavaScript with hands-on experience in building dynamic web applications. Skilled in React.js for creating interactive user interfaces and Tailwind CSS for efficient styling and layout design. Excels in crafting responsive and visually appealing websites, employing modern development practices. Demonstrated ability to integrate backend services and APIs for seamless functionality. Passionate about delivering elegant solutions and staying abreast of emerging technologies in web development.',src:images.about04},
{title:'Graphic Designer',description:'Experienced in Photoshop and Illustrator, I specialize in creating captivating visual designs that blend creativity with functionality. With a keen eye for detail and a passion for innovation, my portfolio showcases a diverse range of projects including logo designs, digital illustrations, photo manipulations, and branding materials. I thrive on turning ideas into visually stunning realities, utilizing advanced techniques and tools to deliver compelling visuals tailored to client needs. From sleek corporate identities to whimsical illustrations, my work reflects a versatile skill set and a commitment to excellence. Let\'s collaborate to bring your vision to life with precision and flair.',src:images.about02},
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
     
      <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale:1.2 }}
            transition={{ duration: 0.5, type: 'tween' }}
          >
             <ResumeButton/>
          </motion.div>
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