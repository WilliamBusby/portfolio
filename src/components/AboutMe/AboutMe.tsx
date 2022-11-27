import { useEffect } from 'react';
import { ProjectContainerProps } from '../../assets/interfaces/ProjectContainerProps';
import './AboutMe.scss';

const AboutMe = (props: ProjectContainerProps) => {

  useEffect(() => {
    props.setProjectCardInfo(null);
  }, [])

  return (
    <div className='about-me'>
      <h4 className="about-me__header">ABOUT ME</h4>
      <p className='about-me__content'>Hi there, I'm William, a junior software engineer based in the Sussex countryside currently training with _nology. I'm always looking for new ways to develop myself both technically and personally. If you've liked what you've seen here so far, send me a message using the methods below!</p>
    </div>
  )
}

export default AboutMe;