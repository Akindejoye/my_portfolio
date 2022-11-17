import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "./context";
import Home from "./Page/Home";
import React from "react";
import "./app.css";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="app"
      style={{
        backgroundColor: darkMode ? "#222" : "#fff",
        color: darkMode && "#fff",
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route>
            <Route exact path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
