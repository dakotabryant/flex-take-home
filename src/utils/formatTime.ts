import { TIME_LIMIT_IN_MILLISECONDS } from './constants';

export const formatTime = (timer: number) => {
  const formattedSeconds = `${timer >= 10000 ? '' : '0'}${timer / 1000}`.slice(0, 2);
  const formattedMilliseconds = `0${(timer / 10) % 100}`.slice(-2);
  return `${formattedSeconds} : ${
    timer === TIME_LIMIT_IN_MILLISECONDS / 1000 ? '00' : formattedMilliseconds
  }`;
};
