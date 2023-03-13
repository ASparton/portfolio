import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import { Badge } from "@mantine/core";

import "../../styles/components/sections/projects.css";

export default function ProjectCard({ project }) {
  return (
    <article className="project" radius="md">
      <div className="name">
        <Link
          to={`/projects/${project.name}`}
          state={{
            project: project,
          }}
        >
          <h1>{project.displayName}</h1>
        </Link>
        <i>{project.date}</i>
      </div>
      <Link
        to={`/projects/${project.name}`}
        state={{
          project: project,
        }}
        className="cover-container"
      >
        <img
          className="cover"
          src={`data:image/png;base64,${project.cover}`}
          alt={`${project.name} cover`}
        />
      </Link>
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
