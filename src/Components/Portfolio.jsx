/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/desktop with books and laptop.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Introducing 'My Mystic Wheels' - Your Key to Unveiling Automotive Dreams 🚗🔮",
    description:
      "Introducing a revolutionary car leasing website, that redefines the way you access the open road. Imagine a world where finding and leasing your dream car is as easy as a few clicks. That's precisely what our project is all about.",
    url: "https://my-mystic-wheel.vercel.app/",
  },
  {
    title: "gMyGames: Where Gaming Meets Seamless Discovery 🕹️",
    description:
      "Step into the immersive world of 'gMyGames', your ultimate portal to explore the vast galaxy of video games. Powered by React, Vite, and dressed in the sleek design of Tailwind CSS, this project is not just another gaming website; it's an odyssey of discovery and adventure.",
    url: "https://g-my-games.vercel.app/",
  },
  {
    title: "ThinkTrack, my Django-based Note Taker app, seamlessly managing thoughts and ideas 🚀",
    description:
      "ThinkTrack provides an intuitive platform for efficient note-taking, making organization and productivity a breeze.",
    url: "https://note-taker-n2se.onrender.com/",
  },
  {
    title: "🐍 Python Odyssey: A Weekly Journey into Code's Uncharted Territory 🌟",
    description:
      "Welcome to my weekly Python adventures, where I embark on a captivating voyage of learning, problem-solving, and mastery in the world of code. In this ever-evolving odyssey, I tackle a diverse array of projects and challenges, each carefully curated to expand my Python expertise.",
    url: "https://github.com/mb4y4/Python_Weekly.git",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "2rem",
        }}
      >
        <img
          src={image}
          style={{ width: "90%", maxWidth: "400px", marginBottom: "1rem" }} // Adjust image width and max width for responsiveness
          alt={imageAltText}
        />
        <div className="container" style={{ maxWidth: "90%" }}>
          {" "}
          {/* Adjust container width for responsiveness */}
          {projectList.map((project) => (
            <div className="box" key={project.title} style={{ marginBottom: "1rem" }}>
              {" "}
              {/* Add margin bottom for spacing */}
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ marginBottom: "0.5rem" }}>{project.title}</h3>{" "}
                {/* Add margin bottom for spacing */}
              </a>
              <p className="small" style={{ margin: "0" }}>
                {project.description}
              </p>{" "}
              {/* Remove margin for spacing */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
