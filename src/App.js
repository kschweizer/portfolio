import './App.css';
import React, { useEffect, useState } from 'react';
import MyNavbar from './components/MyNavbar';
import Greeting from './components/Greeting';
import Projects from './components/Projects';
import Education from './components/Education';
import Welcome from './components/Welcome';
import Contact from './components/Contact';

function App() {

  const [greetVisible, setGreetVisible] = useState(false);
  const [projVisible, setProjVisible] = useState(false);
  const [eduVisible, setEduVisible] = useState(false);


  useEffect(() => {
    const greetPos = document.getElementById("greet").offsetTop;
    const projPos = document.getElementById("proj").offsetTop;
    const eduPos = document.getElementById("edu").offsetTop;
    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight - 350;
      if (greetPos < scrollPos && !greetVisible) {
        setGreetVisible(true);
      }
      else if (projPos < scrollPos && !projVisible) {
        setProjVisible(true);
      }
      else if (eduPos < scrollPos && !eduVisible) {
        setEduVisible(true);
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [greetVisible, projVisible, eduVisible]);

  
  return (
    <div className="App">
      <MyNavbar /> 
      <Welcome />

      {/* apply fade-in.is-visible once elements are scrolled past */}
      <div id="greet" className={`fade-in ${ greetVisible ? 'is-visible' : ''}`}>
        <Greeting />
      </div>
      <div id="proj" className={`fade-in ${ projVisible ? 'is-visible' : ''}`}>
        <Projects />
      </div>
      <div id="edu" className={`fade-in ${ eduVisible ? 'is-visible' : ''}`}>
        <Education />
      </div>
      {/* end of fade-in componenets */}

      <Contact />
    </div>
  );
}

export default App;
