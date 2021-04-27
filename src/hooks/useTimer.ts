import { useEffect, useState } from 'react';
import { TIME_LIMIT_IN_MILLISECONDS } from '../utils/constants';
export const useTimer = () => {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  useEffect(() => {
    let interval: any;
    if (timerOn) {
      interval = window.setInterval(() => {
        setTime((prevState) => prevState + 10);
      }, 10);
    } else {
      window.clearInterval(interval);
    }
    return () => window.clearInterval(interval);
  }, [timerOn]);
  if (time === TIME_LIMIT_IN_MILLISECONDS && timerOn) {
    setShouldAnimate(true);
    setTimerOn(false);
  }
  return { time, timerOn, setTimerOn, setTime, shouldAnimate, setShouldAnimate };
};
