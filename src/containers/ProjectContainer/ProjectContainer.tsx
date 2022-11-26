import './ProjectContainer.scss';
import projectData from "../../assets/data/projectData.json";
import ProjectContainerItem from '../../components/ProjectContainerItem/ProjectContainerItem';
import { ProjectContainerProps } from '@/assets/interfaces/ProjectContainerProps';

const ProjectContainer = (props: ProjectContainerProps) => {

  const handleSetProjectCardInfo = (index: number) => {
    props.setProjectCardInfo(projectData.projects[index]);
  }

  const projectContainerItems = projectData.projects.map((project, index) => <ProjectContainerItem key={index+1} project={project} setProjectCardInfo={handleSetProjectCardInfo} index={index}/>)

  return (
    <div className="project-container">
      <h4 className='project-container__header'>PROJECTS</h4>
      {projectContainerItems}
    </div>
  )
}

export default ProjectContainer;