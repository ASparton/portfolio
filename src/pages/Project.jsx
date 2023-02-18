import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPortfolioProjectByName } from "../services/reposFetcher";

import ProjectHeader from "../components/project/ProjectHeader";

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
        </>
      )}
    </>
  );
}
