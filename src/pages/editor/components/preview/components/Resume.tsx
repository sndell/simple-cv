import { useSelector } from 'react-redux';
import { useState, useRef } from 'react';
import styled from 'styled-components';
import { selectCv } from '../../../../../store/edit';
import Default from '../../../../../common/resume layouts/default';
// @ts-ignore
import Pdf from 'react-to-pdf';

type StyledProps = {
  scale: number;
  ratio: number;
};

const Resume = () => {
  const resume = useSelector(selectCv);
  const [ratio, setRatio] = useState(1.35);
  const [scale, setScale] = useState(1);
  const ref = useRef(null);

  const handleLayout = (layout: string) => {
    if (layout === 'default') return <Default resume={resume} />;
  };

  const handleCreate = async (create: () => void) => {
    await setScale(ratio);
    create();
    setScale(1);
  };

  return (
    <>
      <Pdf targetRef={ref} filename="resume">
        {({ toPdf }: any) => (
          <button onClick={() => handleCreate(toPdf)}>Generate</button>
        )}
      </Pdf>
      <Wrapper ref={ref} scale={scale} ratio={ratio}>
        {handleLayout(resume.layout)}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div<StyledProps>`
  border-radius: ${({ scale }) => (scale === 1 ? '4px' : 0)};
  border: none;
  height: ${({ scale }) => 220 * scale}mm;
  font-size: ${({ scale, ratio }) => (14 / ratio) * scale}px;
  aspect-ratio: 1 / 1.4142;
  background-color: #fff;
`;

export default Resume;
