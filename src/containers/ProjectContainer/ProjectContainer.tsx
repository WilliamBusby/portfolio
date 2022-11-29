import './ProjectContainer.scss';
import ProjectContainerItem from '../../components/ProjectContainerItem/ProjectContainerItem';
import { ProjectContainerProps } from '@/assets/interfaces/ProjectContainerProps';
import { useEffect, useState } from 'react';
import { Project } from '@/assets/interfaces/Project';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

const ProjectContainer = (props: ProjectContainerProps) => {

  let [projectsList, setProjectsList] = useState<Array<Project>>([]);
  let [project, setProject] = useState<Project | null>(null);

  const getProjects = async () => {
    const response = await fetch('https://storage.googleapis.com/portfolio-resume/projectData.json');
    const data = await response.json();
    setProjectsList(data.projects);
  }

  useEffect(() => {
    getProjects();
  }, []);

  const handleSetProjectCardInfo = (index: number) => {
    props.setProjectCardInfo(projectsList[index]);
    setProject(projectsList[index]);
  }

  const projectContainerItems = projectsList.map((project, index) => <ProjectContainerItem key={index+1} project={project} setProjectCardInfo={handleSetProjectCardInfo} index={index}/>)

  return (
    <div className="project-container">
      <h4 className='project-container__header'>PROJECTS</h4>
      {projectContainerItems}
      <ProjectCard project={project} />
    </div>
  )
}

export default ProjectContainer;