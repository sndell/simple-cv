import { BsPlusLg } from 'react-icons/bs';
import useList from '../hooks/useList';
import styled from 'styled-components';
import ListItem from './ListItem';

type Props = {
  category: string;
  title: string;
};
const List = ({ category, title }: Props) => {
  const { items, newItem } = useList(category);
  return (
    <Wrapper>
      <Items>
        {items.map((item) => (
          <ListItem id={item.id} category={category} key={item.id} />
        ))}
      </Items>
      <Button onClick={newItem}>
        <BsPlusLg />
        <h1>{`Add new ${title}`}</h1>
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Items = styled.div``;

const Button = styled.div`
  margin-top: 8px;
  /* padding: 8px 16px; */
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  cursor: pointer;
  /* border: 1px solid ${({ theme }) => theme.colors.secondary}; */
  border-radius: 8px;

  h1 {
    /* font-weight: 600; */
  }

  svg {
    margin: 0 4px;
    margin-top: 2px;
    font-size: 10px;
  }
`;

export default List;
