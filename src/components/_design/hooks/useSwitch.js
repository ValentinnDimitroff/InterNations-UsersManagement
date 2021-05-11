import { useCallback, useState } from "react";

export const useSwitch = (initialState) => {
  const [state, setState] = useState(initialState);

  const turnOn = useCallback(() => setState(true), [setState]);
  const turnOff = useCallback(() => setState(false), [setState]);

  return [state, turnOn, turnOff];
};
