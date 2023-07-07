import Navbar from "./components/Navbar";
import About from "./components/About";

function App() {
  return (
    <div className="App w-full">
      <Navbar></Navbar>
      <div className="middble-block">
        <About></About>
      </div>
    </div>
  );
}

export default App;
