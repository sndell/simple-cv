import { ICV } from '../../../types/editor';
import { useEffect } from 'react';
import styled from 'styled-components';

type Props = {
  resume: ICV;
};

const Default = ({ resume }: Props) => {
  useEffect(() => {
    console.log(resume);
  }, [resume]);

  return (
    <Wrapper>
      <h1>helo</h1>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  h1 {
    font-size: 1rem;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

export default Default;
