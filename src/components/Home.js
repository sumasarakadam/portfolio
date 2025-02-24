import React from "react";
import "../styles.css";
import profilePic from "./assets/profile.jpg"; // Add your image in the assets folder

const Home = () => {
    return (
        <section className="hero">
            <div className="hero-image">
                <img src={profilePic} alt="Suma Sarakadam" />
            </div>
            <div className="hero-content">
                <h2>Hey! I'm Suma Sarakadam</h2>
                <p>A Frontend Developer passionate about building amazing digital experiences.</p>
                <button className="btn">Hire Me</button>
            </div>

        </section>
    );
};

export default Home;
