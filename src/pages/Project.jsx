import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPortfolioProjectByName } from "../services/reposFetcher";

import ProjectHeader from "../components/project/ProjectHeader";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons";

import "../styles/pages/project.css";

export default function Project() {
  const paramProjectName = useParams().name;
  const [project, setProject] = useState();

  useEffect(() => {
    getPortfolioProjectByName(paramProjectName)
      .then((fetchedProject) => setProject(fetchedProject))
      .catch((error) => console.error(error));
  }, [paramProjectName]);

  return (
    <>
      {project && (
        <>
          <ProjectHeader project={project} />
          <section
            dangerouslySetInnerHTML={{ __html: project.readme }}
            style={{
              width: "75vw",
              marginLeft: "12.5vw",
              display: "flex",
              justifyContent: "center",
            }}
          ></section>
          <section
            style={{
              width: "100vw",
              display: "flex",              
              justifyContent: "center",
            }}
          >
            <div style={{
              padding: "3em",
              borderRadius: "20px",
              backgroundColor: "#212529",
              display: "flex",
              flexFlow: "column nowrap",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 0px 20px grey",
            }}>
              <a href={project.url} target="_blank" rel="noreferrer noopener">
                <IconBrandGithub className="github" color="whitesmoke" />
              </a>
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer noopener"
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "whitesmoke",
                  textDecoration: "underline",
                }}
                className="more-of"
              >
                More of this project on Github
                <IconExternalLink style={{ marginLeft: "0.25em" }} />
              </a>
            </div>
          </section>
        </>
      )}
    </>
  );
}
