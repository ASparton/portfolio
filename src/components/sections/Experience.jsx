import PropTypes from 'prop-types';

import { Image, List } from '@mantine/core';
import { IconCalendarEvent, IconPrompt, IconWorld } from '@tabler/icons';

import '../../styles/components/sections/experiences.css';

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
				<div className="date">
					<IconCalendarEvent width={32} />
					<p>{experience.startDate} - {experience.endDate}</p>
				</div>
			</div>
			<List withPadding icon={<IconPrompt />}>
				{experience.points.map((point, key) => (
					<List.Item key={key}>{point}</List.Item>
				))}
			</List>
			<List className="technos-list" withPadding>
				{experience.technologiesLogosUrl.map((logoUrl, key) => (
					<List.Item key={key}>
						<Image src={logoUrl} />
					</List.Item>
				))}
			</List>
		</article>
	);
}

Experience.propTypes = {
	experience: PropTypes.object,
};
