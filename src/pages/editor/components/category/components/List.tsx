import { BsPlusLg } from 'react-icons/bs';
import useList from '../hooks/useList';
import styled from 'styled-components';
import ListItem from './ListItem';

type Props = {
  category: string;
};
const List = ({ category }: Props) => {
  const { items, newItem } = useList(category);

  return (
    <Wrapper>
      <Items>
        {items.map((item) => (
          <ListItem key={item.id} category={category} id={item.id} />
        ))}
      </Items>
      <Button onClick={newItem}>
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
