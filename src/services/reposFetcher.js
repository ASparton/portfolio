import axios from "axios";
import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: import.meta.env.VITE_GITHUB_API_KEY,
  userAgent: "asparton-portfolio/v2.0",
});

export const getPortfolioProjects = async () => {
  const response = await octokit.request("GET /orgs/{org}/repos", {
    org: "asparton-portfolio",
    sort: "updated",
  });
  const portfolioProjects = [];
  for (const projectData of response.data)
    portfolioProjects.push(await buildProject(projectData));
  return portfolioProjects;
};

const buildProject = async (projectData) => {
  let newProject = {};
  newProject["name"] = projectData.name.replaceAll("-", " ");
  newProject.name =
    newProject.name[0].toUpperCase() + newProject.name.substring(1);
  newProject["date"] = projectData.created_at.split("T")[0];
  newProject["url"] = projectData.html_url;
  newProject["description"] = projectData.description;
  newProject["topics"] = projectData.topics.map((topic) =>
    normalizeTopic(topic)
  );
  newProject["cover"] = await getRepoCover(projectData.name);
  return newProject;
};

const normalizeTopic = (topic) => {
  switch (topic) {
    case "cplusplus":
      return "C++";
    case "csharp":
      return "C#";
    default:
      return topic;
  }
};

const getRepoCover = async (repositoryName) => {
  try {
    let response = await octokit.request(
      "GET /repos/{owner}/{repo}/contents/{path}",
      {
        owner: "asparton-portfolio",
        repo: repositoryName,
        path: "cover.png",
      }
    );
    if (response.data.content.length > 0) return response.data.content;

    response = await axios.get(response.data.git_url);
    return response.data.content;
  } catch (_) {
    return null;
  }
};