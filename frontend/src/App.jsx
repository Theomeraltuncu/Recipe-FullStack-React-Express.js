import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";
import Sidebar from "./components/Sidebar";
import CreatePage from "./pages/CreatePage";

const App = () => {
  return (
    <BrowserRouter>
      {/* <Header/> */}
      <div className="flex">
        <Sidebar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/recipe/:id" element={<DetailPage />} />
          <Route path="/add" element={<CreatePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
