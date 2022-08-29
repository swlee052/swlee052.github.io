import { Menu } from "antd";
import { MenuItem, ProSidebar, SidebarContent, SidebarFooter, SidebarHeader } from "react-pro-sidebar";
import './NavBar.scss';

function NavBar() {
  return (
    <ProSidebar collapsed={true}>
    <SidebarHeader>
      {/**
       *  You can add a header for the sidebar ex: logo
       */}
    </SidebarHeader>
    <SidebarContent>
      <Menu>
        <MenuItem className="home">
          <a href="/" rel="noreferrer">
            <img src="https://img.icons8.com/doodle/96/000000/home--v1.png" alt='home'/>
          </a>
        </MenuItem>
        <MenuItem className="work">
          <a href="" rel="noreferrer">
          <img src="https://img.icons8.com/doodle/96/000000/business.png" alt='work' />
          </a>
        </MenuItem>
        <MenuItem className="projects">
          <a href="" rel="noreferrer">
            <img src="https://img.icons8.com/doodle/96/000000/console--v2.png" alt="projects"/>
          </a>
        </MenuItem>
        <MenuItem className="resume">
          <a href="" target="_blank" rel="noreferrer">
            <img src="https://img.icons8.com/doodle/96/000000/pdf--v3.png" alt='resume' />
          </a>
        </MenuItem>
        <MenuItem className="email">
          <a href="mailto:swlee052@gmail.com" target="_blank" rel="noreferrer">
            <img src="https://img.icons8.com/doodle/96/000000/new-post.png" alt='email'/>
          </a>
        </MenuItem>
        <MenuItem className="linkedin">
          <a href="https://www.linkedin.com/in/swlee052/" target="_blank" rel="noreferrer">
            <img src="https://img.icons8.com/doodle/96/000000/linkedin--v2.png" alt='linkedin'/>
          </a>
        </MenuItem>
        <MenuItem className="github">
          <a href="https://github.com/swlee052" target="_blank" rel="noreferrer">
            <img src="https://img.icons8.com/doodle/96/000000/github--v1.png" alt='github' />
          </a>
        </MenuItem>
        <MenuItem className="credits">
          <a href="" rel="noreferrer">
            <img src="https://img.icons8.com/doodle/96/000000/scroll.png" alt="credits"/>
          </a>
        </MenuItem>
      </Menu>
    </SidebarContent>
    <SidebarFooter>
      {/**
       *  You can add a footer for the sidebar ex: copyright
       */}
    </SidebarFooter>
  </ProSidebar>
  );
}

export default NavBar;