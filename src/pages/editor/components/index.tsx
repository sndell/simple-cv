import styled from 'styled-components';
import Preview from './Preview';
import Employment from './employment/components';
import Basic from './Basic';

type Props = {};

const Editor = (props: Props) => {
  return (
    <Wrapper>
      <Details>
        <Basic />
        <Employment />
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
  display: flex;
  flex-direction: column;
  padding: 8px 80px;
`;

export default Editor;
