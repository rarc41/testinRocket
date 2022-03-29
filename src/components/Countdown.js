import React, { useContext } from "react";
import styled from "@emotion/styled";
import Timer from "./common/Timer";
import { GlobalContext } from "../context/GlobalContext";
import Spinner from "./common/Spinner";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(26, 58, 59);
  background: linear-gradient(
    90deg,
    rgba(26, 58, 59, 1) 0%,
    rgba(31, 43, 47, 1) 86%
  );
  margin-top: 2rem;
  box-shadow: 0px 0px 21px 0px rgba(0,0,0,0.75);
  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

const Heading = styled.h1`
  color: #fff;
  font-size: 2rem;
  font-weight: 500;
  margin: 0;
  text-align: center;
  @media (max-width: 412px) {
    font-size: 1rem;
  }
`;

const Countdown = () => {
  const { nextLaunch, loading } = useContext(GlobalContext);
  return (
    <>
      {!loading && <Heading>Upcoming: {nextLaunch.name}</Heading>}
      <Container>
        {loading ? (<Spinner/>):<Timer/>}
      </Container>
    </>
  );
};

export default Countdown;
