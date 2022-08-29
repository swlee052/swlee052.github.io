import styled from 'styled-components';

const scrollUpImgUrl = "https://img.icons8.com/doodle/96/000000/up--v1.png"
const ScrollUp = styled.img`
  width: 96px;
  height: 96px;
  position: fixed;
  right: 10px;
  bottom: 10px;
  cursor: pointer;
`;
function scrollToTop() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}

function ScrollUpButton() {
  return (
    <ScrollUp src={scrollUpImgUrl} alt='menu-button' onClick={scrollToTop} />
  );
}

export default ScrollUpButton;