import React from "react";
import { render, screen } from "@testing-library/react";
import GlobalProvider from "../context/GlobalContext";
import Countdown from "../components/Countdown";

// probar que  este cargando cuando no haya datos
test("should be a spinner", () => {
  render(
    <GlobalProvider>
      <Countdown />
    </GlobalProvider>
  );
  expect(screen.getByTestId("spinner")).toBeInTheDocument();
})
