import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/styles.css";
import AppLayout from "./ui/AppLayout";
import Team from "./ui/Team";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />} />
          <Route path="team" element={<Team />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
