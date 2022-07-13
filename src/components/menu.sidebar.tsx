//https://icons8.com/icon/set/email/doodle
import { slide as Menu } from 'react-burger-menu';

export default function MenuSideBar() {
  return (
    <Menu>
      <a className="menu-item" href="/" rel="noreferrer">
        <img src="https://img.icons8.com/doodle/96/000000/home--v1.png" alt='home' />
        Home
      </a>
      <a className="menu-item" href="mailto:swlee052@gmail.com" target="_blank" rel="noreferrer">
        <img src="https://img.icons8.com/doodle/96/000000/i-pronoun.png" />
      </a>
      <a className="menu-item" href="mailto:swlee052@gmail.com" target="_blank" rel="noreferrer">
        <img src="https://img.icons8.com/doodle/96/000000/business.png" alt='work experience' />
      </a>
      <a className="menu-item" href="https://www.linkedin.com/in/swlee052/" target="_blank" rel="noreferrer">
        <img src="https://img.icons8.com/doodle/96/000000/pdf--v3.png" alt='resume' />
      </a>
      <a className="menu-item" href="https://github.com/swlee052" target="_blank" rel="noreferrer">
        <img src="https://img.icons8.com/doodle/96/000000/console--v2.png" alt="projects"/>
      </a>
      <a className="menu-item" href="https://github.com/swlee052" target="_blank" rel="noreferrer">
        <img src="https://img.icons8.com/doodle/96/000000/books.png" alt='TIL'/> 
      </a>
      <a className="menu-item" href="https://github.com/swlee052" target="_blank" rel="noreferrer">
        <img src="https://img.icons8.com/doodle/96/000000/scroll.png" alt="credits"/>
      </a>
    </Menu>
  );
}