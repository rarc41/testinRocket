import React, { useContext } from "react";
import styled from "@emotion/styled";
import Layout from "./components/common/Layout";
import Upcoming from "./components/Upcoming";
import Countdown from "./components/Countdown";
import { GlobalContext } from "./context/GlobalContext";

const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  background: rgb(73, 109, 115);
  background: linear-gradient(
    295deg,
    rgba(73, 109, 115, 1) 29%,
    rgba(39, 187, 179, 1) 77%
  );

  background: linear-gradient(
    90deg,
    rgba(171, 75, 127, 1) 0%,
    rgba(58, 22, 74, 1) 86%
  );
  ${(props) =>
    props.primary &&
    "background: rgb(73, 109, 115); background: linear-gradient(295deg, rgba(73, 109, 115, 1) 29%, rgba(39, 187, 179, 1) 77%);"}
  ${(props) =>
    props.secondary &&
    "background: rgb(171, 75, 127);   background: linear-gradient(90deg,rgba(171, 75, 127, 1) 0%,rgba(58, 22, 74, 1) 86%);"}
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 2rem 8rem;
  @media (max-width: 412px) {
    margin: 0;
  }
  @media (max-width: 768px) {
    margin: 2rem 0;
  }
`;

function App() {
  const { section } = useContext(GlobalContext);
  return (
    <AppContainer
    primary={section === "countdown" ? true : false}
    secondary={section === "upcoming" ? true : false}
    >
      <Layout>
        <Main>
          {section === "countdown" && <Countdown />}
          {section === "upcoming" && <Upcoming />}
        </Main>
      </Layout>
    </AppContainer>
  );
}

export default App;
