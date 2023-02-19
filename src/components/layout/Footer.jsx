import Socials from "./Socials";
import Copyright from "./Copyright";

export default function Footer() {
  return (
    <footer
      style={{
        height: "40vh",
        backgroundColor: "#4c6ef5",
        color: "white",
      }}
    >
      <Socials />
      <Copyright />
    </footer>
  );
}
