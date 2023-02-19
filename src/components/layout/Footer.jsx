import WorkBanner from "./WorkBanner";
import SocialsSection from "./SocialsSection";
import Copyright from "./Copyright";

import "../../styles/components/layout/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <WorkBanner />
      <SocialsSection />
      <Copyright />
    </footer>
  );
}
