import { useDispatch, useSelector } from 'react-redux';
import {
  CATEGORY_CHANGE,
  selectByCategoryAndId,
} from '../../../../../../store/edit';
import { ICV, IEducation } from '../../../../../../types/editor';
import styled from 'styled-components';
import { useEffect } from 'react';
import Input from '../../../Input';

type Props = {
  id: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  category: string;
};

const Education = ({ id, setTitle, category }: Props) => {
  const dispatch = useDispatch();
  const item: IEducation = useSelector((state: { edit: ICV }) =>
    selectByCategoryAndId(state, category, id)
  );

  useEffect(() => {
    setTitle(
      item.degree
        ? item.school
          ? `${item.degree} at ${item.school}`
          : item.degree
        : 'Education'
    );
  }, [item]);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    dispatch(
      CATEGORY_CHANGE({
        id: id,
        property: e.target.id,
        value: e.target.value,
        category: category,
      })
    );
  };

  return (
    <Wrapper>
      <Input handleChange={handleChange} id="school" value={item.school} />
      <Input handleChange={handleChange} id="degree" value={item.degree} />
      <Container>
        <Input handleChange={handleChange} id="from" value={item.from} />
        <Input handleChange={handleChange} id="to" value={item.to} />
      </Container>
      <Input handleChange={handleChange} id="city" value={item.city} />
      <Description></Description>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: calc(50% - 8px) calc(50% - 8px);
  row-gap: 16px;
  column-gap: 16px;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: calc(50% - 8px) calc(50% - 8px);
  column-gap: 16px;
`;

const Description = styled.div`
  grid-column-start: 1;
  grid-row-start: 3;
  grid-column-end: 3;
  grid-row-end: 3;

  label {
    color: ${({ theme }) => theme.colors.text.secondary};
    font-weight: 300;
  }

  textarea {
    margin-top: 8px;
    margin-bottom: 16px;
    border-radius: 4px;
    padding: 4px 2px;
    resize: none;
    border: none;
    outline: none;
    width: 100%;
  }
`;

export default Education;
