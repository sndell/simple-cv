import styled from 'styled-components';
import useToggle from '../../../../../common/hooks/useToggle';
import List from './List';
import Header from '../../Header';

type Props = {
  category: string;
};

const Category = ({ category }: Props) => {
  const toggle = useToggle(true);

  return (
    <Wrapper>
      <Header title={`${category}s`} toggle={toggle} />
      {toggle.active && <List category={category}></List>}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Category;
