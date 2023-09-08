import Tooltip from "@mui/material/Tooltip";
import { StyledScrollToButton } from "./scroll-to-button";
import { CREDITS_BUTTON_IMAGE_URL, EDUCATION_BUTTON_IMAGE_URL, EMAIL_BUTTON_IMAGE_URL, EMAIL_URL, GITHUB_BUTTON_IMAGE_URL, GITHUB_URL, ABOUT_ME_BUTTON_IMAGE_URL, LINKEDIN_BUTTON_IMAGE_URL, LINKEDIN_URL, PROJECTS_BUTTON_IMAGE_URL, RESUME_BUTTON_IMAGE_URL, WORK_EXPERIENCE_BUTTON_IMAGE_URL } from "./buttons.constants";
import styled from "styled-components";

// handlers
function scrollTo(elementId: string): void {
  document.getElementById(elementId)?.scrollIntoView({
    behavior: 'smooth'
  });
}

function scrollToHome() {
  scrollTo("home");
}

function scrollToExperience() {
  scrollTo("experience");
}

function scrollToCredits() {
  scrollTo("credits");
}

function scrollToProjects() {
  scrollTo("projects")
}

function scrollToEducation() {
  scrollTo("education")
}

function openInNewTab(url: string): void {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}

const onClickUrl = (url: string): (() => void) => () => openInNewTab(url)



// Styles
const StyledNavbar = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  padding-left: 1.5vmin;
  padding-top: 1.5vmin;
  padding-bottom: 1.5vmin;
  padding-right: 1.5vmin;
  
  /* Make the container a flex container to center the images */
  display: flex;
  flex-direction: column;

  @media (max-height: 480px) {
    /* Add any additional styles for mobile (max-width: 480px) here */
    display: none; /* Hide the navbar */
  }
`;


// component
export default function NavBar() {
  return (
    <StyledNavbar>
      <Tooltip arrow={true} placement="right" title={<h2>About Me</h2>}>
        <StyledScrollToButton
          src={ABOUT_ME_BUTTON_IMAGE_URL}
          onClick={scrollToHome}
        /> 
      </Tooltip>
      <Tooltip arrow={true} placement="right" title={<h2>Work Experience</h2>}>
        <StyledScrollToButton 
          src={WORK_EXPERIENCE_BUTTON_IMAGE_URL}
          onClick={scrollToExperience}
        /> 
      </Tooltip>
      <Tooltip arrow={true} placement="right" title={<h2>Projects</h2>}>
        <StyledScrollToButton
          src={PROJECTS_BUTTON_IMAGE_URL}
          onClick={scrollToProjects}
        />
      </Tooltip>
      <Tooltip arrow={true} placement="right" title={<h2>Education</h2>}>
        <StyledScrollToButton
          src={EDUCATION_BUTTON_IMAGE_URL}
          onClick={scrollToEducation}
        />
      </Tooltip>
      <Tooltip arrow={true} placement="right" title={<h2>Resume</h2>}>
        <StyledScrollToButton
          src={RESUME_BUTTON_IMAGE_URL}
        />
      </Tooltip>
      <Tooltip arrow={true} placement="right" title={<h2>Email</h2>}>
        <StyledScrollToButton 
          src={EMAIL_BUTTON_IMAGE_URL}
          onClick={onClickUrl(EMAIL_URL)}
        />
      </Tooltip>
      <Tooltip arrow={true} placement="right" title={<h2>LinkedIn</h2>}>
        <StyledScrollToButton
          src={LINKEDIN_BUTTON_IMAGE_URL}
          onClick={onClickUrl(LINKEDIN_URL)}
        />
      </Tooltip>
      <Tooltip arrow={true} placement="right" title={<h2>Github</h2>}>
        <StyledScrollToButton
          src={GITHUB_BUTTON_IMAGE_URL}
          onClick={onClickUrl(GITHUB_URL)}
        />
      </Tooltip>
      <Tooltip arrow={true} placement="right" title={<h2>Credits</h2>}>
        <StyledScrollToButton
          src={CREDITS_BUTTON_IMAGE_URL}
          onClick={scrollToCredits}
        />
      </Tooltip>
    </StyledNavbar>
  );
}

