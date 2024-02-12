import Copyright from "./Copyright";
import SocialsSection from "./SocialsSection";

import "../../styles/components/layout/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      {/* <WorkBanner /> */}
      <SocialsSection />
      <Copyright />
    </footer>
  );
}
