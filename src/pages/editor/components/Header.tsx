import styled from 'styled-components';
import useToggle from '../../../common/hooks/useToggle';
import { MdExpandLess, MdExpandMore } from 'react-icons/md';

type Props = {
  title?: string;
  toggle: { active: boolean; toggleActive: () => void };
};

const Header = ({ title, toggle }: Props) => {
  return (
    <Text onClick={toggle.toggleActive}>
      {toggle.active ? <MdExpandLess /> : <MdExpandMore />}
      <h1>{title}</h1>
    </Text>
  );
};

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

export default Header;
