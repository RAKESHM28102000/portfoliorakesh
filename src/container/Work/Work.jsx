import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
// import { urlFor, client } from '../../client';
import './Work.scss';

const Work = () => {
  const data=[{title:'Youtube clone app',description:'Youtube clone in Reactjs with MUI-5 and RapidAPI',src:"../image/youtube.png",linkProject:"https://youtube-rakesh.onrender.com/",tags:['React JS'] },
  {title:'Nextjs app',description:'Nextjs app with SSR',src:"../image/nextapp.png",linkProject:"https://github.com/RAKESHM28102000/nextapp",tags:['Web App'] },
  {title:'Chuck Norris app',description:'Chuck Norris app  in Reactjs with  chuck norris API and  it gives joke based on title',src:"../image/chucknorris.png",linkProject:"https://github.com/RAKESHM28102000/chucknorrisapp",tags:['React JS'] },
  {title:'Portfolio',description:'portfolio using reactjs,scss,framer motion ',src:"../image/mpr1.png",linkProject:"https://rakeshm.onrender.com/",tags:['React JS'] },
  {title:'MPR POWER TECH',description:'This is our electrical engineering company website',src:"../image/mpr2.png",linkProject:"https://mprpowertech.onrender.com/",tags:['React JS'] },
  {title:'Top brand',description:'Top brand website ',src:"../image/topbrand.png",linkProject:"https://topbrand.onrender.com/",tags:['React JS'] },
  {title:'Movies Search app',description:'Movie search app with React,App will be able to search for movies via the OMDB API. ',src:"../image/movies.png",linkProject:"https://moviefinder-c9zg.onrender.com/",tags:['React JS'] },
  {title:'My Portfolio',description:'portfolio app using Reactjs and threejs',src:"../image/portfolio.png",linkProject:"https://rakeshm-web-developer.onrender.com/",tags:['React JS'] },
  {title:'Social Media app',description:'Social media using React and Mui',src:"../image/socialmedia.png",linkProject:"https://reactapp2023.onrender.com/",tags:['React JS'] },
  {title:'Tanspycon 2023',description:'Tanpsycon event website using Ejs,Nodejs,Expressjs,MongoDB.',src:"../image/tanspy.png",linkProject:"https://tanpsycon2023.onrender.com",tags:['Web App']},
  {title:'Blog Website.',description:'Blog website using node.js and express.js and mongodb and ejs.',src:"../image/blog.png",linkProject:"https://myblog-r2zp.onrender.com/" ,tags:['Web App'] },
  {title:'Google keep clone App',description:'Clone of google keep app using Reactjs.',src:"../image/googlekeep.png",linkProject:"https://reactgooglekeepapp.onrender.com/" ,tags:['Mobile App'] },
  {title:' To-do list App',description:'Dynamic Frontend, through EJS,which is an NPM package ,Backend built with Nodejs,Database Used: MongoDB Atlas',src:"../image/todolist.png",linkProject:"https://todolist-v2-qc8a.onrender.com/" ,tags:['UI/UX'] },]
 
 
 
 
 
  const [works, setWorks] = useState(data);
  const [filterWork, setFilterWork] = useState(data);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  // useEffect(() => {
  //   const query = '*[_type == "works"]';

  //   client.fetch(query).then((data) => {
  //     setWorks(data);
  //     setFilterWork(data);
  //   });
  // }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">My Creative <span>Projects</span> Section</h2>

      <div className="app__work-filter">
        {['UI/UX', 'Web App', 'Mobile App', 'React JS', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div
              className="app__work-img app__flex"
            >
              <img src={work.src} alt={work.title} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href={work.linkProject} target="_blank" rel="noreferrer">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={"https://github.com/RAKESHM28102000?tab=repositories"} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  'app__primarybg',
);