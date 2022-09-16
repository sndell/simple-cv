import { MdExpandMore, MdExpandLess } from 'react-icons/md';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { NEW_EDUCATION, selectEducations } from '../../../../../store/edit';
import { BsPlusLg } from 'react-icons/bs';
import useToggle from '../../../../../common/hooks/useToggle';
import School from './School';
// import { Text } from '../../../styles/editor.styled';

type Props = {};

const Education = (props: Props) => {
  const expanded = useToggle();
  const dispatch = useDispatch();
  const educations = useSelector(selectEducations);

  const handleNew = () => {
    dispatch(NEW_EDUCATION());
  };

  return (
    <Wrapper>
      {/* <Text onClick={expanded.toggleActive}>
        {expanded.active ? <MdExpandLess /> : <MdExpandMore />}
        <h1>Education</h1>
      </Text> */}
      {expanded.active && (
        <>
          <Educations>
            {educations.map((employment) => (
              <School id={employment.id} key={employment.id} />
            ))}
          </Educations>
          <Create onClick={handleNew}>
            <BsPlusLg />
            <h1>Add new employment</h1>
          </Create>
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Educations = styled.div``;

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

export default Education;
