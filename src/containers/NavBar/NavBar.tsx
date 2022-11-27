import { NavBarProps } from '@/assets/interfaces/NavBarProps';
import './NavBar.scss';

const NavBar = (props: NavBarProps) => {

  const navTitles = ["PROJECTS", "ABOUT ME", "CONTACT ME"];

  const navComponents = navTitles.map((title, index) => 
    <li 
      className='nav-bar__anchor' 
      key={index+1} 
      onClick={() => props.handleChosenNavItem(index+1)}>
        {title}
    </li>);
  
  return (
    <nav className='nav'>
      <ul className='nav-bar'>
        {navComponents}
        <li className='nav-bar__anchor'>
          <a href="https://storage.googleapis.com/portfolio-resume/William_Busby_CV_2022.pdf" target="_blank" title="Resume PDF">RESUME</a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;