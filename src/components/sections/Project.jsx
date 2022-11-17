import PropTypes from 'prop-types';

import { Badge } from '@mantine/core';

import '../../styles/components/sections/projects.css';

const Project = ({project}) => {
  return (
    <article className='project' radius='md'>
      <div className='name'>
        <a href={project.url} target='_blank' rel='noreferrer noopener'>
          <h1>{project.name}</h1>
        </a>
        <i>{project.date}</i>
      </div>
      <a
        href={project.url} target='_blank' rel='noreferrer noopener'
        className='cover-container'>
        <img
          height='100%'
          width='100%'
          src={`data:image/png;base64,${project.cover}`} 
          alt={`${project.name} cover`} 
        />
      </a>
      <p className='description'>{project.description}</p>
      <ul className='topics'>
        {project.topics.map((topic, index) =>
          <li key={index}>
            <Badge color='indigo' variant='outline' size='lg' mb='sm'>{topic}</Badge>
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