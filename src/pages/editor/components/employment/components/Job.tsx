import { useEffect } from 'react';
import styled from 'styled-components';
import useToggle from '../../../../../common/hooks/useToggle';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import {
  CHANGE_EMPLOYMENT,
  selectEmplymentById,
} from '../../../../../store/edit';
import { ICV, IEmployment } from '../../../../../types/editor';

const Job = (props: { id: string }) => {
  const inputs = useToggle();
  const dispatch = useDispatch();
  const employment: IEmployment = useSelector((state: { edit: ICV }) =>
    selectEmplymentById(state, props.id)
  );

  const handleInput = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    dispatch(
      CHANGE_EMPLOYMENT({
        employmentId: props.id,
        id: e.target.id,
        value: e.target.value,
      })
    );
  };

  return (
    <Wrapper>
      <Card onClick={inputs.toggleActive}>
        {employment.title ? (
          <h1>{`${employment.title} ${
            employment.company && 'at ' + employment.company
          }`}</h1>
        ) : (
          <h1>Employment</h1>
        )}
        {inputs.active ? <MdExpandLess /> : <MdExpandMore />}
      </Card>
      {inputs.active && (
        <>
          <Inputs>
            <InputContainer>
              <label htmlFor="company">Company</label>
              <input
                type="text"
                id="company"
                value={employment?.company}
                onChange={handleInput}
              />
            </InputContainer>
            <InputContainer>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                value={employment?.title}
                onChange={handleInput}
              />
            </InputContainer>
            <DateContainer>
              <InputContainer>
                <label htmlFor="from">From</label>
                <input
                  type="text"
                  id="from"
                  value={employment?.from}
                  onChange={handleInput}
                />
              </InputContainer>
              <InputContainer>
                <label htmlFor="to">To</label>
                <input
                  type="text"
                  id="to"
                  value={employment?.to}
                  onChange={handleInput}
                />
              </InputContainer>
            </DateContainer>
            <InputContainer>
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                value={employment?.city}
                onChange={handleInput}
              />
            </InputContainer>
          </Inputs>
          <label htmlFor="description">Description</label>
          <textarea
            rows={4}
            id="description"
            value={employment?.description}
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

export default Job;