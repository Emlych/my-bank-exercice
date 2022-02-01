import "./App.css";
import Header from "./Components/Header";
import Accounts from "./Components/Accounts";

function App() {
  return (
    <div className="app">
      <Header username="Etienne" />
      <Accounts />
    </div>
  );
}

export default App;
