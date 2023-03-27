import { Image } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons";

import maltLogo from "/malt_logo.png";
import worksLogo from "/404works_logo.png";
import "../../styles/components/layout/footer.css";

export default function WorkBanner() {
  return (
    <div className="work-banner">
      <h2>Interested in working together?</h2>
      <div>
        <p>
          I propose freelance services in software development and data flow
          management. Contact me directly down below, or through these freelance
          platforms.
        </p>
        <IconArrowRight color="whitesmoke" stroke={4} className="arrow-right" />
        <ul className="socials">
          <li>
            <a
              href="https://www.malt.fr/profile/alexandresparton"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Image src={maltLogo} alt="malt.fr logo" />
            </a>
          </li>
          <li>
            <a
              href="https://www.404works.com/fr/users/view_profile/alexandresparton"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Image src={worksLogo} alt="404Works logo" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
