import styled from 'styled-components';
import useToggle from '../../../../../common/hooks/useToggle';
import { MdExpandLess, MdExpandMore } from 'react-icons/md';

type Props = {
  title: string;
  toggle: { active: boolean; toggleActive: () => void };
};

const ListItemHeader = ({ title, toggle }: Props) => {
  return (
    <Wrapper onClick={toggle.toggleActive}>
      <h1>{title}</h1>
      {toggle.active ? <MdExpandLess /> : <MdExpandMore />}
    </Wrapper>
  );
};

export const Wrapper = styled.div`
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
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text.tertiary};
  }
`;

export default ListItemHeader;
