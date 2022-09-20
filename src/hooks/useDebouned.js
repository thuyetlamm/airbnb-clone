import { useState, useEffect } from 'react';

export default function useDebouned(value, delay) {
  const [deboundValue, setDeboundValue] = useState(value);
  useEffect(() => {
    const timeIds = setTimeout(() => {
      setDeboundValue(value);
    }, delay);

    return () => {
      clearTimeout(timeIds);
    };
  }, [value]);
  return deboundValue;
}
