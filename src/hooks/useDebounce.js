import { useEffect, useState } from 'react';

export default function useDebounce(initialState, delay) {
  const [value, setValue] = useState(initialState);
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return [debouncedValue, setValue];
}
