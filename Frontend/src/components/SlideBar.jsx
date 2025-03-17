import React from "react";
import { FaFileAlt, FaComment, FaVideo } from "react-icons/fa";
import Files from "./Files";
import ChatBox from "./ChatBox";
import VideoCall from "./VideoCall";

const Slidebar = ({ activeTab, handleTabClick }) => {
  return (
    <div className="flex h-full">
      {/* Sidebar Icons (Always Visible) */}
      <div className="bg-gray-900 text-white flex flex-col items-center py-4 w-14">
        <button className="p-3 hover:bg-gray-700 rounded" onClick={() => handleTabClick("files")}>
          <FaFileAlt size={20} />
        </button>
        <button className="p-3 hover:bg-gray-700 rounded" onClick={() => handleTabClick("chat")}>
          <FaComment size={20} />
        </button>
        <button className="p-3 hover:bg-gray-700 rounded" onClick={() => handleTabClick("video")}>
          <FaVideo size={20} />
        </button>
      </div>

      {/* Sidebar Content (Expands on Click) */}
      {activeTab && (
        <div className="bg-gray-800 text-white w-64 transition-all duration-300">
          {activeTab === "files" && <Files />}
          {activeTab === "chat" && <ChatBox />}
          {activeTab === "video" && <VideoCall />}
        </div>
      )}
    </div>
  );
};

export default Slidebar;
