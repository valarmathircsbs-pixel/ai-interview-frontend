import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Assessment from "./components/Assessment";

import Interview from "./components/Interview";
import Result from "./components/Result";


function App() {
  return (
    <BrowserRouter>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/interview" element={<Interview />} />
  <Route path="/assessment" element={<Assessment />} />
  <Route path="/result" element={<Result />} />
</Routes>

    </BrowserRouter>
  );
}

export default App;
