import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import {
  getPortfolioProjectByName,
  getRepoReadme,
} from "../services/reposFetcher";

import { Loader } from "@mantine/core";
import ProjectHeader from "../components/project/ProjectHeader";
import Footer from "../components/layout/Footer";

import "../styles/pages/project.css";

export default function Project() {
  const paramProjectName = useParams().name;
  const locationState = useLocation().state;
  const [project, setProject] = useState();

  useEffect(() => {
    if (locationState && locationState.project) {
      document
        .getElementsByTagName("body")[0]
        .scrollIntoView({ behavior: "smooth" });
      getRepoReadme(paramProjectName)
        .then((readme) =>
          setProject({ ...locationState.project, readme: readme })
        )
        .catch((error) => console.error(error));
      return;
    }

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
