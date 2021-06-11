import logo from "./logo.svg";
import "./App.css";
import DrumMachine from "./components/DrumMachine";

function App() {

  return (
    <div className="container-fluid h-100">
      <div className="row align-items-center h-100">
        <DrumMachine />
      </div>
    </div>
  );
}

export default App;
