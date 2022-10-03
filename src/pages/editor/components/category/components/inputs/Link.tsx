import { useDispatch, useSelector } from 'react-redux';
import {
  CATEGORY_CHANGE,
  selectByCategoryAndId,
} from '../../../../../../store/edit';
import { ICV, ILink, ISkill } from '../../../../../../types/editor';
import styled from 'styled-components';
import React, { useEffect } from 'react';
import Range from '../../../Range';
import Input from '../../../Input';

type Props = {
  id: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  category: string;
};
const Link = ({ id, setTitle, category }: Props) => {
  const dispatch = useDispatch();
  const item: ILink = useSelector((state: { edit: ICV }) =>
    selectByCategoryAndId(state, category, id)
  );
  useEffect(() => {
    setTitle(item.label ? item.label : 'Link');
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

  return (
    <Wrapper>
      <Input handleChange={handleInput} id="label" value={item.label} />
      <Input handleChange={handleInput} id="url" value={item.url} />
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

export default Link;
