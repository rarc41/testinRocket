import React, { useEffect, useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { getRemainingTime } from "../utils/TimerUtils";
import styled from "@emotion/styled";
import Spinner from "./Spinner";

const TimerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Number = styled.h1`
  font-size: 6.5rem;
  color: #fff;
  font-weight: 200;
  margin: 0;
  @media (max-width: 760px) {
    font-size: 6rem;
  }
  @media (max-width: 640px) {
    font-size: 4rem;
  }
  @media (max-width: 360px) {
    font-size: 2.8rem;
  }
  @media (max-width: 360px) {
    font-size: 2.3rem;
  }
`;

const Label = styled.span`
  font-size: 1.5rem;
  color: #fff;
  font-weight: 200;
  border: 1px solid #fff;
  border-radius: 0.25rem;
  text-transform: uppercase;
  @media (max-width: 760px) {
    font-size: 1rem;
  }
  @media (max-width: 412px) {
    font-size: 1rem;
  }

  @media (max-width: 320px) {
    font-size: 0.85rem;
  }
`;

const ContainerTimer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 25%;
  gap: 2rem;
  height: 95%;
  @media (max-width: 760px) {
    width: 50%;
  }
  @media (max-width: 640px) {
    width: 75%;
  }
`;

const Timer = () => {
  // get the next launch of context
  const { nextLaunch, remainingTime, loading, setRemainingTime } =
    useContext(GlobalContext);

  const updateTime = (endDate) => {
    // getRemainingTime(endDate)
    setRemainingTime(getRemainingTime(endDate));
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateTime(nextLaunch.date_utc);
    }, 1000);
    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nextLaunch]);

  const { days, hours, minutes, seconds } = remainingTime;
  return (
    <ContainerTimer data-testid="countdown-timer">
      {loading ? (
        <Spinner></Spinner>
      ) : (
        <>
          <TimerDiv>
            <Number>
              {days < 10 && 0}
              {days}
            </Number>
            <Label>DAYS</Label>
          </TimerDiv>
          <TimerDiv>
            <Number>
              {hours < 10 && 0}
              {hours}
            </Number>
            <Label>HOURS</Label>
          </TimerDiv>
          <TimerDiv>
            <Number>
              {minutes < 10 && 0}
              {minutes}
            </Number>
            <Label>MINUTES</Label>
          </TimerDiv>
          <TimerDiv>
            <Number>
              {seconds < 10 && 0}
              {seconds}
            </Number>
            <Label>SECONDS</Label>
          </TimerDiv>
        </>
      )}
    </ContainerTimer>
  );
};

export default Timer;
