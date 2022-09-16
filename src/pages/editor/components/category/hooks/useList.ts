import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectEmplyments,
  selectEducations,
  NEW_EMPLOYMENT,
  NEW_EDUCATION,
} from '../../../../../store/edit';
import { IEducation, IEmployment } from '../../../../../types/editor';

type Props = {
  category: string;
};

const useList = (category: string) => {
  const dispatch = useDispatch();
  const employments = useSelector(selectEmplyments);
  const educations = useSelector(selectEducations);
  const [items, setItems] = useState<IEmployment[] | IEducation[] | []>([]);

  useEffect(() => {
    render();
  });

  const newItem = () => {
    switch (category) {
      case 'employment':
        dispatch(NEW_EMPLOYMENT());
        break;
      case 'education':
        dispatch(NEW_EDUCATION());
        break;
      default:
        break;
    }
  };

  const render = () => {
    switch (category) {
      case 'employment':
        setItems(employments);
        break;
      case 'education':
        setItems(educations);
        break;
      default:
        break;
    }
  };

  return { items, newItem };
};

export default useList;