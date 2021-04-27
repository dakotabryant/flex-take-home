export const formatTime = (timer: number) => {
  const formattedSeconds = `0${timer}`.slice(-2);
  const formattedMilliseconds = `0${(timer / 10) % 100}`.slice(-2);

  return `${formattedSeconds} : ${formattedMilliseconds}`;
};
