import "./App.css";
import "./App.css";
import Navbar from "./Components/Navbar";


import MainRoutes from "./Components/MainRoutes";
import { ImageCard } from "./Components/Home/ImageCard";

import Footer from "./Components/Footer";


function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRoutes/>
      <Footer/>

    </div>
  );
}

export default App;
