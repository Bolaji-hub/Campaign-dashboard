import React from "react";
import SideNav from "./components/SideNav";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";

const App = () => {
  return (
    <div className="flex">
      <SideNav />
      <main className="flex-1">
        <Header />
        <SubHeader />
      </main>
    </div>
  );
};

export default App;
