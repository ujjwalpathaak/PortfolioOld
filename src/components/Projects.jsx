import React, { useEffect } from "react";
import { SocialIcon } from "react-social-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Projects.css";
const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="projects" className="sections active">
      <p className="topic-headings" data-aos="fade-right">
        PROJECTS
      </p>
      <div id="project-scroll">
        {/* Project #1 */}
        <div className="single-project">
          <img
            alt="temp"
            data-aos="fade-right"
            src="https://drive.google.com/uc?export=view&id=1wkF76cEC739rGAoI80GU8WdM-qWWq16C"
          />
          <div id="project-info" data-aos="fade-left">
            <p className="project-name">
              EatJUIT - Food Delivery Application
              <span className="project-tech">React Native, Redux</span>
            </p>
            <p className="project-desc">
              Made a cross-platform application catering all the midnight needs
              for JUIT hostler using React Native and Redux for state management
            </p>
            <div id="project-links">
              <SocialIcon
                url="https://github.com/ujjwalpathaak/EatJUIT"
                bgColor="transparent"
                fgColor="white"
              />
              <SocialIcon
                url="https://www.youtube.com/shorts/HdEuvNqBEI8"
                bgColor="transparent"
                fgColor="white"
              />
            </div>
          </div>
        </div>
        {/* Project 2 */}
        <div className="single-project single-project2">
          <div id="project-info2" data-aos="fade-right">
            <p className="project-name2">
              Twaddle - Chat App
              <span className="project-tech">
                ReactJS, NodeJS, ExpressJS, MongoDB, Socket.io
              </span>
            </p>
            <p className="project-desc2">
              Developed a full-stack chat application using NodeJS serving a
              REST API with React as the frontend. Implemented Google OAuth to
              authenticate users. Included the ability to send documents and
              images
            </p>
            <div id="project-links">
              <SocialIcon
                url="https://github.com/ujjwalpathaak/Twaddle-client"
                bgColor="transparent"
                fgColor="white"
              />
              <SocialIcon url="https://twaddle-client.herokuapp.com/" bgColor="transparent" fgColor="white" />
            </div>
          </div>
          <img
            alt="temp"
            data-aos="fade-left"
          src="https://drive.google.com/uc?export=view&id=1WaDUT_Ro75pHCs7zrOnGWuvP4WYsqESg"
            />
        </div>
        {/* Project #3 */}
        <div className="single-project">
          <img
            alt="temp"
            data-aos="fade-right"
            src="https://drive.google.com/uc?export=view&id=1Dx_rf7MRJw2-WS55gjn3aIJt46UeEiWQ"
          />
          <div id="project-info" data-aos="fade-left">
            <p className="project-name">
              JORDONS - Ecommerce
              <span className="project-tech"> ReactJS, React Router</span>
            </p>
            <p className="project-desc">
              Made an Ecommerce website frontend listed with all jordons till
              date. Includes page for every individual iten and cart.
            </p>
            <div id="project-links">
              {/* <SocialIcon
                url="https://github.com/ujjwalpathaak/Weather.io---WebApp"
                bgColor="transparent"
                fgColor="white"
              />
              <SocialIcon
                url="https://twaddle-client.herokuapp.com/"
                bgColor="transparent"
                fgColor="white"
              /> */}
            </div>
          </div>
        </div>

        {/* Project #4 */}
        <div className="single-project single-project2">
          <div id="project-info2" data-aos="fade-right">
            <p className="project-name2">
              Weather.io - Weather App
              <span className="project-tech">
                NodeJS, ExpressJS, EJS, API
              </span>{" "}
            </p>
            <p className="project-desc2">
              Made a Weather App displaying weather conditions of various cities accross the globe.
            </p>
            <div id="project-links">
              <SocialIcon
                url="https://github.com/ujjwalpathaak/Weather.io---WebApp"
                bgColor="transparent"
                fgColor="white"
              />
              {/* <SocialIcon url="" bgColor="transparent" fgColor="white" /> */}
            </div>
          </div>
          <img
            data-aos="fade-left"
            alt="temp"
            src="https://drive.google.com/uc?export=view&id=1zlsBPy72kbkp0WGE_CoZIEtUQGqPIJcj"
          />
        </div>

        {/* Project #5 */}
        <div className="single-project">
          <img
            alt="temp"
            data-aos="fade-right"
            src="https://drive.google.com/uc?export=view&id=14InTfktPR1OUZ3p2BJuChyl-Rz9fMOAA"
          />
          <div id="project-info" data-aos="fade-left">
            <p className="project-name">
              Sudoku Solver
              <span className="project-tech">HTML, CSS, JS, API</span>
            </p>
            <p className="project-desc">
              Made a Sudoku Solver website to call API which solves an Array and then Parse it using EJS to show solution.
            </p>
            <div id="project-links">
              <SocialIcon
                url="https://github.com/ujjwalpathaak/Sudoku_Solver"
                bgColor="transparent"
                fgColor="white"
              />
              {/* <SocialIcon url="" bgColor="transparent" fgColor="white" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
