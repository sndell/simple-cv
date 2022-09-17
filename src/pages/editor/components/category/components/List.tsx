import { BsPlusLg } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { ICV } from '../../../../../types/editor';
import { selectByCategory, CATEGORY_NEW } from '../../../../../store/edit';
import ListItem from './ListItem';

type Props = {
  category: string;
};

const List = ({ category }: Props) => {
  const items: { id: string }[] = useSelector((state: { edit: ICV }) =>
    selectByCategory(state, category)
  );
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Items>
        {items.map((item) => (
          <ListItem key={item.id} category={category} id={item.id} />
        ))}
      </Items>
      <Button onClick={() => dispatch(CATEGORY_NEW({ category }))}>
        <BsPlusLg />
        <h1>{`Add new ${category}`}</h1>
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 24px;
`;

const Items = styled.div``;

const Button = styled.div`
  margin-top: 8px;
  width: fit-content;
  display: flex;
  align-items: center;
  cursor: pointer;

  svg {
    margin-right: 8px;
    margin-top: 1px;
    font-size: 10px;
  }
`;

export default List;
