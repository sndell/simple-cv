import styled from 'styled-components';
import Preview from '../preview/components';
import Category from './category/components';
import Basic from './Basic';

const Editor = () => {
  return (
    <Wrapper>
      <Details>
        <Basic />
        <Category category="employment" />
        <Category category="education" />
        <Category category="language" />
      </Details>
      <Preview />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 10fr 9fr;
`;

const Details = styled.div`
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 8px 10%;
  overflow-y: auto;
`;

export default Editor;
