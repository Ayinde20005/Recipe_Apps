import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Component/navbar";
import Home from "./Pages/Home";
import Favorite from "./Pages/Favorite";
import Details from "./Pages/Datails";


function App() {
  return (
    <div>
      <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/recipe-item/:id" element={<Details />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
