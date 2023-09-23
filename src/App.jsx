import { Routes, Route } from "react-router-dom";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";
import { HomePage } from "./pages/HomePage/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import "./App.css";
import { WaterCalcPage } from "./pages/WaterCalcPage/WaterCalcPage";
import { StubPage } from "./pages/StubPage/StubPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<StubPage />} />
          <Route path="/waterCounter" element={<WaterCalcPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
export default App;
