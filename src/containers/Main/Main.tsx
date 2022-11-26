import HeaderContainer from '../HeaderContainer/HeaderContainer';
import './Main.scss';
import { MainProps } from '@/assets/interfaces/MainProps';
import AboutMe from '../../components/AboutMe/AboutMe';
import ContactMe from '../../components/ContactMe/ContactMe';
import ProjectContainer from '../ProjectContainer/ProjectContainer';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { useState } from 'react';
import { Project } from '@/assets/interfaces/Project';

const Main = (props: MainProps) => {

  let [projectCardInfo, setProjectCardInfo] = useState<Project | null>(null);

  const availableContent = [null, <ProjectContainer setProjectCardInfo={setProjectCardInfo}/>, <AboutMe />, <ContactMe />] 

  return (
    <div className = "main">
      <div>
        <ProjectCard project={projectCardInfo}/>
        <HeaderContainer />
      </div>
      {availableContent[props.chosenNavItem]}
    </div>
  )
}

export default Main;