import React from "react";
import ScrollTextReveal from "./components/ScrollTextReveal";
import ScrollToZoomImage from "./components/ScrollToZoomImage";
import BentoSolution from "./components/BentoSolution";

let paragraph =
  "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, ";

const App = () => {
  return (
    <div>
      {/* scroll text reveal component */}
      <div style={{ minHeight: "200vh", backgroundColor: "#111" }}>
        <div style={{ height: "150vh" }} />
        <ScrollTextReveal paragraph={paragraph} />
        <div style={{ height: "100vh" }} />
      </div>
      {/* scroll text reveal component end */}

      {/* scroll to zoom image */}
      <div className="w-full overflow-x-hidden">
        <ScrollToZoomImage image={"https://placehold.co/600x400"} />
      </div>
      {/* scroll to zoom image end */}
      <BentoSolution />
    </div>
  );
};

export default App;
