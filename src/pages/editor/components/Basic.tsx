import { MdExpandMore, MdExpandLess } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { CHANGE_BASIC, CHANGE_ADDRESS, selectBasic } from '../../../store/edit';
import styled from 'styled-components';
import useToggle from '../../../common/hooks/useToggle';
import Header from './Header';
import { InputContainer } from '../styles/editor.styled';

type Props = {};

const Basic = (props: Props) => {
  const dispatch = useDispatch();
  const basic = useSelector(selectBasic);
  const additional = useToggle();
  const expand = useToggle();

  const handleBasic = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(CHANGE_BASIC({ id: e.target.id, value: e.target.value }));
  };

  const handleAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(CHANGE_ADDRESS({ id: e.target.id, value: e.target.value }));
  };

  return (
    <Wrapper>
      <Header title="Basic info" toggle={expand} />
      {/* <Text onClick={expanded.toggleActive}>
        {expanded.active ? <MdExpandLess /> : <MdExpandMore />}
        <h1>Basic Info</h1>
      </Text> */}
      {expand.active && (
        <>
          <Inputs>
            <InputContainer>
              <label htmlFor="name">Full name</label>
              <input
                type="text"
                id="name"
                value={basic?.name}
                onChange={handleBasic}
              />
            </InputContainer>
            <InputContainer>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                value={basic?.title}
                onChange={handleBasic}
              />
            </InputContainer>
            <InputContainer>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                value={basic?.email}
                onChange={handleBasic}
              />
            </InputContainer>
            <InputContainer>
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                id="phone"
                value={basic?.phone}
                onChange={handleBasic}
              />
            </InputContainer>
            <InputContainer>
              <label htmlFor="country">Country</label>
              <input
                type="text"
                id="country"
                value={basic?.address?.country}
                onChange={handleAddress}
              />
            </InputContainer>
            <InputContainer>
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                value={basic?.address?.city}
                onChange={handleAddress}
              />
            </InputContainer>
            {additional.active && (
              <>
                <InputContainer>
                  <label htmlFor="street">Street</label>
                  <input
                    type="text"
                    id="street"
                    value={basic?.address?.street}
                    onChange={handleAddress}
                  />
                </InputContainer>
                <InputContainer>
                  <label htmlFor="zip">Zip code</label>
                  <input
                    type="text"
                    id="zip"
                    value={basic?.address?.zip}
                    onChange={handleAddress}
                  />
                </InputContainer>
              </>
            )}
          </Inputs>
          <Additional onClick={additional.toggleActive}>
            <h1>Additional Details</h1>
            {additional.active ? <MdExpandLess /> : <MdExpandMore />}
          </Additional>
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Additional = styled.div`
  display: flex;
  margin-top: 8px;
  cursor: pointer;
  user-select: none;
  margin-bottom: 16px;
`;

const Inputs = styled.div`
  display: grid;
  grid-template-columns: calc(50% - 4px) calc(50% - 4px);
  row-gap: 16px;
  column-gap: 8px;
  margin-top: 16px;
`;

export default Basic;
