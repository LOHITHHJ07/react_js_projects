import "./App.css";
import Fetch from "./Components/Fetch";
import Loader from "./Components/Loader";
import UsingAxios from "./Components/UsingAxios";

function App() {
  return (
    <div className="App">
      <Fetch></Fetch>
      <UsingAxios></UsingAxios>
      {/* <Loader></Loader> */}
    </div>
  );
}

export default App;
