import { useEffect, useState } from "react";
import { getPortfolioProjects } from "../../services/reposFetcher";

import AliceCarousel from "react-alice-carousel";
import { Loader } from "@mantine/core";
import ProjectCard from "./ProjectCard";

import "react-alice-carousel/lib/alice-carousel.css";
import "../../styles/components/sections/projects.css";

export default function ProjectCards() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getPortfolioProjects()
      .then((portfolioProjects) => {
        setProjects(
          portfolioProjects.map((project) => <ProjectCard project={project} />)
        );
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="projects">
      <span
        id="projects"
        style={{
          position: "relative",
          top: "-100px",
        }}
      ></span>
      <div
        style={{
          marginBottom: "2em",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Loader
          style={{
            display: projects.length === 0 ? "block" : "none",
          }}
        />
      </div>
      <AliceCarousel
        items={projects}
        controlsStrategy="alternate"
        autoPlay
        autoPlayInterval={6000}
        infinite
        keyboardNavigation
      />
    </section>
  );
}
