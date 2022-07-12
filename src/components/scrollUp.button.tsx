import { Link } from 'react-scroll';
//https://icons8.com/icon/set/email/doodle

export default function ScrollUpButton() {
  return (
    <span className='scroll-up'>
      <Link 
        to="App"
        smooth duration={1000}>
          <a href='#top'>
            <img src="https://img.icons8.com/doodle/96/000000/up--v1.png" alt='scroll-up'/>
          </a>
      </Link>
    </span>
  );
}


