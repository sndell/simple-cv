import { useDispatch, useSelector } from 'react-redux';
import {
  CHANGE_EMPLOYMENT,
  selectEmplymentById,
} from '../../../../../store/edit';
import { ICV, IEmployment } from '../../../../../types/editor';
import styled from 'styled-components';
import { useEffect } from 'react';
import Input from '../../../../../common/components/Input';

type Props = {
  id: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
};

const Employment = ({ id, setTitle }: Props) => {
  const dispatch = useDispatch();
  const item: IEmployment = useSelector((state: { edit: ICV }) =>
    selectEmplymentById(state, id)
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
      CHANGE_EMPLOYMENT({
        employmentId: id,
        id: e.target.id,
        value: e.target.value,
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
      <Description>
        <label htmlFor="description">Description</label>
        <textarea
          rows={4}
          id="description"
          value={item.description}
          onChange={handleChange}
        />
      </Description>
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
    resize: none;
    border: none;
    outline: none;
    width: 100%;
  }
`;

export default Employment;
