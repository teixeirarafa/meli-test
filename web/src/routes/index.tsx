import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "../pages/Detail";
import Home from "../pages/Home";
import SearchResult from "../pages/SearchResult";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items/:id" element={<Detail />} />
        <Route path="/items" element={<SearchResult />} />
      </Routes>
    </Router>
  );
}
