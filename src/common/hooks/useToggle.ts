import { useState } from 'react';

const useToggle = (initial?: boolean) => {
  const [active, setActive] = useState(initial ? initial : false);

  const toggleActive = () => {
    setActive((state) => !state);
  };

  return { active, toggleActive };
};

export default useToggle;
