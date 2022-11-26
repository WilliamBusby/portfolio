import { ProjectCardProps } from '@/assets/interfaces/ProjectCardProps';
import './ProjectCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const ProjectCard = (props: ProjectCardProps) => {

  if(!props?.project) {
    return <div className='project-card'></div>
  }

  return (
    <div className='project-card'>
      <h5 className='project-card__name'>{props.project.name}</h5>
      <img className='project-card__img' src={props.project.imageUrl} alt={props.project.altText} />
      <a className='project-card__link' href={props.project.githubUrl}><FontAwesomeIcon icon={faGithub} /></a>
      <a className='project-card__link' href={props.project.websiteUrl}><FontAwesomeIcon icon={faLink} /></a> 
      <p className='project-card__desc'>{props.project.description}</p>
    </div>
  )
}

export default ProjectCard;