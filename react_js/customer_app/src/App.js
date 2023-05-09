import NavBar from "./Components/NavBar";
import List from "./Components/List";
import Form from "./Components/Form";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useState } from "react";

function App() {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="App">
      <NavBar searchText={searchText} setSearchText={setSearchText} />
      <Routes>
        <Route path="/" element={<List searchText={searchText} />} />
        <Route path="/new" element={<Form />} />
        <Route path="/:id" element={<Form setSearchText={setSearchText} />} />
      </Routes>
    </div>
  );
}

export default App;
