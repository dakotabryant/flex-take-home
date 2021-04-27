import React from 'react';
import styled from 'styled-components';
import { formatTime } from '../utils/formatTime';

interface ICircleContainerProps {
  time: number;
  togglePause: () => void;
  shouldAnimate: boolean;
  timeLimit: number;
}

interface ICircleProps {
  onClick: () => void;
}

interface ICircleStrokeProps {
  shouldAnimate?: boolean;
}

const Circle = styled.button<ICircleProps>`
  position: relative;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  border: 0;
  background-color: transparent;
  font-size: 22px;
`;
const CircleBorderContainer = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 300px;
  height: 300px;
  transform: rotate(-90deg);
`;

const CircleStroke = styled.circle.attrs<ICircleStrokeProps>(({ shouldAnimate }) => ({
  style: {
    transition: `${shouldAnimate ? 'all 0.3s ease' : ''}`,
  },
}))<ICircleStrokeProps>``;

const CircleContainer: React.FC<ICircleContainerProps> = ({
  togglePause,
  time,
  shouldAnimate,
  timeLimit,
}) => {
  const diameter = 150;
  const strokeWidth = 12;
  const radius = diameter / 2 - strokeWidth / 2;
  const circumference = Math.PI * radius * 2;
  // because we need the inverse percentage for strokeDashoffset, we subtract the precentage decimal from 1
  const timeAsPercentage = 1 - time / 1000 / timeLimit;
  return (
    <Circle onClick={togglePause}>
      <h1>{formatTime(time)}</h1>
      <CircleBorderContainer viewBox="0 0 150 150">
        <CircleStroke
          stroke="gray"
          fill="transparent"
          cx={diameter / 2}
          cy={diameter / 2}
          r={radius}
          strokeWidth={strokeWidth}
        />
      </CircleBorderContainer>
      <CircleBorderContainer viewBox="0 0 150 150">
        <CircleStroke
          stroke="black"
          fill="transparent"
          cx={diameter / 2}
          cy={diameter / 2}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={circumference * timeAsPercentage}
          shouldAnimate={shouldAnimate}
        />
      </CircleBorderContainer>
    </Circle>
  );
};

export default CircleContainer;
