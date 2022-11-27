import { useEffect } from 'react';
import { ProjectContainerProps } from '../../assets/interfaces/ProjectContainerProps';
import './ContactMe.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ContactMe = (props: ProjectContainerProps) => {

  useEffect(() => {
    props.setProjectCardInfo(null);
  }, [])

  return (
    <div className="contact-me">
      <h4 className='contact-me__header'>CONTACT ME</h4>
      <p className='contact-me__content'>Contact me with the methods below</p>
      <ul className='contact-me__list'>
        <li className="contact-me__link">
          <a href="https://github.com/WilliamBusby" target="_blank" title="Github Profile"><FontAwesomeIcon icon={faGithub} /></a>
        </li>
        <li className="contact-me__link">
          <a href="https://www.linkedin.com/in/william-busby-001b2b1b9/" target="_blank" title="LinkedIn Profile"><FontAwesomeIcon icon={faLinkedin} /></a>
        </li>
        <li className="contact-me__link">
          <a href="mailto:williambusby1999@gmail.com" target="_blank" title="Email Me"><FontAwesomeIcon icon={faEnvelope} /></a>
        </li>
      </ul>
    </div>
  )
}

export default ContactMe;