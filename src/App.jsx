import React from "react";
import SideNav from "./components/SideNav";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="flex">
      <SideNav />
      <main className="flex-1">
        <Header />
      </main>
    </div>
  );
};

export default App;
