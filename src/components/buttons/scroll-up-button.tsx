import { StyledScrollToButton } from './scroll-to-button';
import { SCROLL_UP_IMAGE_URL } from './buttons.constants';
import styled from 'styled-components';
import Tooltip from '@mui/material/Tooltip';


// handlers
function scrollToTop() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}



// Component
export const ScrollUpButtonWrapper = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
  
  @media (max-width: 480px) {
    display: none;
  }
`;



export default function ScrollUpButton() {
  return (  
    <Tooltip arrow={true} placement="left" title={<h2>Scroll Up</h2>}>
      <ScrollUpButtonWrapper>
        <StyledScrollToButton 
          src={SCROLL_UP_IMAGE_URL}
          onClick={scrollToTop}
        />
      </ScrollUpButtonWrapper>
    </Tooltip>
  );
}