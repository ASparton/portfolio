import { Badge, Image } from "@mantine/core";

export default function ProjectHeader({ project }) {
  return (
    <section style={{ marginTop: "2em" }}>
      <div
        style={{
          width: "55vw",
          marginLeft: "22.5vw",
          textAlign: "center",
          position: "relative",
        }}
      >        
        <h1>{project.displayName}</h1>
        <i>{project.date}</i>
      </div>
      <ul
        className="topics"
        style={{
          width: "40vw",
          marginLeft: "30vw",
          marginTop: "2em",
        }}
      >
        {project.topics.map((topic, index) => (
          <li key={index}>
            <Badge color="indigo" variant="outline" size="lg" mb="sm">
              {topic}
            </Badge>
          </li>
        ))}
      </ul>
      <Image
        src={`data:image/png;base64,${project.cover}`}
        alt={`${project.name} cover`}
        style={{ width: "55vw", marginLeft: "22.5vw", marginTop: "1em" }}
      />
      <p
        style={{
          width: "56vw",
          marginLeft: "22vw",
          marginTop: "1em",
          textAlign: "center",
          fontSize: "1.3em",
          fontWeight: 500,
        }}
      >
        {project.description}
      </p>
    </section>
  );
}
