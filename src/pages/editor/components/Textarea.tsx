import styled from 'styled-components';

type Props = {
  value: any;
  handleChange: any;
  id: string;
  label?: string;
};

const Textarea = ({ value, handleChange, label, id }: Props) => {
  return (
    <Wrapper>
      <label htmlFor={id}>{label ? label : id}</label>
      <textarea rows={4} id={id} value={value} onChange={handleChange} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  grid-column-start: 1;
  grid-row-start: 3;
  grid-column-end: 3;
  grid-row-end: 3;

  label {
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text.secondary};
    font-weight: 300;
  }

  textarea {
    background-color: ${({ theme }) => theme.colors.primary};
    margin-top: 8px;
    margin-bottom: 16px;
    padding: 4px 2px;
    border-radius: 4px;
    resize: none;
    border: none;
    outline: none;
    width: 100%;
  }
`;

export default Textarea;
