import { Routes, Route } from "react-router-dom";
import "./App.css";
import Landingpage from "./Pages/LandingPage";

import Shop from "./Pages/Shop";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path="/shop" element={<Shop />} />
    </Routes>
  );
}

export default App;
