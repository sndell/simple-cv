import { useDispatch, useSelector } from 'react-redux';
import { CHANGE_LANGUAGE, selectLanguageById } from '../../../../../store/edit';
import { ICV, IEmployment, ILanguage } from '../../../../../types/editor';
import styled from 'styled-components';
import { useEffect } from 'react';
import Input from '../../../../../common/components/Input';

type Props = {
  id: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
};
const Language = ({ id, setTitle }: Props) => {
  const dispatch = useDispatch();
  const item: ILanguage = useSelector((state: { edit: ICV }) =>
    selectLanguageById(state, id)
  );

  useEffect(() => {
    setTitle(
      item.name
        ? item.level
          ? `${item.level} in ${item.name}`
          : item.name
        : 'Language'
    );
  }, [item]);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    dispatch(
      CHANGE_LANGUAGE({
        id,
        property: e.target.id,
        value: e.target.value,
      })
    );
  };

  return (
    <Wrapper>
      <Input handleChange={handleChange} id="name" value={item.name} />
      <Input handleChange={handleChange} id="level" value={item.level} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: calc(50% - 8px) calc(50% - 8px);
  row-gap: 16px;
  column-gap: 16px;
  padding-bottom: 16px;
`;

export default Language;
