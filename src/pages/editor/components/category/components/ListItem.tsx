import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import useToggle from '../../../../../common/hooks/useToggle';
import Education from './inputs/Education';
import Employment from './inputs/Employment';
import { MdExpandMore } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { selectId, SET_ID } from '../../../../../store/input';
import Language from './inputs/Language';

type Props = {
  id: string;
  category: string;
};

type StyledProps = {
  toggle: boolean;
  height?: number;
};

const ListItem = ({ id, category }: Props) => {
  const toggle = useToggle();
  const [title, setTitle] = useState(category);
  const activeId = useSelector(selectId);
  const dispatch = useDispatch();
  const ref = useRef<HTMLHeadingElement>(null);

  const getInputs = () => {
    const props = {
      id: id,
      setTitle: setTitle,
      category: category,
    };

    if (category === 'education') return <Education {...props} />;
    else if (category === 'employment') return <Employment {...props} />;
    else if (category === 'language') return <Language {...props} />;
  };

  useEffect(() => {
    if (id === activeId && !toggle.active) dispatch(SET_ID(''));
  }, []);

  useEffect(() => {
    if (id === activeId && !toggle.active) toggle.toggleActive();
    else if (toggle.active) toggle.toggleActive();
  }, [activeId]);

  return (
    <Wrapper>
      <Header
        onClick={() => dispatch(SET_ID(toggle.active ? '' : id))}
        toggle={toggle.active}
        tabIndex={-1}
      >
        <h1>{title}</h1>
        <MdExpandMore />
      </Header>
      <Content
        toggle={toggle.active}
        ref={ref}
        height={ref.current?.scrollHeight}
      >
        {getInputs()}
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 0 16px;
  margin-bottom: 4px;
  overflow: hidden;
`;

const Header = styled.div<StyledProps>`
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
    transform: rotate(${({ toggle }) => (toggle ? 180 : 0)}deg);
    transition: transform 0.15s;
  }

  h1 {
    color: ${({ theme }) => theme.colors.text.tertiary};
  }
`;

const Content = styled.div<StyledProps>`
  max-height: ${({ toggle, height }) => (toggle ? `${height}px` : '0')};
  opacity: ${({ toggle }) => (toggle ? 1 : 0)};
  transform: scale(${({ toggle }) => (toggle ? 1 : 0.95)});
  transition: max-height 0.25s cubic-bezier(0.32, 1.17, 0.68, 0.86),
    opacity 0.1s cubic-bezier(0.32, 1.17, 0.68, 0.86),
    transform 0.05s cubic-bezier(0.32, 1.17, 0.68, 0.86);
`;

export default ListItem;
