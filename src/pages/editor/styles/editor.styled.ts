import styled from 'styled-components';

export const Text = styled.div`
  display: flex;
  margin-left: -24px;
  /* margin-bottom: 8px; */
  cursor: pointer;
  user-select: none;

  svg {
    margin-top: 1px;
    font-size: 24px;
  }

  h1 {
    font-size: 24px;
    font-weight: 600;
  }
`;

export const InputContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;

label {
  font-size: 16px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.text.primary};
  /* color: black; */
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