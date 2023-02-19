import { useEffect, useState } from "react";

import { Header, Image } from "@mantine/core";

import "../../styles/components/layout/appHeader.css";

const getWindowSize = () => {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
};

const AppHeader = () => {
  const [opened, setOpened] = useState(false);
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(getWindowSize());
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Header className="header">
      {windowSize.innerWidth <= 650 ? (
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
      ) : (
        <a href="/">
          <Image
            className="logo"
            src="/logo_black.png"
            alt="AS Logo"
            style={{ width: "4em" }}
          />
        </a>
      )}
      <nav
        className={
          windowSize.innerWidth <= 650
            ? opened
              ? "nav-displayed"
              : "nav-hidden"
            : ""
        }
      >
        {opened && <h2></h2>}
        <ul className="links-container">
          <a href="/#about">About me</a>
          <a href="/#experiences">Experiences</a>
          <a href="/#projects">Projects</a>
        </ul>
      </nav>
    </Header>
  );
};

export default AppHeader;
