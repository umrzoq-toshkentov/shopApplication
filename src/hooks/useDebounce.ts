import {useState, useEffect} from 'react';

export const useDebounce = (val: string, time: number) => {
  const [value, setValue] = useState(val);
  useEffect(() => {
    const handle = setTimeout(() => {
      setValue(val);
    }, time);

    return () => {
      clearTimeout(handle);
    };
  }, [val, time]);

  return {
    value,
  };
};
