import { Image } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons";

import malt_logo from "/malt_logo.png";
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
              <Image src={malt_logo} alt="malt.fr logo" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
