import axios from 'axios';
import { useEffect, useState } from 'react';
import { isRepoPortfolio, getRepoCover } from '../../services/repoFetcher';

import AliceCarousel from 'react-alice-carousel';
import Project from './Project';
import { Loader } from '@mantine/core';

import 'react-alice-carousel/lib/alice-carousel.css';
import '../../styles/components/sections/projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getGithubProjects = async () => {
      const githubProjects = [];
      const response = await axios.get(
        'https://api.github.com/users/ASparton/repos?sort=created',
        { 
          headers: {'Authorization' : `Bearer ${process.env.GITHUB_API_KEY}`}
        }
      );
      for (const project of response.data) {
        if (!(await isRepoPortfolio(project.tags_url)))
          continue;
        
        let newProject = {};
        newProject['name'] = project.name.replaceAll('-', ' ');
        newProject.name = 
          newProject.name[0].toUpperCase() + 
          newProject.name.substring(1);
        newProject['date'] = project.created_at.split('T')[0];
        newProject['url'] = project.html_url;
        newProject['description'] = project.description;
        newProject['topics'] = project.topics;
        newProject['cover'] = await getRepoCover(project.url + '/contents/cover.png');
        githubProjects.push(<Project project={newProject} />);
      }
      return githubProjects;
    }
    
    getGithubProjects()
      .then(githubProjects => setProjects(githubProjects))
      .catch(err => console.error(err));
  }, [])

  return (
    <section className='projects'>
      <span id='projects' style={{
        position: 'relative',
        top: '-100px'
      }}></span>
      <div style={{
        marginBottom: '2em',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Loader style={{
          display: projects.length === 0 ? 'block' : 'none'
        }} />
      </div>
      <AliceCarousel
        items={projects}
        controlsStrategy='alternate'
        autoPlay
        autoPlayInterval={3000}
        infinite
        keyboardNavigation
      />
    </section>
  )
}

export default Projects;