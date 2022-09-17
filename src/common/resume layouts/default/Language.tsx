import styled from 'styled-components';
import { ILanguage } from '../../../types/editor';

const Language = ({ name, level }: ILanguage) => {
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
    color: ${({ theme }) => theme.colors.text.primary};
  }

  p:nth-last-child(1) {
    color: ${({ theme }) => theme.colors.text.quaternary};
    font-weight: 300;
  }
`;

export default Language;
