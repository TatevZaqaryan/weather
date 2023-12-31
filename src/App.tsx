import { Route, Routes } from "react-router";
import { Home } from "./pages/Home/components/Home";
import { MonthStatistics } from "./pages/MonthStatistics/components/MonthStatistics";
import { Header } from "./pages/shared/Header/Header";
function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/month-statistics" element={<MonthStatistics />} />
      </Routes>
    </div>
  );
}

export default App;
