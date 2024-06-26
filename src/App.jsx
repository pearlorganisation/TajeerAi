
import { Route, Routes } from "react-router-dom";
import "./App.css";
// import CloudAnimation from "./components/CloudAnimation";
// import JaiCloudAnimation from "./components/JaiCloudAnimation";

import Home from "./pages/Home/Home";
import Signin from "./pages/Signin/Signin";
import Signup from "./pages/Signup/Signup";
import Dashboard from "./pages/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import FullPage from "./components/FullPage/FullPage";
import ToggleCard from "./components/ToggleCards/ToggleCard";

function App() {

  return (
    <div className="w-full">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/fullPage" element={<FullPage />} />
        <Route path="/test" element={<ToggleCard />} />
      </Routes>

    </div>
  );
}

export default App;
