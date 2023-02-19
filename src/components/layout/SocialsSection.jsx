import { IconArrowDown } from "@tabler/icons";
import Socials from "./Socials";

export default function SocialsSection() {
  return (
    <div className="socials-section">
      <div>
        <h2>Want to say something?</h2>
        <p>Don't hesitate and get in touch here</p>
        <IconArrowDown color="whitesmoke" stroke={4} className="arrow-down" />
      </div>
      <Socials />
    </div>
  );
}
