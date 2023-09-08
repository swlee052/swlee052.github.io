import styled from "styled-components";

export const StyledScrollToButton = styled.img`
  cursor: pointer;
  max-height: 10vh; /* Set the maximum height as a percentage of the viewport height */
  max-width: auto; /* Ensure the image does not exceed the screen width */
  transition: transform 0.3s ease; /* Add a transition for smooth movement */
  
  &:hover {
    transform: translate(0px, -5px); /* Move the image by 5 pixels on hover */
  }

  @media (max-width: 480px) {
    display: none;
  }

  @media (max-height: 480px) {
    display: none;
  }
`;