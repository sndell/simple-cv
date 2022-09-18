import { ICV, ILanguage, ISkill } from '../../../types/editor';
import Language from './Language';
import styled from 'styled-components';
import Skill from './Skill';

type Props = {
  resume: ICV;
};

const Default = ({ resume }: Props) => {
  return (
    <Wrapper>
      <Main>
        <Name>
          <h1>{resume.basic.name}</h1>
          <h2>{resume.basic.title}</h2>
        </Name>
      </Main>
      <Sidebar>
        <Details>
          <h1>Details</h1>
          <p>{resume.basic.address?.street}</p>
          <p>{resume.basic.address?.zip}</p>
          <p>{resume.basic.address?.city}</p>
          <p>{resume.basic.address?.country}</p>
          <p>{resume.basic.phone}</p>
          <p>{resume.basic.email}</p>
        </Details>
        <Details>
          <h1>Languages</h1>
          {resume.languages.map((language: ILanguage) => (
            <Language {...language} key={language.id} />
          ))}
        </Details>
        <Details>
          <h1>Skills</h1>
          {resume.skills.map((skill: ISkill) => (
            <Skill {...skill} key={skill.id} />
          ))}
        </Details>
      </Sidebar>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 7fr 3fr;
  width: 100%;
  height: 100%;
  font-size: 1em;
  padding: 2.5em;
  /* padding: 40px; */
`;

const Main = styled.div`
  font-size: 1em;
  overflow: hidden;
`;

const Details = styled.div`
  font-size: 1.1em;

  h1 {
    padding: 0.5em 0;
    font-size: 1.1em;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text.primary} !important;
  }

  p {
    font-size: 1em;
    line-height: 1.2em;
    color: ${({ theme }) => theme.colors.text.quaternary};
  }
`;

const Sidebar = styled.div`
  font-size: 1em;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const Name = styled.div`
  height: 100%;
  font-size: 1em;

  h1,
  h2 {
    white-space: nowrap;
  }

  h1 {
    color: ${({ theme }) => theme.colors.text.primary} !important;
    font-size: 2em;
  }

  h2 {
    font-weight: 300;
    font-size: 1.75em;
    color: ${({ theme }) => theme.colors.text.quaternary};
  }
`;

export default Default;
