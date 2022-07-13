import styled from 'styled-components'

const imgUrl = 'https://img.icons8.com/doodle/192/000000/menu.png'

const MenuBarButton = styled.div`
  background-image: url(${imgUrl});
`;

export default function MenuButton() {
  return (
    <MenuBarButton/>
  )
}