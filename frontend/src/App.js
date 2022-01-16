import React from "react";
import Header from "./components/Header";
import PetitionList from "./components/PetitionList";
import CreatePetition from "./components/CreatePetition";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<PetitionList />} exact />
        <Route path="/new" element={<CreatePetition />} />
      </Routes>
    </Router>
  );
};

export default App;
