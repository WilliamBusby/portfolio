import HeaderContainer from '../HeaderContainer/HeaderContainer';
import './Main.scss';
import { MainProps } from '@/assets/interfaces/MainProps';
import AboutMe from '../../components/AboutMe/AboutMe';
import ContactMe from '../../components/ContactMe/ContactMe';
import ProjectContainer from '../ProjectContainer/ProjectContainer';

const Main = (props: MainProps) => {

  const availableContent = [null, <ProjectContainer />, <AboutMe />, <ContactMe />];

  return (
    <div className = "main">
      <div>
        <HeaderContainer />
      </div>
      {availableContent[props.chosenNavItem]}
    </div>
  )
}

export default Main;