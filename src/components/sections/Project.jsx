import PropTypes from 'prop-types';

import { Image, Badge } from '@mantine/core';

import '../../styles/components/sections/projects.css';

const Project = ({project}) => {
  return (
    <article className='project' radius='md'>
      <div className='name'>
        <a href={project.url}>
          <h1>{project.name}</h1>
        </a>
        <i>{project.date}</i>
      </div>
      <Image
        height='35vh'
        fit='contain'
        src={`data:image/png;base64,${project.cover}`} 
        alt={`${project.name} cover`} 
      />
      <p className='description'>{project.description}</p>
      <ul className='topics'>
        {project.topics.map((topic, index) =>
          <li key={index}>
            <Badge color='indigo' variant='outline' size='lg'>{topic}</Badge>
          </li>
        )}
      </ul>
    </article>
  )
}

Project.propTypes = {
    project: PropTypes.object
};

export default Project;