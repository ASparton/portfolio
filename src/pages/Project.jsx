import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPortfolioProjectByName } from "../services/reposFetcher";

import { Loader, Code } from "@mantine/core";
import ProjectHeader from "../components/project/ProjectHeader";
import Footer from "../components/layout/Footer";

import "../styles/pages/project.css";

export default function Project() {
  const paramProjectName = useParams().name;
  const [project, setProject] = useState();

  useEffect(() => {
    getPortfolioProjectByName(paramProjectName)
      .then((fetchedProject) => {
        setProject(fetchedProject);
      })
      .catch((error) => console.error(error));
  }, [paramProjectName]);

  return (
    <>
      {project ? (
        <>
          <ProjectHeader project={project} />
          <section
            dangerouslySetInnerHTML={{ __html: project.readme }}
            className="readme-section"
          ></section>
        </>
      ) : (
        <section className="loader">
          <Loader variant="bars" size="xl" color="#4c6ef5" />
          <p
            style={{
              marginTop: "1em",
              fontSize: "1.25em",
              color: "#4c6ef5",
            }}
          >
            Project loading
          </p>
        </section>
      )}
      <Footer />
    </>
  );
}
