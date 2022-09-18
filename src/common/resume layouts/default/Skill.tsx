import styled from 'styled-components';
import { ISkill } from '../../../types/editor';

const Skill = ({ name, level }: ISkill) => {
  return (
    <Wrapper>
      <p>{name}</p>
      <p>{level?.text}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-size: 1em;
  margin-bottom: 0.5em;
  /* margin-bottom: 4px; */

  p {
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text.quaternary};
  }

  p:nth-last-child(1) {
    font-weight: 300;
  }
`;

export default Skill;
