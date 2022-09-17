import { useDispatch, useSelector } from 'react-redux';
import {
  CATEGORY_CHANGE,
  selectByCategoryAndId,
} from '../../../../../../store/edit';
import { ICV, IEmployment } from '../../../../../../types/editor';
import styled from 'styled-components';
import { useEffect } from 'react';
import Input from '../../../Input';
import Textarea from '../../../Textarea';

type Props = {
  id: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  category: string;
};

const Employment = ({ id, setTitle, category }: Props) => {
  const dispatch = useDispatch();
  const item: IEmployment = useSelector((state: { edit: ICV }) =>
    selectByCategoryAndId(state, category, id)
  );

  useEffect(() => {
    setTitle(
      item.title
        ? item.company
          ? `${item.title} at ${item.company}`
          : 'Employment'
        : 'Employment'
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
      <Input handleChange={handleChange} id="company" value={item.company} />
      <Input handleChange={handleChange} id="title" value={item.title} />
      <Container>
        <Input handleChange={handleChange} id="from" value={item.from} />
        <Input handleChange={handleChange} id="to" value={item.to} />
      </Container>
      <Input handleChange={handleChange} id="city" value={item.city} />
      <Textarea
        handleChange={handleChange}
        id="description"
        value={item.description}
      />
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

export default Employment;
