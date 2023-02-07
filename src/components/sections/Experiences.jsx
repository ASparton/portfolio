import experiences from "../../experiences";

import { Tabs } from "@mantine/core";
import Experience from "./Experience";

import "../../styles/components/sections/experiences.css";

export const Experiences = ({ windowWidth }) => {
  return (
    <section className="experiences">
      <span
        id="experiences"
        style={{
          position: "relative",
          top: "-350px",
        }}
      ></span>
      <Tabs
        orientation={windowWidth <= 500 ? "horizontal" : "vertical"}
        color="dark"
        defaultValue={experiences[0].sectionName}
      >
        <Tabs.List>
          {experiences.map((experience, index) => (
            <Tabs.Tab
              value={experience.sectionName}
              className="tab"
              key={index}
            >
              <p>{experience.sectionName}</p>
            </Tabs.Tab>
          ))}
        </Tabs.List>

        {experiences.map((experience, index) => (
          <Tabs.Panel value={experience.sectionName} pl="xl" key={index}>
            <Experience experience={experience} />
          </Tabs.Panel>
        ))}
      </Tabs>
    </section>
  );
};

export default Experiences;
