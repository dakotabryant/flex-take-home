import './App.css';
import styled from 'styled-components';
import Circle from './Components/Circle';
import { useTimer } from './hooks/useTimer';

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
    if (!timerOn && time >= 5000) {
      setTime(0);
    } else if (timerOn) {
      setTimerOn(false);
    } else if (!timerOn && time !== 5000) {
      setShouldAnimate(false);
      setTimerOn(true);
    }
  };
  return (
    <AppContainer>
      <Circle time={time} togglePause={handleClick} shouldAnimate={shouldAnimate} />
    </AppContainer>
  );
}

export default App;
