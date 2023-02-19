import { IconFaceIdError, IconHome } from "@tabler/icons";

import "../styles/pages/notFound.css";

export default function NotFound() {
  return (
    <div
      style={{
        width: "99.125vw",
        height: "60vh",
        display: "flex",
        flexFlow: "column nowrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 className="not-found-title">This page does not exists</h1>
      <IconFaceIdError className="face-error" stroke={2} color="#4c6ef5" />
      <a href="/">
        <IconHome className="home-logo" />
      </a>
      <a href="/" className="return-home">Get back to home page</a>
    </div>
  );
}
