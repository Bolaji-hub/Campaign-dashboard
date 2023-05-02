import React, { useState } from "react";
import SideNav from "./components/SideNav";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex">
      <SideNav isNavOpen={isNavOpen} />
      <main className="flex-1 bg-[#FCFBFC] max-h-screen overflow-auto">
        <Header isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
        <Main />
      </main>
    </div>
  );
};

export default App;
