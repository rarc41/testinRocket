import React, { useContext } from "react";
import styled from "@emotion/styled";
import { GlobalContext } from "../../context/GlobalContext";

const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
  padding: 0 3rem;
`;
const NavButton = styled.button`
  background: transparent;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  font-weight: lighter;
  padding: 0;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #000;
  }
`;
const Navbar = () => {
  const { setSection } = useContext(GlobalContext);
  return (
    <Nav>
      <NavButton value="countdown" onClick={(e) => setSection(e.target.value)}>
        Next Launch
      </NavButton>
      <NavButton value="upcoming" onClick={(e) => setSection(e.target.value)}>
        Upcoming Launches
      </NavButton>
    </Nav>
  );
};

export default Navbar;
