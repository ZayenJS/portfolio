import { RefObject, useEffect, useState } from 'react';

export const useElementClick = (
  ref: RefObject<HTMLElement>,
  type: 'outside' | 'inside' = 'outside',
  focusOnMount = false,
) => {
  const [mounted, setMounted] = useState(false);
  const [match, setMatch] = useState(false);

  useEffect(() => {
    if (!mounted && focusOnMount) {
      setMounted(true);
      setMatch(true);
    }
    const clickHandle = (event: MouseEvent) => {
      if (ref.current) {
        if (type === 'inside') return setMatch(ref.current.contains(event.target as HTMLElement));

        return setMatch(!ref.current.contains(event.target as HTMLElement));
      }
    };

    document.addEventListener('mousedown', clickHandle);

    return () => document.removeEventListener('mousedown', clickHandle);
  }, [ref, type, mounted, focusOnMount]);

  return match;
};
