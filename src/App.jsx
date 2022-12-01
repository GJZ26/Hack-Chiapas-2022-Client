import { BrowserRouter, Route, Routes } from "react-router-dom";
import CompanieInfo from "./views/companieInfo.jsx";
import Suggest from "./views/suggest.jsx";
import Unique from "./views/unique.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Unique />} />
        <Route path="/suggest" element={<Suggest />} />
        <Route path="/companie" element={<CompanieInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;