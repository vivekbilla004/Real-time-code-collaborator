import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Slidebar from "../components/SlideBar";
import CodeEditor from "../components/CodeEditor";
import TerminalComponent from "../components/TerminalComponent";

const MainPage = () => {
  const [activeTab, setActiveTab] = useState(null);

  const handleTabClick = (tab) => {
    setActiveTab(activeTab === tab ? null : tab);
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Navbar */}
      <NavBar />

      <div className="flex h-full">
        {/* Sidebar (Icons always fixed, no shifting) */}
        <Slidebar activeTab={activeTab} handleTabClick={handleTabClick} />

        {/* Main Content: Code Editor & Terminal (No unnecessary gap) */}
        <div className={`flex-1 flex flex-col transition-all duration-300`}>
          {/* Code Editor (Takes remaining space) */}
          <div className="flex-1 bg-gray-900">
            <CodeEditor />
          </div>

          {/* Terminal (Fixed at bottom) */}
          <div className="h-1/4 bg-gray-800 border-t border-gray-700">
            <TerminalComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
