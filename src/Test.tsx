import { useSelector } from 'react-redux';
import { selectCv } from './store/edit';
import { useEffect } from 'react';

type Props = {};

const Test = (props: Props) => {
  const cv = useSelector(selectCv);

  useEffect(() => {
    console.log(cv);
  }, [cv]);

  return null;
};

export default Test;
