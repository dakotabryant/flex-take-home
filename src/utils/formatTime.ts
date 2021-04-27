export const formatTime = (timer: number) => {
  const formattedSeconds = `0${timer}`.slice(0, 2);
  const formattedMilliseconds = `${(timer / 10) % 100}0`.slice(-2);
  return `${formattedSeconds} : ${timer === 5 ? '00' : formattedMilliseconds}`;
};
