import { Routes, Route } from "react-router-dom";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";
import { HomePage } from "./pages/HomePage/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
        </Route>
            <Route path="*" element={<NotFoundPage />} />
      </Routes>


    </>
  );
}
export default App;
