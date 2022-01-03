import React, { FC, useEffect, useState } from 'react';

import dayjs from 'dayjs';

import classes from './Clock.module.scss';

interface ClockProps {}

const Clock: FC<ClockProps> = () => {
  const [clock, setClock] = useState({ time: '', date: '' });

  useEffect(() => {
    const interval = setInterval(() => {
      setClock({
        time: dayjs(new Date()).format('HH:mm'),
        date: dayjs(new Date()).format('DD/MM/YYYY'),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div title={dayjs(new Date()).format('dddd D MMMM YYYY')} className={classes.Clock}>
      <span>{clock.time}</span>
      <span>{clock.date}</span>
    </div>
  );
};

export default Clock;
