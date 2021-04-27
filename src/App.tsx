import './App.css';
import styled from 'styled-components';
import Circle from './Components/Circle';
import { useTimer } from './hooks/useTimer';
import { TIME_LIMIT_IN_MILLISECONDS } from './utils/constants';

const AppContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to bottom, #6446a4 0%, #b096e7 100%);
`;

function App() {
  const { time, timerOn, setTimerOn, setTime, shouldAnimate, setShouldAnimate } = useTimer();
  const handleClick = () => {
    if (!timerOn && time >= TIME_LIMIT_IN_MILLISECONDS) {
      setTime(0);
    } else if (timerOn) {
      setTimerOn(false);
    } else if (!timerOn && time !== TIME_LIMIT_IN_MILLISECONDS) {
      setShouldAnimate(false);
      setTimerOn(true);
    }
  };
  return (
    <AppContainer>
      <Circle
        time={time}
        togglePause={handleClick}
        shouldAnimate={shouldAnimate}
        timeLimit={TIME_LIMIT_IN_MILLISECONDS / 1000}
      />
    </AppContainer>
  );
}

export default App;
