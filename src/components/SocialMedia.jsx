import React from 'react';
import { BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
    <a href='https://www.linkedin.com/in/rakesh-m-b67121217/' target='blank' ><BsLinkedin/></a> 
    </div>
    <div>
    <a href='https://www.behance.net/mrakeshmrakesh' target='blank' ><FaFacebookF /></a>
    </div>
    <div>
    <a href='https://www.instagram.com/r_creative_graphics/' target='blank' ><BsInstagram /></a>
    </div>
  </div>
);

export default SocialMedia;