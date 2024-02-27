import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CloudAnimation from "./components/CloudAnimation";
import JaiCloudAnimation from "./components/JaiCloudAnimation";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <CloudAnimation /> */}
      <JaiCloudAnimation />
    </>
  );
}

export default App;
