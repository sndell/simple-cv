import { useDispatch, useSelector } from 'react-redux';
import { CHANGE_LANGUAGE, selectLanguageById } from '../../../../../store/edit';
import { ICV, IEmployment, ILanguage } from '../../../../../types/editor';
import styled from 'styled-components';
import React, { useEffect } from 'react';
import Range from '../../../../../common/components/Range';
import Input from '../../../../../common/components/Input';

type Props = {
  id: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
};
const Language = ({ id, setTitle }: Props) => {
  const dispatch = useDispatch();
  const item: ILanguage = useSelector((state: { edit: ICV }) =>
    selectLanguageById(state, id)
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
      CHANGE_LANGUAGE({
        id,
        property: e.target.id,
        value: e.target.value,
      })
    );
  };

  const handleRange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      CHANGE_LANGUAGE({
        id,
        property: e.target.id,
        value: {
          number: parseInt(e.target.value),
          text: texts[parseInt(e.target.value) - 1],
        },
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
