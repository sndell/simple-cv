import React from 'react';
import styled from 'styled-components';

type Props = {};

const Preview = (props: Props) => {
  return <Wrapper></Wrapper>;
};

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  height: 100vh;

  h1 {
    color: white;
  }
`;

export default Preview;
