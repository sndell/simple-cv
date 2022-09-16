import styled from 'styled-components';
import Preview from './Preview';
import Employment from './employment/components';
import Education from './education/components';
import Category from './category/components';
import Basic from './Basic';

type Props = {};

const Editor = (props: Props) => {
  return (
    <Wrapper>
      <Details>
        <Basic />
        <Category category="employment" />
        {/* <Employment />
        <Education /> */}
      </Details>
      <Preview />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`;

const Details = styled.div`
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 8px 160px;
  overflow-y: auto;
`;

export default Editor;
