import './ContactMe.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ContactMe = () => {

  return (
    <div className="contact-me">
      <h4 className='contact-me__header'>CONTACT ME</h4>
      <p className='contact-me__content'>Contact me if you want more info!</p>
      <ul className='contact-me__list'>
        <li className="contact-me__link">
          <a href="https://github.com/WilliamBusby" target="_blank" rel="noreferrer" title="Github Profile"><FontAwesomeIcon icon={faGithub} /></a>
        </li>
        <li className="contact-me__link">
          <a href="https://www.linkedin.com/in/william-busby-001b2b1b9/" target="_blank" rel="noreferrer" title="LinkedIn Profile"><FontAwesomeIcon icon={faLinkedin} /></a>
        </li>
        <li className="contact-me__link">
          <a href="mailto:williambusby1999@gmail.com" target="_blank" rel="noreferrer" title="Email Me"><FontAwesomeIcon icon={faEnvelope} /></a>
        </li>
      </ul>
    </div>
  )
}

export default ContactMe;