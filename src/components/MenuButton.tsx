import styled from 'styled-components'

const imgUrl = 'https://img.icons8.com/doodle/192/000000/menu.png'

const MenuBarButton = styled.img`
  height: 96;
  width: 96px;
  margin-left: 20px;
`;

export default function MenuButton() {
  return (
   <MenuBarButton src={imgUrl} alt='menu-button'/>    
  )
}