import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Skills.css";
// import { SocialIcon } from "react-social-icons";
const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="skills" className="sections active">
      <div id="skills-max">
        <div id="pls_work">
          <p className="topic-headings" data-aos="fade-right">
            SKILLS
          </p>
          <a
          id="aplsword"
            href="https://drive.google.com/file/d/1GNoWk_YBYAfJ4dH1STo3jdhclGJviTvD/view?usp=share_link"
            target="_blank"
          >
            RESUME
          </a>
        </div>
        <div id="skills-container" data-aos="fade-up ">
          <button className="skills-btn">
            <img
              alt="temp"
              src="https://drive.google.com/uc?export=view&id=1t0z4kt1i_vvMi63CQCXxJB-aSGkClBLL"
            />
          </button>
          <button className="skills-btn">
            <img
              alt="temp"
              src="https://drive.google.com/uc?export=view&id=1XwudjUmBIc2DkvLjSSzMlatLZI4hWku7"
            />
          </button>
          <button className="skills-btn">
            <img
              alt="temp"
              src="https://drive.google.com/uc?export=view&id=10Z9s0T0n_J6aaGjzcozKpfFgel1qzzMn"
            />
          </button>
          <button className="skills-btn">
            <img
              alt="temp"
              src="https://drive.google.com/uc?export=view&id=1kH8ysTPWhYIB5osMRKs3xzMtWOmlcdVF"
            />
          </button>
          <button className="skills-btn">
            <img
              alt="temp"
              src="https://drive.google.com/uc?export=view&id=1ZqWNwqbcMy3KvLuuQypdtCSdy-RMb0LV"
            />
          </button>
          <button className="skills-btn">
            <img
              alt="temp"
              src="https://drive.google.com/uc?export=view&id=139VVBxjDdED5vJ-Jz8yO5DW1XGtVYFez"
            />
          </button>
          <button className="skills-btn">
            <img
              alt="temp"
              src="https://drive.google.com/uc?export=view&id=1omaVKlZEx3oBYAHdA9qKZX41x2zz98h3"
            />
          </button>
          <button className="skills-btn">
            <img
              alt="temp"
              src="https://drive.google.com/uc?export=view&id=1xW0uVwpNALLvFhZEyac0-Wvz7zJqoeQH"
            />
          </button>
          <button className="skills-btn">
            <img
              alt="temp"
              src="https://drive.google.com/uc?export=view&id=1evQiRkb0NBGrnRzGvK24-AO0ElJAialR"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Skills;
