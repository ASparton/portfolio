import { IconBrandGithub } from "@tabler/icons";

export default function GithubLink({ repositoryUrl, top, left }) {
  return (
    <a
      href={repositoryUrl}
      target="_blank"
      rel="noreferrer noopener"
      style={{
        position: "absolute",
        top: top,
        left: left,
        width: "2.5em",
        height: "2.5em",
        padding: "0.5em",
        borderRadius: "100%",
      }}
      className="github"
    >
      <IconBrandGithub size="2.5em" />
    </a>
  );
}
