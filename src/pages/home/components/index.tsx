import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
type Props = {};

const Home = (props: Props) => {
  const navigate = useNavigate();

  const handleNew = () => {
    navigate('/editor');
  };

  const handleSaved = () => {
    console.log('savveev');
  };

  return (
    <Wrapper>
      <Content>
        <Text>
          <h1>Welcome!</h1>
          <p>Create and view dynamic CVs</p>
        </Text>
        <Buttons>
          <button type="button" onClick={handleNew}>
            New
          </button>
          <button type="button" onClick={handleSaved}>
            Saved
          </button>
        </Buttons>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
`;

const Text = styled.div`
  h1 {
    font-weight: 500;
  }

  p {
    font-size: 14px;
    font-weight: 300;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;

  button {
    font-size: 10px;
    padding: 2px 6px;
    border: 0.5px solid ${({ theme }) => theme.colors.secondary};
    border-radius: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
  }
`;

export default Home;
