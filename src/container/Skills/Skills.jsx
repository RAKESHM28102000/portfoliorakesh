import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// import { Tooltip } from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants';
import './Skills.scss';


const Skills = () => {
  const skillset=[{name:"HTML",bgColor:"black",icon:images.html},
  {name:"CSS",bgColor:"grey",icon:images.css},
  {name:"Reactjs",bgColor:"black",icon:images.react},
  {name:"TailwindCss",bgColor:"grey",icon:images.tailwind},
  {name:"Javascript",bgColor:"black",icon:images.javascript},
  {name:"java",bgColor:"grey",icon:images.java},
  {name:"Nodejs",bgColor:"black",icon:images.node},
  {name:"Mongodb",bgColor:"grey",icon:"../image/free-mongodb-3629020-3030245.webp"},
  {name:"git",bgColor:"black",icon:images.git},
  {name:"Saas",bgColor:"grey",icon:images.sass},
  {name:"Nextjs",bgColor:"--var(#fff)",icon:images.nextjs},
  {name:"MU5",bgColor:"black",icon:images.mu5}
  ];

  const experienceSet=[{year:"2022",works:[{name:"B.E.Agricultural and Irrigation Engineering",company:"CGPA:8.07/10",desc:"College of Engineering Guindy,Anna University,chennai."}]},
  {year:"2018",works:[{name:"HSC",company:"Percentage:87.75%",desc:"C.S.I st Hildas and st Hughs Matric hr sec School Chengalpattu."}]},
  {year:"2016",works:[{name:"SSLC",company:"Percentage:93.4%",desc:"C.S.I st Hildas and st Hughs Matric hr sec School Chengalpattu."}]},
 ];
  
  const [experiences, setExperiences] = useState(experienceSet);
  const [skills, setSkills] = useState(skillset);

  // useEffect(() => {
  //   const query = '*[_type == "experiences"]';
  //   const skillsQuery = '*[_type == "skills"]';

  //   client.fetch(query).then((data) => {
  //     setExperiences(data);
  //   });

  //   client.fetch(skillsQuery).then((data) => {
  //     setSkills(data);
  //   });
  // }, []);

  return (
    <>
      <h2 className="head-text">Skills & Educations details</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills?.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences?.map((experience) => (
            <motion.div
              className="app__skills-exp-item"
              key={experience.year}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience?.works?.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      // data-tip
                      // data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                      <p className="p-text"> {work.desc}</p>
                    </motion.div>
                    {/* <Tooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </Tooltip> */}
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);