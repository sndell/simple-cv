import styled from 'styled-components';
import { BsPlusLg } from 'react-icons/bs';
import useToggle from '../../../../../common/hooks/useToggle';
import List from './List';
import Header from '../../Header';

type Props = {
  category: string;
};

const Category = ({ category }: Props) => {
  const expand = useToggle();

  const getTitle = () => {
    switch (category) {
      case 'employment':
        return 'Employment';
      case 'education':
        return 'Education';
      default:
        return '';
    }
  };

  return (
    <Wrapper>
      <Header title={getTitle()} toggle={expand} />
      {expand.active && (
        <List
          category={category}
          title={getTitle()?.toLocaleLowerCase()}
        ></List>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Create = styled.div`
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

export default Category;
