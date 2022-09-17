import { useDispatch, useSelector } from 'react-redux';
import {
  CATEGORY_CHANGE,
  selectByCategoryAndId,
} from '../../../../../../store/edit';
import { ICV, IEmployment, ILanguage } from '../../../../../../types/editor';
import styled from 'styled-components';
import React, { useEffect } from 'react';
import Range from '../../../Range';
import Input from '../../../Input';

type Props = {
  id: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  category: string;
};
const Language = ({ id, setTitle, category }: Props) => {
  const dispatch = useDispatch();
  const item: ILanguage = useSelector((state: { edit: ICV }) =>
    selectByCategoryAndId(state, category, id)
  );
  const texts = ['Novice', 'Beginner', 'Intermediate', 'Advanced', 'Expert'];

  useEffect(() => {
    setTitle(
      item.name
        ? item.level
          ? `${item.level.text} at ${item.name}`
          : item.name
        : 'Language'
    );
  }, [item]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      CATEGORY_CHANGE({
        id,
        property: e.target.id,
        value: e.target.value,
        category: category,
      })
    );
  };

  const handleRange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      CATEGORY_CHANGE({
        id,
        property: e.target.id,
        value: {
          number: parseInt(e.target.value),
          text: texts[parseInt(e.target.value) - 1],
        },
        category: category,
      })
    );
  };

  return (
    <Wrapper>
      <Input handleChange={handleInput} id="name" value={item.name} />
      <Range id="level" value={item.level} handleChange={handleRange} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: calc(50% - 8px) calc(50% - 8px);
  row-gap: 16px;
  column-gap: 16px;
  padding-bottom: 16px;
`;

export default Language;
