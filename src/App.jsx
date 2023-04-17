import React from "react";
import SideNav from "./components/SideNav";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  return (
    <div className="flex">
      <SideNav />
      <main className="flex-1 bg-[#FCFBFC] max-h-screen overflow-auto">
        <Header />
        <Main />
      </main>
    </div>
  );
};

export default App;
