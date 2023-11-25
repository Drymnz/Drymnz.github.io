/* import { useState } from "react"; */
/* import "./App.css"; */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./Pages/Layout";
import { Error404 } from "./Pages/Error/404";
import { Home } from "./Pages/Home";
import { Contact } from "./Pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Drymnz.github.io/" Component={Layout}>
          {/* home */}
          <Route path="/Drymnz.github.io/" Component={Home} />
          <Route path="/Drymnz.github.io/contact" Component={Contact} />
        </Route>
        <Route path="*" Component={Error404}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
