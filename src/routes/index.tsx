import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "../pages/Detail";
import Main from "../pages/Main";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </Router>
  );
}
