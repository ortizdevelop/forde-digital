import Navbar from "./components/Navbar";
import About from "./components/About";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App w-full">
      <Navbar></Navbar>
      <div className="middble-block">
        <About></About>
        <Feedback></Feedback>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
