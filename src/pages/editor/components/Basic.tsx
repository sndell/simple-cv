import styled from 'styled-components';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';
import { useState } from 'react';
// import { IBasic } from '../../../types/editor';

type Props = {};

const Basic = (props: Props) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => {
    setExpanded((old) => !old);
    console.log('helo');
  };
  return (
    <Wrapper>
      <Text>
        <MdExpandMore />
        <h1>Basic Info</h1>
      </Text>
      <Inputs>
        <Container>
          <label htmlFor="name">Full name</label>
          <input type="text" id="name" />
        </Container>
        <Container>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" />
        </Container>
        <Container>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" />
        </Container>
        <Container>
          <label htmlFor="phone">Phone</label>
          <input type="text" id="phone" />
        </Container>
        <Container>
          <label htmlFor="country">Country</label>
          <input type="text" id="country" />
        </Container>
        <Container>
          <label htmlFor="city">City</label>
          <input type="text" id="city" />
        </Container>
        {expanded && (
          <>
            <Container>
              <label htmlFor="address">Adress</label>
              <input type="text" id="address" />
            </Container>
            <Container>
              <label htmlFor="zip">Zip code</label>
              <input type="text" id="zip" />
            </Container>
          </>
        )}
      </Inputs>
      <Expand onClick={toggleExpanded}>
        <h1>Additional Details</h1>
        {expanded ? <MdExpandLess /> : <MdExpandMore />}
      </Expand>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 16px 80px;
`;

const Text = styled.div`
  display: flex;
  margin-left: -16px;
  margin-bottom: 8px;
  cursor: pointer;

  h1 {
    font-size: 14px;
    font-weight: 600;
  }
`;

const Expand = styled.div`
  display: flex;
  margin-top: 8px;
  cursor: pointer;
  user-select: text;

  h1 {
    font-size: 10px;
    font-weight: 500;
  }
  svg {
    font-size: 12px;
  }
`;

const Inputs = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  row-gap: 16px;
  column-gap: 8px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  label {
    font-size: 8px;
    color: ${({ theme }) => theme.colors.text.tertiary};
    margin-bottom: 4px;
  }

  input {
    font-size: 10px;
    padding: 4px 6px;
    border: none;
    border-radius: 2px;
    outline: none;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export default Basic;
