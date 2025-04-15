import './App.css';
import selfie from "../src/selfie.jpg";
import runbuddy from "../src/02-run-buddy.jpg";
import homepage from "../src/homepage.png";
import workItDone from "../src/work-it-done.jpg";
import stillGood from "../src/stillGood.jpg";
import { HashRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <main className="main">

      <header className="header">
        <h1>Patrick Sebstead</h1>
        <nav className="nav">
          <ul>
            <li><a href="#/bio">Bio</a></li>
            <li><a href="#/contact">Contact</a></li>
            <li><a href="#/projects">Projects</a></li>
          </ul>
        </nav>
      </header>

      <section className="bio" id="bio">
        <picture>
          <img src={selfie} alt="Professional Selfie" />
        </picture>
        <article className="about">
          <h3>About Me</h3>
          <p>
          Web Developer with a diverse skillset encompassing LEAN manufacturing implementation and industrial automation. 
          Technical abilities include working with HMIs, PLCs, and robotics, alongside proficiency in web development. 
          Recognized as a proactive, resourceful, and persistent problem-solver. Excellent communicator with effective 
          client relationship-building skills. Graduate of Trilogy Education Services Web Development through the 
          University of Wisconsin Madison. 
          </p>
          <h3>My Skills</h3>
          <p>
            Frontend: HTML5, CSS, JavaScript, ReactJS,  
            Backend:  MySQL, MongoDB, Express,  Node
          </p>
          <address id="contact">
            <h3>Contact Information</h3>
            <p>425 E. Cecil St</p>
            <p>Neenah, WI 54956</p>
            <p>Email: sebstead@yahoo.com</p>
            <p>Phone: (920) 410-1803</p>
          </address>
        </article>
      </section>

      <section className="projects" id="projects">
        <h2>Projects</h2>
        <div className="project-grid">
          <a href="https://raidernationbuilder.github.io/run-buddy/" target="_blank" className="project-item">
            <img src={runbuddy} alt="Run Buddy Website" />
          </a>
          <a href="https://raidernationbuilder.github.io/finance-assistant/" target="_blank" className="project-item">
            <img src={homepage} alt="Finance Assistant Website" />
          </a>
          <a href="https://warm-eyrie-07140.herokuapp.com/" target="_blank" className="project-item">
            <img src={workItDone} alt="Work It Done Website" />
          </a>
          <a href="https://pacific-bayou-24755.herokuapp.com/" target="_blank" className="project-item">
            <img src={stillGood} alt="StillGood Website" />
          </a>
        </div>
      </section>
    </main>
  );
}

export default App;
