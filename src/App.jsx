
import { Route, Routes } from "react-router-dom";

// import CloudAnimation from "./components/CloudAnimation";
// import JaiCloudAnimation from "./components/JaiCloudAnimation";

import Home from "./pages/Home/Home";
import Signin from "./pages/Signin/Signin";
import Signup from "./pages/Signup/Signup";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

    </>
  );
}

export default App;
