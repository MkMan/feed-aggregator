import { useRef, useState } from 'react';

const useSaveArrayState = <StateType>() => {
  const setRef = useRef<Set<StateType>>(new Set());
  const [state, setState] = useState(Array.from(setRef.current));

  const addValue = (value: StateType) => {
    if (!setRef.current.has(value)) {
      setRef.current.add(value);
      setState(Array.from(setRef.current));
    }
  };

  const removeValue = (value: StateType) => {
    if (setRef.current.has(value)) {
      setRef.current.delete(value);
      setState(Array.from(setRef.current));
    }
  };

  return {
    state,
    addValue,
    removeValue,
  };
};

export { useSaveArrayState };
