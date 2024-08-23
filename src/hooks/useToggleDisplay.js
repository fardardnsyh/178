import { useEffect, useRef, useState } from 'react';

export const useToggleDisplay = () => {
  const ref = useRef();
  const [isDisplay, setIsDisplay] = useState(false);
  const toggleDisplay = () => setIsDisplay((prev) => !prev);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.style.display = 'none';
    if (isDisplay) ref.current.style.display = 'block';
  }, [isDisplay]);

  return [ref, toggleDisplay];
};
