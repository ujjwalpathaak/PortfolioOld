import React, { useEffect } from "react";
import "./Parallax.css";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const Parallax = () => {
  useEffect(() => {
    let stars = document.getElementById("stars");
    let moon = document.getElementById("moon");
    let mountains_behind = document.getElementById("mountains_behind");
    let rocks = document.getElementById("rocks");
    let name = document.getElementById("name");
    let cloudleft = document.getElementById("cloud-left");

    window.addEventListener("scroll", () => {
      let value = window.scrollY;
      let rock_value = window.scrollY + 50;
      name.style.top = value * 0.7 + "px";
      moon.style.top = value * 1 + "px";
      stars.style.left = value * 0.25 + "px";
      mountains_behind.style.top = value * 0.4 + "px";
      rocks.style.left = rock_value * 0 + "px";
      cloudleft.style.left = rock_value * 0.6 + "px";
    });
  }, []);

  const [text] = useTypewriter({
    words: [
      "“Wake up to reality” -Madara",
      "loves to build stuff",
      "good UI is a must",
      "thrives on coffee",
      "trying to make it big",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div id="parallax">
      <img
        alt="temp"
        src="https://drive.google.com/uc?export=view&id=1I1gSOm2zuw2p4ta_c_tnnrnbgMBFLf_f"
        id="stars"
      />
      <img
        alt="temp"
        src="https://drive.google.com/uc?export=view&id=1SI09sxjYiJjI10MkdgEXtjyYxEpG2GkR"
        id="moon"
        className="merge"
      />
      <img
        alt="temp"
        src="https://drive.google.com/uc?export=view&id=11nwvSsqzq1mgZwPPMLPbtS6MQi7ZzZQS"
        id="cloud-left"
      />
      <img
        alt="temp"
        src="https://drive.google.com/uc?export=view&id=1najAkaTbG7CtdIEJw0V7yUpqcraPF0WT"
        id="mountains_behind"
      />
      <img alt="temp" src="https://drive.google.com/uc?export=view&id=1BpNxPzUb50kcssl6Va_V8bHB7c6HgvLI" id="rocks" />

      <div id="name">
        <span id="name">Ujjwal Pathak</span>
        <span id="typewriter">
          {text}
          <Cursor
            id="typewriter-cursor"
            cursorColor="#E5C07B"
            style={{ fontWeight: "900" }}
          />
        </span>
      </div>
    </div>
  );
};

export default Parallax;
