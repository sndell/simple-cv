import { MdExpandMore, MdExpandLess } from 'react-icons/md';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { NEW_EMPLOYMENT, selectEmplyments } from '../../../../../store/edit';
import { BsPlusLg } from 'react-icons/bs';
import useToggle from '../../../../../common/hooks/useToggle';
import Job from './Job';
import { Text } from '../../../styles/editor.styled';

type Props = {};

const Employment = (props: Props) => {
  const expanded = useToggle();
  const dispatch = useDispatch();
  const employments = useSelector(selectEmplyments);

  const handleNew = () => {
    dispatch(NEW_EMPLOYMENT());
  };

  return (
    <Wrapper>
      <Text onClick={expanded.toggleActive}>
        {expanded.active ? <MdExpandLess /> : <MdExpandMore />}
        <h1>Employment History</h1>
      </Text>
      {expanded.active && (
        <>
          <Employments>
            {employments.map((employment) => (
              <Job id={employment.id} key={employment.id} />
            ))}
          </Employments>
          <Create onClick={handleNew}>
            <h1>Add new employment</h1>
            <BsPlusLg />
          </Create>
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Employments = styled.div``;

const Create = styled.div`
  margin-top: 8px;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 4px;

  h1 {
    font-weight: 600;
  }

  svg {
    font-size: 14px;
  }
`;

export default Employment;
