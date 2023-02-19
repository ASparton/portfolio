import { IconBrandGithub, IconBrandLinkedin, IconMail } from "@tabler/icons";

import "../../styles/components/layout/footer.css";

export default function Socials() {
  return (
    <ul className="socials">
      <li>
        <a
          href="https://github.com/ASparton"
          target="_blank"
          rel="noreferrer noopener"
        >
          <IconBrandGithub className="social" stroke={1.5} color="whitesmoke" />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/alexandre-sparton/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <IconBrandLinkedin
            className="social"
            stroke={1.5}
            color="whitesmoke"
          />
        </a>
      </li>
      <li>
        <a href="mailto:sparton.alexandre@gmail.com">
          <IconMail className="social" stroke={1.5} color="whitesmoke" />
        </a>
      </li>
    </ul>
  );
}
