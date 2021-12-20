import { useEffect, useRef, EffectCallback, DependencyList } from "react";

export const useEffectSckipFirst = (
  effect: EffectCallback,
  deps?: DependencyList
) => {
  const initRender = useRef(false);

  useEffect(() => {
    if (initRender.current) {
      return effect();
    } else {
      initRender.current = true;
    }
  }, deps);
};
