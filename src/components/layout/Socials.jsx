import { IconBrandGithub, IconBrandLinkedin, IconMail } from "@tabler/icons";

import "../../styles/components/layout/footer.css";

export default function Socials() {
  return (
    <ul className="socials">
      <li>
        <a
          href="https://www.linkedin.com/in/alexandre-sparton/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <IconBrandLinkedin className="social" stroke={2} />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/ASparton"
          target="_blank"
          rel="noreferrer noopener"
        >
          <IconBrandGithub className="social" stroke={2} />
        </a>
      </li>
      <li>
        <a href="mailto:asparton@outlook.fr">
          <IconMail className="social" stroke={2} />
        </a>
      </li>
    </ul>
  );
}
