import { useState } from "react"

 const useToggle = () => {
  const [active, setActive] = useState(false);
  
  const toggleActive = () => {
    setActive(state => !state);
  }

  return {active, toggleActive}
}

export default useToggle