import { useState } from "react";

import { Header, Image } from "@mantine/core";

import "../../styles/components/layout/appHeader.css";

const AppHeader = ({ windowWidth }) => {
  const [opened, setOpened] = useState(false);

  return (
    <Header className="header">
      {windowWidth <= 650 && (
        <div
          className={opened ? "logo-burger-rotate" : "logo-burger"}
          onClick={() => setOpened(!opened)}
        >
          <Image
            className="logo-burger-img"
            src="/logo_black.png"
            alt="AS Logo"
          />
        </div>
      )}
      <Image
        className="logo"
        src="/logo_black.png"
        alt="AS Logo"
        style={{ width: "4em" }}
      />
      <nav
        className={
          windowWidth <= 650 ? (opened ? "nav-displayed" : "nav-hidden") : ""
        }
      >
        {opened && <h2></h2>}
        <ul className="links-container">
          <a href="#about">About me</a>
          <a href="#experiences">Experiences</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contacts</a>
        </ul>
      </nav>
    </Header>
  );
};

export default AppHeader;
