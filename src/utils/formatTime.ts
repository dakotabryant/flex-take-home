export const formatTime = (timer: number) => {
  const formattedSeconds = `0${timer / 1000}`.slice(0, 2);
  const formattedMilliseconds = `0${(timer / 10) % 100}`.slice(-2);
  return `${formattedSeconds} : ${timer === 5 ? '00' : formattedMilliseconds}`;
};
