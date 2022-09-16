import { useState } from 'react';
import styled from 'styled-components';
import useToggle from '../../../../../common/hooks/useToggle';
import Education from './Education';
import Employment from './Employment';
import ListItemHeader from './ListItemHeader';

type Props = {
  id: string;
  category: string;
};

const ListItem = ({ id, category }: Props) => {
  const expand = useToggle();
  const [title, setTitle] = useState(category);

  const getInputs = () => {
    if (category === 'education')
      return <Education id={id} setTitle={setTitle} />;
    else if (category === 'employment')
      return <Employment id={id} setTitle={setTitle} />;
  };

  return (
    <Wrapper>
      <ListItemHeader toggle={expand} title={title} />
      {expand.active && getInputs()}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 0 16px;
  margin-bottom: 4px;
`;

export default ListItem;
