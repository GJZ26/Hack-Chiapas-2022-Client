import { BrowserRouter, Route, Routes } from "react-router-dom";
import Suggest from "./views/suggest.jsx";
import Unique from "./views/unique.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Unique />} />
        <Route path="/suggest" element={<Suggest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;