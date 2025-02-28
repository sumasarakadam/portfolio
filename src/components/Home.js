import React, { useState, useEffect } from "react";
import "../styles.css";
import profilePic from "./assets/profile.jpg"; // Ensure the image is placed in the correct assets folder

const roles = [
  "Full Stack Developer",
  "Web Designer",
  "Web Developer",
  "AI Developer",
];

const Home = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const typingSpeed = isDeleting ? 50 : 100; // Speed for typing and deleting

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting && displayText.length === roles[currentRole].length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }

      setDisplayText((prev) =>
        isDeleting
          ? roles[currentRole].substring(0, prev.length - 1)
          : roles[currentRole].substring(0, prev.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section className="hero">
      <div className="hero-image">
        <img src={profilePic} alt="Suma Sarakadam" />
      </div>
      <div className="hero-content">
        <h2>
          Hey! I'm Suma Sarakadam <br />
          <span className="typing">{displayText}</span>
        </h2>
        <p> Where passion meets expertise—discover my work and skills.</p>
        <button className="btn">Hire Me</button>
      </div>
    </section>
  );
};

export default Home;