import React, { useState, useEffect } from "react";
import { client } from "../../client";


import Hero from "./Hero/Hero";
import About from "./About/About";
import Experience from "./Experience/Experience";
import Projects from "./Projects/Projects";
import OtherProjects from "./OtherProjects/OtherProjects";
import Contact from "../../components/Contact/Contact";
import LoadingSpinner from "../../components/UI/LoadingSpinner/LoadingSpinner";

const Home = () => {
  const [projects, setProjects] = useState([]);


  useEffect(() => {
    const query = "*[_type == 'projects'] | order(date desc)";
    client.fetch(query).then((data) => setProjects(data));
  }, []);

  if (!projects) return <LoadingSpinner />;

  return (
    <>
      {/* HERO SECTION */}
      <Hero />

      {/* ABOUT SECTION */}
      <About />

      {/* EXPERIENCE SECTION */}
      <Experience />

      {/* PROJECTS SECTION */}
      <Projects projects={projects} />

      {/* MORE PROJECTS SECTION */}
      <OtherProjects projects={projects} />

      {/* CONTACT SECTION */}
      <Contact />
    </>
  );
};

export default Home;

