import React from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar.jsx';
import Header from './container/Header/Header';
import About from './container/About/About';
import Work from './container/Work/Work';
import Skills from './container/Skills/Skills';
import Testimonial from './container/Testimonial/Testimonial';
import Footer from './container/Footer/Footer';

function App() {
  return (
   <><Navbar />
   <Header />
   <About/>
   <Work/>
   <Skills/>
   <Testimonial/>
   <Footer/>
   </>
  )
}

export default App;