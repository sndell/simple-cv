import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ILanguage, ILevel } from '../../types/editor';

type Props = {
  value: ILevel;
  handleChange: any;
  id: string;
  label?: string;
};

type StyledProps = {
  color: string;
};

const Range = ({ value, handleChange, label, id }: Props) => {
  const [color, setColor] = useState('#f592ea');

  useEffect(() => {
    switch (value.number) {
      case 1:
        setColor('#f45c5c');
        break;
      case 2:
        setColor('#f4f179');
        break;
      case 3:
        setColor('#74e49f');
        break;
      case 4:
        setColor('#87bfff');
        break;
      case 5:
        setColor('#d87ffb');
        break;
      default:
        break;
    }
  }, [value]);

  return (
    <Wrapper color={color}>
      <label htmlFor={id}>
        {label ? label : id} - <span>{value.text}</span>
      </label>

      <input
        type="range"
        id={id}
        value={value.number}
        onChange={handleChange}
        min={1}
        max={5}
        step={1}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div<StyledProps>`
  margin-top: 8px;
  width: 100%;
  display: flex;
  flex-direction: column;

  label {
    font-weight: 300;
    color: ${({ theme }) => theme.colors.text.secondary};
    margin-bottom: 8px;
    text-transform: capitalize;

    span {
      transition: all 0.35s cubic-bezier(0.32, 1.17, 0.68, 0.86);
      color: ${({ color }) => color};
    }
  }

  input {
    height: 36px;
    border-radius: 4px;
    overflow: hidden;
    background-color: ${({ color }) => `${color}60`};
    transition: all 0.35s cubic-bezier(0.32, 1.17, 0.68, 0.86);
    opacity: 0.5;
    -webkit-appearance: none;
    cursor: pointer;

    ::-moz-range-progress {
      height: 0;
    }

    ::-moz-range-thumb {
      height: 36px;
      border: none;
      border-radius: 4px;
      width: 20%;
      transition: all 0.35s cubic-bezier(0.32, 1.17, 0.68, 0.86);
      background-color: ${({ color }) => color};
    }
  }
`;

export default Range;
