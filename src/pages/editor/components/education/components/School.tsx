import { useEffect } from 'react';
import styled from 'styled-components';
import useToggle from '../../../../../common/hooks/useToggle';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import {
  CHANGE_EDUCATION,
  selectEducationById,
} from '../../../../../store/edit';
import { ICV, IEducation, IEmployment } from '../../../../../types/editor';

const School = (props: { id: string }) => {
  const inputs = useToggle();
  const dispatch = useDispatch();
  const education: IEducation = useSelector((state: { edit: ICV }) =>
    selectEducationById(state, props.id)
  );

  const handleInput = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    dispatch(
      CHANGE_EDUCATION({
        educationId: props.id,
        id: e.target.id,
        value: e.target.value,
      })
    );
  };

  return (
    <Wrapper>
      <Card onClick={inputs.toggleActive}>
        {education.degree ? (
          <h1>{`${education.degree} ${
            education.school && 'at ' + education.school
          }`}</h1>
        ) : (
          <h1>Education</h1>
        )}
        {inputs.active ? <MdExpandLess /> : <MdExpandMore />}
      </Card>
      {inputs.active && (
        <>
          <Inputs>
            <InputContainer>
              <label htmlFor="school">School</label>
              <input
                type="text"
                id="school"
                value={education?.school}
                onChange={handleInput}
              />
            </InputContainer>
            <InputContainer>
              <label htmlFor="degree">Degree</label>
              <input
                type="text"
                id="degree"
                value={education?.degree}
                onChange={handleInput}
              />
            </InputContainer>
            <DateContainer>
              <InputContainer>
                <label htmlFor="from">From</label>
                <input
                  type="text"
                  id="from"
                  value={education?.from}
                  onChange={handleInput}
                />
              </InputContainer>
              <InputContainer>
                <label htmlFor="to">To</label>
                <input
                  type="text"
                  id="to"
                  value={education?.to}
                  onChange={handleInput}
                />
              </InputContainer>
            </DateContainer>
            <InputContainer>
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                value={education?.city}
                onChange={handleInput}
              />
            </InputContainer>
          </Inputs>
          <label htmlFor="description">Description</label>
          <textarea
            rows={4}
            id="description"
            value={education?.description}
            onChange={handleInput}
          />
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* border: 1px solid ${({ theme }) => theme.colors.secondary}; */
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 0 16px;

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

const Card = styled.div`
  /* background-color: ${({ theme }) => theme.colors.secondary}; */
  margin-top: 8px;
  padding: 8px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  user-select: none;

  svg {
    fill: white;
    font-size: 24px;
    margin-right: -4px;
  }

  h1 {
    color: ${({ theme }) => theme.colors.text.tertiary};
  }
`;

const DateContainer = styled.div`
  display: grid;
  grid-template-columns: calc(50% - 8px) calc(50% - 8px);
  column-gap: 16px;
`;

const Inputs = styled.div`
  margin-bottom: 24px;
  display: grid;
  grid-template-columns: calc(50% - 8px) calc(50% - 8px);
  row-gap: 16px;
  column-gap: 16px;
`;

export const InputContainer = styled.div`
  margin-top: 8px;
  width: 100%;
  display: flex;
  flex-direction: column;

  label {
    font-weight: 300;
    color: ${({ theme }) => theme.colors.text.secondary};
    margin-bottom: 8px;
  }

  input {
    font-size: 16px;
    padding: 8px 12px;
    border: none;
    border-radius: 4px;
    outline: none;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export default School;
