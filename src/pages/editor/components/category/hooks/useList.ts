import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectEmplyments,
  selectEducations,
  selectLanguages,
  NEW_EMPLOYMENT,
  NEW_EDUCATION,
  NEW_LANGUAGE,
} from '../../../../../store/edit';
import { IEducation, IEmployment } from '../../../../../types/editor';

const useList = (category: string) => {
  const dispatch = useDispatch();
  const employments = useSelector(selectEmplyments);
  const educations = useSelector(selectEducations);
  const languages = useSelector(selectLanguages);
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
      case 'language':
        dispatch(NEW_LANGUAGE());
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
      case 'language':
        setItems(languages);
        break;
      default:
        break;
    }
  };

  return { items, newItem };
};

export default useList;
