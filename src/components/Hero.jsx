import React, { useEffect } from "react";
import { SocialIcon } from "react-social-icons";
import "./Hero.css";
import AOS from "aos";
import "aos/dist/aos.css";
const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="hero" className="sections active">
      <div id="hero-max-div">
        <div id="para-me" data-aos="fade-up">
          <p>
            Full Stack Developer in 📍India. 👨🏻‍💻Computer Science undergrad at
            Jaypee University of Information Technology, Solan. I'm passionate
            about cutting-edge, pixel-perfext, beautiful interfaces and
            intuitively implemented UX and I like to 🛠️create things which leave
            a long lasting impression. I also like to play 🏸badminton and 📺
            watch Anime Itachi FTW.
            <span>
              “Difficult? Great! You were anyway not made to play small. Go
              crush it.” ― Hiral Nagda
            </span>
            <div id="socials">
              <div>
                <p id="number" style={{ opacity: "0.8" }}>
                  <img
                    alt="temp"
                    src="https://drive.google.com/uc?export=view&id=1aRdNKxcZB2_AYNd0-kycsx0NiKv3t4GS"
                  />
                  <span style={{ color: "#e5c07b" }}>8448772593</span>
                </p>
                <p id="number" style={{ opacity: "0.8" }}>
                  <img
                    alt="temp"
                    src="https://drive.google.com/uc?export=view&id=13Sa8hmj5Yypm2C6_ofWMGp-39WGNELAY"
                  />
                  <span style={{ color: "#e5c07b" }}>
                    pathak2002ujjwal@gmail.com
                  </span>
                </p>
              </div>
              <div>
                <SocialIcon
                  url="https://www.linkedin.com/in/ujjwalpathaak/"
                  bgColor="transparent"
                  fgColor="rgb(240 121 197 / 65%)"
                  target="_blank"
                />
                <SocialIcon
                  url="https://github.com/ujjwalpathaak"
                  bgColor="transparent"
                  fgColor="rgb(240 121 197 / 65%)"
                  target="_blank"
                />
                <SocialIcon
                  url="https://www.instagram.com/ujjwalpathaak/"
                  bgColor="transparent"
                  fgColor="rgb(240 121 197 / 65%)"
                  target="_blank"
                />
              </div>
            </div>
          </p>
        </div>
        <div id="illustration-me" data-aos="fade-up"></div>
      </div>
    </div>
  );
};

export default Hero;
