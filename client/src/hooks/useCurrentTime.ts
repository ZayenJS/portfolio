import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

export const useCurrentTime = () => {
  const [time, setTime] = useState({
    formatted: dayjs().format('dd. DD MMM HH:mm:ss'),
    raw: dayjs(),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((pt) => ({ ...pt, formatted: dayjs().format('dd. DD MMM HH:mm:ss'), raw: dayjs() }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return { rawCurrentTime: time.raw, formattedCurrentTime: time.formatted };
};
