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
    <div className='project-card__exists project-card'>
      <div className='project-card__name_and_links'>
        <h5 className='project-card__name'>{props.project.name}</h5>
        <a className='project-card__link project-card__github' href={props.project.githubUrl}><FontAwesomeIcon icon={faGithub} /></a>
        <a className='project-card__link project-card__website' href={props.project.websiteUrl}><FontAwesomeIcon icon={faLink} /></a> 
      </div>
      <p className='project-card__desc'>{props.project.description}</p>
      <img className='project-card__img' src={props.project.imageUrl} alt={props.project.altText} />
    </div>
  )
}

export default ProjectCard;