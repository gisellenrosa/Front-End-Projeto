import React from "react";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
import GlobalState from "./global/GlobalState";

export default function App() {
  return (
    <div>
      <GlobalState>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </GlobalState>
    </div>
  );
}
