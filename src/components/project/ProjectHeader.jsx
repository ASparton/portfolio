import { Badge } from "@mantine/core";
import { IconBrandGithub } from "@tabler/icons";

import "../../styles/pages/project.css";

export default function ProjectHeader({ project }) {
  return (
    <section style={{ marginTop: "2em" }}>
      <div className="project-name">
        <h1>{project.displayName}</h1>
        <i>{project.date}</i>
      </div>
      <ul className="project-topics">
        {project.topics.map((topic, index) => (
          <li key={index}>
            <Badge color="indigo" variant="outline" size="lg" mb="sm">
              {topic}
            </Badge>
          </li>
        ))}
      </ul>
      <a
        href={project.url}
        target="_blank"
        rel="noreferrer noopener"
        className="project-cover"
      >
        <img
          src={`data:image/png;base64,${project.cover}`}
          alt={`${project.name} cover`}
        />
      </a>
      <p className="project-description">{project.description}</p>
    </section>
  );
}
