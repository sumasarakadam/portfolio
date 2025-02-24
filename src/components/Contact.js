import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import "../styles.css";

const Contact = () => {
  return (
    <section className="contact">
      {/* Animated Header */}
      <motion.h2
        className="contact-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Me
      </motion.h2>

      {/* Animated Form */}
      <motion.form
        className="contact-form"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.input
          type="text"
          placeholder="Your Name"
          className="contact-input"
          whileFocus={{ scale: 1.05 }}
        />
        <motion.input
          type="email"
          placeholder="Your Email"
          className="contact-input"
          whileFocus={{ scale: 1.05 }}
        />
        <motion.textarea
          placeholder="Your Message"
          className="contact-input textarea"
          whileFocus={{ scale: 1.05 }}
        ></motion.textarea>
        
        {/* Animated Yellow Submit Button */}
        <motion.button
          type="submit"
          className="contact-btn"
          whileHover={{
            scale: 1.1,
            backgroundColor: "#FFD700",
            boxShadow: "0px 0px 15px rgba(255, 215, 0, 0.8)"
          }}
          whileTap={{ scale: 0.9 }}
        >
          Submit
        </motion.button>
      </motion.form>

      {/* Animated Icons */}
      <motion.div
        className="contact-icons"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <a href="https://github.com/Suma2812" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} className="contact-icon" />
        </a>
        <a href="https://www.linkedin.com/in/saisuma-sarakadam-314563289" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} className="contact-icon" />
        </a>
        <a href="c:\Users\91991\AppData\Local\Packages\5319275A.WhatsAppDesktop_cv1g1gvanyjgm\TempState\AD0EFAD9DD0ABAEC4B8F9AAA489EC2F1\WhatsApp Image 2025-02-23 at 11.39.57_5b8e5ec4.jpg" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} className="contact-icon" />
        </a>
        <a href="https://mail.google.com/mail">
          <FaEnvelope size={30} className="contact-icon" />
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;
