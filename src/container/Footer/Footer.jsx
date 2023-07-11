import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
// import { client } from '../../client';
import emailjs from "@emailjs/browser";
import './Footer.scss';
import { useRef } from 'react';

const Footer = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);
  const [form,setForm]=useState({
    name:"",
    email:"",
    message:""
  });

  function setform(e){
   const{name,value} =e.target;
   setForm(function(prev){
    return {...prev,[name]:value}
  });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_et4dha3",
        "template_6r2c7a9",
        ref.current,
        "IOVfu7FGo-01DVraz"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          setForm({
            name:"",
            email:"",
            message:""

          });
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };

  return (
    <>
      <h2 className="head-text">Take a Tea & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:mrakeshmrakesh885@gamil.com" className="p-text">mrakeshmrakesh885@gamil.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+91 6383627745" className="p-text">+91 6383627745</a>
        </div>
      </div>
      {success ?  (
        <div>
          <h3 className="head-text">
          {success && "Thank you for getting in touch!"}</h3>
        </div>
      ):(
        <div className="app__footer-form app__flex">
        <form ref={ref} onSubmit={handleSubmit}  className="app__footer-form app__flex">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="name" value={form.name} onChange={setform} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="email" value={form.email} onChange={setform} />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={form.message}
              name="message"
              onChange={setform}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>{!success ? 'Send Message' : 'Sending...'}</button>
          </form>
        </div>
      ) }
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);