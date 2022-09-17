import styled from 'styled-components';
import Resume from './Resume';

const Preview = () => {
  return (
    <Wrapper>
      <Resume />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 32px 32px;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;

  h1 {
    color: white;
  }
`;

export default Preview;
