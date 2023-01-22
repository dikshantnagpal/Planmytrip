import "./App.css";
import Home from "./Components/Home/Home";
import "./App.css";
import Navbar from "./Components/Navbar";
import { ImageCard } from "./Components/Home/ImageCard";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
