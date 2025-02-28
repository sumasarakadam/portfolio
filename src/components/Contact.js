import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import "../styles.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Using Formspree to send email
    fetch("https://formspree.io/f/YOUR_FORMSPREE_ID", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(() => alert("Message Sent Successfully!"))
      .catch(() => alert("Error Sending Message"));
    
    // Clear form
    setFormData({ name: "", email: "", message: "" });
  };

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
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.input
          type="text"
          name="name"
          placeholder="Your Name"
          className="contact-input"
          value={formData.name}
          onChange={handleChange}
          required
          whileFocus={{ scale: 1.05 }}
        />
        <motion.input
          type="email"
          name="email"
          placeholder="Your Email"
          className="contact-input"
          value={formData.email}
          onChange={handleChange}
          required
          whileFocus={{ scale: 1.05 }}
        />
        <motion.textarea
          name="message"
          placeholder="Your Message"
          className="contact-input textarea"
          value={formData.message}
          onChange={handleChange}
          required
          whileFocus={{ scale: 1.05 }}
        ></motion.textarea>
        
        {/* Animated Submit Button */}
        <motion.button
          type="submit"
          className="contact-btn"
          whileHover={{
            scale: 1.1,
            backgroundColor: "#FFD700",
            boxShadow: "0px 0px 15px rgba(255, 215, 0, 0.8)",
          }}
          whileTap={{ scale: 0.9 }}
        >
          
          Submit
        </motion.button>
      </motion.form>

      {/* Animated Social Icons */}
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
        <a href="https://www.instagram.com/YOUR_INSTAGRAM" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} className="contact-icon" />
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;
