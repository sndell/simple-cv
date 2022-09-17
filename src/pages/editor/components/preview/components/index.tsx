import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Resume from './Resume';
// @ts-ignore
import Pdf from 'react-to-pdf';

const Preview = () => {
  const [ratio, setRatio] = useState(1);
  const [scale, setScale] = useState(1);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const ref = useRef<any>(null);

  const handleCreate = async (create: () => void) => {
    await setScale(ratio);
    create();
    setScale(1);
  };

  useEffect(() => {
    const resizeListener = () => {
      setWidth(ref.current.clientHeight / 1.4142);
      setHeight(ref.current.clientHeight);
      setRatio(1122.5196850394 / ref.current.clientHeight);
    };

    setWidth(ref.current.clientHeight / 1.4142);
    setHeight(ref.current.clientHeight);
    setRatio(1122.5196850394 / ref.current.clientHeight);

    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  return (
    <Wrapper>
      <Container>
        <Resume
          ref={ref}
          scale={scale}
          ratio={ratio}
          width={width}
          height={height}
        />
        <Buttons>
          <Pdf targetRef={ref} filename="resume">
            {({ toPdf }: any) => (
              <Generate onClick={() => handleCreate(toPdf)}>Download</Generate>
            )}
          </Pdf>
        </Buttons>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    color: white;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  height: 100%;
  padding: 0 16px;
`;

const Buttons = styled.div`
  padding: 16px 0;
`;

const Generate = styled.div`
  user-select: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  width: fit-content;
  height: 36px;
  padding: 0 8px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export default Preview;
