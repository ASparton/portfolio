import { Image, Blockquote } from "@mantine/core";
import { IconQuote } from "@tabler/icons";

import "../../styles/components/sections/about.css";

export default function About() {
  return (
    <section className="about">
      <span
        id="about"
        style={{
          position: "relative",
          top: "-500px",
        }}
      ></span>
      <div className="aboutText">
        <Blockquote
          icon={<IconQuote size={40} color="#6c757d" />}
          className="quote-icon"
        >
          <h2 className="quote">Try, fail, learn, succeed, repeat...</h2>
        </Blockquote>
        <p>
          The tech industry always offers us new challenging paths to explore,
          and that's what I love about it. I am currently specialized in web
          applications, data extraction and data flows management, but I am
          really curious about development in general. I enjoy thinking about
          the best and simple way to bring my ideas to the final customers, and
          always try to push the projects further within a passionate team.
        </p>
      </div>
      <div className="coffee-container">
        <Image src="/mycoffee.png" alt="Me & My coffee" className="coffee" />
      </div>
    </section>
  );
}
