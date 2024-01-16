import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Component/NavBar";
import Fetch_Data from "./Component/Pages/fetch_data";
import Update from "./Component/Pages/update";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Fetch_Data />}></Route>
        <Route exact path="/update" element={<Update />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
