import Tooltip from "@mui/material/Tooltip";
import NavBarItem from "../NavBarItem/NavBarItem";
import { CREDITS_BUTTON_IMAGE_URL, EMAIL_BUTTON_IMAGE_URL, 
  GITHUB_BUTTON_IMAGE_URL, HOME_BUTTON_IMAGE_URL, LINKEDIN_BUTTON_IMAGE_URL, 
  PROJECTS_BUTTON_IMAGE_URL, RESUME_BUTTON_IMAGE_URL, 
  WORK_EXPERIENCE_BUTTON_IMAGE_URL } from "./NavBar.constants";
import './NavBar.scss';


function NavBar() {
  return (
    <div className='navbar-container'>
      <Tooltip title="Home" placement="right">
        <NavBarItem>
          <a href="/" rel="noreferrer">
            <img src={HOME_BUTTON_IMAGE_URL} alt='home'/>
          </a>
        </NavBarItem>
      </Tooltip>
      <Tooltip title="Work Experience" placement="right">
        <NavBarItem>
          <a href="" rel="noreferrer">
            <img src={WORK_EXPERIENCE_BUTTON_IMAGE_URL} alt='work' />
          </a>
        </NavBarItem>
      </Tooltip>
      <Tooltip title="Projects" placement="right">
        <NavBarItem className="navbar-button">
          <a href="" rel="noreferrer">
            <img src={PROJECTS_BUTTON_IMAGE_URL} alt="projects"/>
          </a>
        </NavBarItem>
      </Tooltip>
      <Tooltip title="Resume" placement="right">
        <NavBarItem className="navbar-button">
          <a href="" target="_blank" rel="noreferrer">
            <img src={RESUME_BUTTON_IMAGE_URL} alt='resume'/>
          </a>
        </NavBarItem>
      </Tooltip>
      <Tooltip title="Email" placement="right">
        <NavBarItem className="navbar-button">
          <a href="mailto:swlee052@gmail.com" target="_blank" rel="noreferrer">
            <img src={EMAIL_BUTTON_IMAGE_URL} alt='email'/>
          </a>
        </NavBarItem>
      </Tooltip>
      <Tooltip title="LinkedIn" placement="right">
        <NavBarItem className="navbar-button">
          <a href="https://www.linkedin.com/in/swlee052/" target="_blank" rel="noreferrer">
            <img src={LINKEDIN_BUTTON_IMAGE_URL} alt='linkedin'/>
          </a>
        </NavBarItem>
      </Tooltip>
      <Tooltip title="Github" placement="right">
        <NavBarItem className="navbar-button">
          <a href="https://github.com/swlee052" target="_blank" rel="noreferrer">
            <img src={GITHUB_BUTTON_IMAGE_URL} alt='github'/>
          </a>
        </NavBarItem>
      </Tooltip>
      <Tooltip title="Credits" placement="right">
        <NavBarItem className="navbar-button">
          <a href="" rel="noreferrer">
            <img src={CREDITS_BUTTON_IMAGE_URL} alt="credits"/>
          </a>
        </NavBarItem>
      </Tooltip>
    </div>
  );
}

export default NavBar;