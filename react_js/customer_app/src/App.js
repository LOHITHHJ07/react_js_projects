import NavBar from "./Components/NavBar";
import List from "./Components/List";
import Form from "./Components/Form";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import api from "./api.js";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.search("com.axelor.apps.base.db.Partner").then((record) => {
      setData(record.data);
    });
  }, []);

  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<List data={data} />} />
        <Route path="/new" element={<Form />} />
        <Route path="/:id" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
