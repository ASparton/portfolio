import PropTypes from "prop-types";

import { List } from "@mantine/core";
import { IconPrompt, IconWorld } from "@tabler/icons";

import "../../styles/components/sections/experiences.css";

export default function Experience({ experience }) {
  return (
    <article className="experience">
      <div>
        <h1>{experience.title}</h1>
        <div className="website">
          <IconWorld />
          <a
            href={experience.companyUrl}
            target="_blank"
            rel="noreferrer noopener"
          >
            {experience.companyName}
          </a>
        </div>
        <p>
          {experience.startDate} - {experience.endDate}
        </p>
      </div>
      <List withPadding icon={<IconPrompt />}>
        {experience.points.map((point, key) => (
          <List.Item key={key}>{point}</List.Item>
        ))}
      </List>
    </article>
  );
}

Experience.propTypes = {
  experience: PropTypes.object,
};
