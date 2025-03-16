import React from "react";


const LandingPage = () => {


  return (
    <div className="flex flex-col justify-center items-center gap-10 p-4 dark:bg-gray-800 h-screen text-white">
      <div className="flex items-center gap-4">
        <img
          className="w-18 h-18"
          src="https://st2.depositphotos.com/2904097/6823/v/950/depositphotos_68236717-stock-illustration-vector-code-editor-icon.jpg"
          alt="no-preview"
        />
        <span className="text-2xl font-bold">Coddy</span>
      </div>
      <div className="font-semibold text-2xl">
        <ul className="flex gap-8 text-center ]">
          <li
            className="rounded-xl bg-red-300 p-4 w-44" >
            
            <a href="">Create Room</a>
          </li>
          <li
            className="rounded-xl bg-red-300 p-4 w-44"

          >
            <a href="">Join Room</a>
          </li>
          <li className="rounded-xl bg-red-300 p-4 w-44">
            <a href="">SignIn</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LandingPage;
