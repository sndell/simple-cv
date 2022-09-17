import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectCv } from '../../../../store/edit';
import Default from '../../../../common/resume layouts/default';

const Resume = () => {
  const resume = useSelector(selectCv);

  const handleLayout = (layout: string) => {
    if (layout === 'default') return <Default resume={resume} />;
  };

  return <Wrapper>{handleLayout(resume.layout)}</Wrapper>;
};

const Wrapper = styled.div`
  border-radius: 4px;
  height: 210mm;
  aspect-ratio: 1 / 1.4142;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export default Resume;
