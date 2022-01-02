import { useEffect } from 'react';

export const useOverflow = (activate: boolean = true) => {
  useEffect(() => {
    if (activate) document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, [activate]);
};
