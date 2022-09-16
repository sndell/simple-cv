import styled from 'styled-components';
import Preview from './Preview';
import Category from './category/components';
import Basic from './Basic';

const Editor = () => {
  return (
    <Wrapper>
      <Details>
        <Basic />
        <Category category="employment" />
        <Category category="education" />
        {/* <Employment />
        <Education /> */}
      </Details>
      <Preview />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
`;

const Details = styled.div`
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 8px 160px;
  overflow-y: auto;
`;

export default Editor;
