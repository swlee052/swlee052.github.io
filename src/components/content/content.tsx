import ReactMarkdown from 'react-markdown';
import { aboutMeMdPath, educationMdPath, experienceMdPath, projectsMdPath, 
  skillsMdPath, creditsMdPath } from './content.constants';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

// styles
const StyledContentContainer = styled.div`
  flex: 1; /* Allow content to expand and take available space */
  padding-left: 15vh; /* Add left padding to create space for the navbar */
  padding-right: 1%;
  font-family: Helvetica, Arial, sans-serif, Raleway;
  font-size: 2.5vmin;
  line-height: 1.3;

  @media (max-width: 480px) {
    /* Apply styles for screens with a maximum width of 480px (e.g., mobile devices) */
    padding-left: 5vw; /* Further reduce left padding for smaller screens */
  }
`;



// component
export default function Content() {
  const [aboutMeText, setAboutMeText] = useState('');
  const [experienceText, setExperienceText] = useState('');
  const [educationText, setEducationText] = useState('');
  const [projectsText, setProjectsText] = useState('');
  const [skillsText, setSkillsText] = useState('');
  const [creditsText, setCreditsText] = useState('');

  useEffect(() => {
    readMdFile(aboutMeMdPath).then(text => {
      setAboutMeText(text)
    })
    readMdFile(experienceMdPath).then(text => {
      setExperienceText(text)
    })
    readMdFile(educationMdPath).then(text => {
      setEducationText(text)
    })
    readMdFile(projectsMdPath).then(text => {
      setProjectsText(text)
    })
    readMdFile(skillsMdPath).then(text => {
      setSkillsText(text)
    })
    readMdFile(creditsMdPath).then(text => {
      setCreditsText(text)
    })
  }, []); // The empty dependency array means this effect runs once after the initial render

  return (
    <StyledContentContainer>
      <div id='home'>
        <ReactMarkdown
          children={aboutMeText}
          className='content-container'
        />
      </div>
      
      <div id='experience'>
        <ReactMarkdown
          children={experienceText}
          className='content-container'
        />
      </div>

      <div id='projects'>
        <ReactMarkdown
          children={projectsText}
          className='content-container'
        />
      </div>

      <div id='education'>
        <ReactMarkdown
          children={educationText}
          className='content-container'
        />
      </div>

      <div id='skills'>
        <ReactMarkdown
          children={skillsText}
          className='content-container'
        />
      </div>

      <div id='credits'>
        <ReactMarkdown
          children={creditsText}
          className='content-container'
        />
      </div>
    </StyledContentContainer>
  );
}


// helpers
async function readMdFile(filePath: string) {
  const response: Response = await fetch(filePath);
  const text = response.text();
  if (!text) {
    console.error(`Error: Could not fetch file at ${filePath}`);
  }
  return text;
}