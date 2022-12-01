import { BrowserRouter, Route, Routes } from "react-router-dom";
import Unique from "./views/unique.jsx";

function App() {
  return(
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Unique/>}/>
      </Routes>
      </BrowserRouter>
   );
}

export default App;