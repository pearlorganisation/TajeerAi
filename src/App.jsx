import { useState } from "react";

// import CloudAnimation from "./components/CloudAnimation";
// import JaiCloudAnimation from "./components/JaiCloudAnimation";

import SvgTest from "./components/SvgTest";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <CloudAnimation /> */}
      {/* <JaiCloudAnimation /> */}
      <SvgTest />
    </>
  );
}

export default App;
