import NavBar from "./Components/NavBar";
import List from "./Components/List";
import Form from "./Components/Form";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/new" element={<Form />} />
        <Route path="/:id" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
