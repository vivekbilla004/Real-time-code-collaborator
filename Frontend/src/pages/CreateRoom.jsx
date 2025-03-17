import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import toast, { Toaster } from "react-hot-toast";

const CreateRoom = () => {
  const [roomId, setRoomId] = useState("");
  const [ username , setUsername ] = useState("");

  // Function to generate a new Room ID
  const generateRoomId = () => {
    const newRoomId = uuidv4();
    setRoomId(newRoomId);
    toast.success("Room ID Generated!");
  };

  // Function to copy Room ID
  const copyRoomId = () => {
    if (!roomId) {
      toast.error("Generate a Room ID first!");
      return;
    }
    navigator.clipboard.writeText(roomId);
    toast.success("Room ID Copied!");
  };

  // Function to handle joining a room
  const joinRoom = () => {
    if (!roomId) {
      toast.error("Please enter a Room ID!");
      return;
    }
    toast.success(`Joining Room: ${roomId}`);
    // Redirect to the room (Assuming React Router)
    window.location.href = `/room/${roomId}`;
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
      <Toaster />
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96 h-90 text-center">
        <h2 className="text-2xl font-semibold my-4 mt-5">Create or Join a Room</h2>

        {/* Room ID Input */}
        <input
          type="text"
          placeholder="Enter Room ID"
          className="w-full p-2 my-6 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter UserName"
          className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        {/* Buttons */}
        <div className="flex justify-between mt-8">
          <button
            onClick={generateRoomId}
            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg"
          >
            Generate ID
          </button>
          <button
            onClick={copyRoomId}
            className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-lg"
          >
            Copy ID
          </button>
          <button
            onClick={joinRoom}
            className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg"
          >
            Join Room
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateRoom;
