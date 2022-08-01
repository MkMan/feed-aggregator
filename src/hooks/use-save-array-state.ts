import { useState } from 'react';

const useSaveArrayState = <StateType>(initialValue?: StateType[]) => {
  const [state, setState] = useState<Set<StateType>>(new Set(initialValue));

  const add = (value: StateType) => {
    if (!state.has(value)) {
      state.add(value);
      setState(new Set(state));
    }
  };

  const remove = (value: StateType) => {
    if (state.has(value)) {
      state.delete(value);
      setState(new Set(state));
    }
  };

  return {
    state: Array.from(state),
    add,
    remove,
  };
};

export { useSaveArrayState };
