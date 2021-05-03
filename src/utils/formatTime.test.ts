import { formatTime } from './formatTime';

describe('formatTime utility', () => {
  let time = 3500;
  it('returns correctly formatted time under 10 seconds', () => {
    const formattedTime = formatTime(time);
    expect(formattedTime).toEqual('03 : 50');
  });
  it('returns correctly formatted time over 10 seconds', () => {
    time = 11500;
    const formattedTime = formatTime(time);
    expect(formattedTime).toEqual('11 : 50');
  });
});
