import React, { useState, useContext } from "react";
import styled from "@emotion/styled";
import { GlobalContext } from "../context/GlobalContext";
import { useWindowSize } from "../hooks/useWindowSize";
import moment from "moment";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background: rgb(51,37,49);
  background: linear-gradient(90deg, rgba(51,37,49,1) 0%, rgba(35,29,42,1) 86%);
  margin-top: 2rem;
  box-shadow: 0px 0px 21px 0px rgba(0,0,0,0.75);
  @media (max-width: 768px) {
    margin-top: 1.3rem;
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

const Table = styled.table`
  margin-top: 4rem;
  border-collapse: collapse;
  border-spacing: 2rem 6rem;
  width: 95%;
  @media (max-width: 768px) {
    font-size: 0.65rem;
  }
`;

const Th = styled.th`
  padding: 0.5rem;
  text-align: left;
  font-size: 1.3rem;
  font-weight: 400;
  color: rgb(249 250 251);
  width: 40%;
  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

const Tr = styled.tr`
  border-bottom: 1px solid rgb(249 250 251);
`;

const Body = styled.tbody`
  border-top-width: 0px;
  border-bottom-width: 1px;
  border-color: rgb(249 250 251);
`;

const Head = styled.thead`
  border-top-width: 1px solid rgb(249 250 251);
`;

const Td = styled.td`
  padding: 0.5rem;
  text-align: left;
  white-space: nowrap;
  color: rgb(249 250 251);
`;

const Select = styled.select`
background: none;
border: none;
color: rgb(249 250 251);
&:hover {
  color: rgb(249 250 251);
}
&:focus {
  outline: none;
}
`;

const Option = styled.option`
color: rgb(51,37,49);
`;

const Upcoming = () => {
  const { launches } = useContext(GlobalContext);
  const { width } = useWindowSize();

  // hook for select field of the table
  const [selected, setSelected] = useState("Date (UTC)");
  const handleChangeSelect = (e) => {
    setSelected(e.target.value);
  };

  return (
    <>
      <Heading>Upcoming - Next Launches</Heading>
      <Container>
        <Table>
          <Head>
            <Tr>
              <Th>Mission</Th>
              {width < 600 && (
                <Th>
                  <Select value={selected} onChange={handleChangeSelect}>
                    <Option value="Date (UTC)">{"Dates (UTC)"}</Option>
                    <Option value="Launchpad">Launchpad</Option>
                  </Select>
                </Th>
              )}
              {width > 600 && (
                <>
                  <Th>{"Date (UTC)"}</Th>

                  <Th>Launchpad</Th>
                </>
              )}
            </Tr>
          </Head>
          <Body>
            {launches.map(({ id, name, date_utc, launchpad }) => (
              <Tr key={id}>
                <Td>{name}</Td>
                {width < 600 && (
                  <Td>
                    {selected === "Date (UTC)" &&
                      moment(date_utc).format("MMM DD, YYYY")}
                    {selected === "Launchpad" && launchpad}
                  </Td>
                )}
                {width > 600 && (
                  <>
                    <Td>{moment(date_utc).format("MMMM Do YYYY, H:mm ")}</Td>
                    <Td>{launchpad}</Td>
                  </>
                )}
              </Tr>
            ))}
          </Body>
        </Table>
      </Container>
    </>
  );
};

export default Upcoming;
