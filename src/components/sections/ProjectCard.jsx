import PropTypes from "prop-types";

import { Badge } from "@mantine/core";
import GithubLink from "../project/GithubLink";

import "../../styles/components/sections/projects.css";

export default function ProjectCard({ project }) {
  return (
    <article className="project" radius="md">
      <GithubLink repositoryUrl={project.url} top={25} left={25} />
      <div className="name">
        <a href={`/projects/${project.name}`}>
          <h1>{project.displayName}</h1>
        </a>
        <i>{project.date}</i>
      </div>
      <a href={`/projects/${project.name}`} className="cover-container">
        <img
          className="cover"
          src={`data:image/png;base64,${project.cover}`}
          alt={`${project.name} cover`}
        />
      </a>
      <p className="description">{project.description}</p>
      <ul className="topics">
        {project.topics.map((topic, index) => (
          <li key={index}>
            <Badge color="indigo" variant="outline" size="lg" mb="sm">
              {topic}
            </Badge>
          </li>
        ))}
      </ul>
    </article>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.object,
};
