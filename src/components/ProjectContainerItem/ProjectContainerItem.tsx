import { ProjectContainerItemProps } from '../../assets/interfaces/ProjectContainerItemProps';
import './ProjectContainerItem.scss';

const ProjectContainerItem = (props: ProjectContainerItemProps) => {

  return (
    <div className="project-container-item" onClick={() => props.setProjectCardInfo(props.index)}>{props.project.name}</div>
  )
}

export default ProjectContainerItem;