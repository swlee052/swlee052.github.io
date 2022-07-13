import { Link } from 'react-scroll';
import styled from 'styled-components';

//https://icons8.com/icon/set/email/doodle


const imgUrl = "https://img.icons8.com/doodle/96/000000/up--v1.png"

const FloatingImg = styled.img`
  width: 96px;
  height: 96px;
  position: absolute;
  right: 10px;
  bottom: 10px;
`;

export default function ScrollUpButton() {
  return (
    <Link
      className='scroll-up'
      to="App"
      smooth duration={1000}>
      <FloatingImg src={imgUrl}/>
    </Link>
  );
}
