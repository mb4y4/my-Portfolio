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
    title: "Crafting Careers: My Resume Site, Hosted with Versel 🚀",
    description:
      "Welcome to my digital professional hub, the culmination of my dedication to both web development and career advancement. This site is a testament to my skills as a developer, and a showcase of my professional experience and accomplishments.",
    url: "https://my-portfolio-kappa-blond.vercel.app/",
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
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
