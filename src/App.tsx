import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { SizeSelector } from "./Pages/SizeSelector";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ComponeteDos } from "./Pages/ComponeteDos";
import { Layout } from "./Pages/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Drymnz.github.io/" Component={Layout}>
          <Route path="/Drymnz.github.io/" Component={SizeSelector} />
          <Route
            path="/Drymnz.github.io/ComponenteDos"
            Component={ComponeteDos}
          />
        </Route>
        {/* <Route path="*" Component={}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
