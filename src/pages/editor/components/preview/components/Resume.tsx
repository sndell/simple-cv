import { useSelector } from 'react-redux';
import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { selectCv } from '../../../../../store/edit';
import Default from '../../../../../common/resume layouts/default';

type Props = {
  scale: number;
  ratio: number;
  width: number;
  height: number;
};

type StyledProps = {
  scale: number;
  ratio: number;
  width: number;
  height: number;
};

const Resume = ({ scale, ratio, width, height }: Props, ref: any) => {
  const resume = useSelector(selectCv);

  const handleLayout = (layout: string) => {
    if (layout === 'default') return <Default resume={resume} />;
  };

  return (
    <Wrapper
      ref={ref}
      scale={scale}
      ratio={ratio}
      width={width}
      height={height}
    >
      {handleLayout(resume.layout)}
    </Wrapper>
  );
};

const Wrapper = styled.div<StyledProps>`
  border-radius: ${({ scale }) => (scale === 1 ? '4px' : 0)};
  border: none;
  height: ${({ scale, height }) =>
    scale !== 1 ? `${height * scale}px` : '100%'};
  width: ${({ width, scale }) => width * scale}px;
  margin-top: 16px;
  font-size: ${({ scale, ratio }) => (14 / ratio) * scale}px;
  background-color: #fff;
`;

export default React.forwardRef(Resume);
