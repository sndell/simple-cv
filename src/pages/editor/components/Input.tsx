import styled from 'styled-components';

type Props = {
  value: any;
  handleChange: any;
  id: string;
  label?: string;
};

const Input = ({ value, handleChange, label, id }: Props) => {
  return (
    <Wrapper>
      <label htmlFor={id}>{label ? label : id}</label>
      <input type="text" id={id} value={value} onChange={handleChange} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-weight: 300;
    color: ${({ theme }) => theme.colors.text.secondary};
    margin-bottom: 8px;
    text-transform: capitalize;
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

export default Input;
