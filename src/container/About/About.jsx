/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { images } from '../../constants';
import ResumeButton from '../../components/ResumeButton';
// import { urlFor, client } from '../../client';
const abouts=[{title:'Frontend Developer',description:'Proficient in HTML, CSS, and JavaScript with hands-on experience in building dynamic web applications. Skilled in React.js for creating interactive user interfaces and Tailwind CSS for efficient styling and layout design. Excels in crafting responsive and visually appealing websites, employing modern development practices. Demonstrated ability to integrate backend services and APIs for seamless functionality. Passionate about delivering elegant solutions and staying abreast of emerging technologies in web development.',src:images.about04},
{title:'Graphic Designer',description:'Experienced in Photoshop and Illustrator, I specialize in creating captivating visual designs that blend creativity with functionality. With a keen eye for detail and a passion for innovation, my portfolio showcases a diverse range of projects including logo designs, digital illustrations, photo manipulations, and branding materials. I thrive on turning ideas into visually stunning realities, utilizing advanced techniques and tools to deliver compelling visuals tailored to client needs. From sleek corporate identities to whimsical illustrations, my work reflects a versatile skill set and a commitment to excellence. Let\'s collaborate to bring your vision to life with precision and flair.',src:images.about02},
{title:'React Developer',description:'Experienced in developing dynamic web applications using React.js and Next.js frameworks. Proficient in creating responsive and interactive user interfaces with React.js, leveraging its component-based architecture. Skilled in server-side rendering and static site generation with Next.js, optimizing performance and SEO. Capable of integrating state management libraries like Redux or context API for efficient data flow. Strong understanding of modern web development practices, including hooks, functional components, and SSR optimization techniques.',src:images.about03},
{title:'Backend Developer',description:'Experienced full-stack developer proficient in Node.js, Express.js, MongoDB, and PostgreSQL. Skilled in developing RESTful APIs and Java applications. Demonstrated ability to architect and implement scalable, secure, and efficient web solutions. Proven track record in delivering high-quality software projects, from conception to deployment. Passionate about leveraging technology to solve complex problems and drive innovation.',src:images.about01},
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
             <div style={{display:"flex",justifyContent:"center", alignItems:"center",color:"white",backgroundColor:"black",width:"200px",margin:"10px",borderRadius:"20px",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",padding:"5px"}}><a style={{textDecoration:"none",color:"white"}} href='https://www.behance.net/mrakeshmrakesh' target='blank'>Behance Profile</a></div>
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