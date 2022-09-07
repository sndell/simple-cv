import styled from 'styled-components';
import Preview from './Preview';
import Basic from './Basic';

type Props = {};

const Editor = (props: Props) => {
  return (
    <Wrapper>
      <Basic />
      <Preview />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`;

export default Editor;
