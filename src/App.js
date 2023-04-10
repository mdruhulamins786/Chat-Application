import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Chat from "./components/chat/Chat";

const App = () => {
  return (
    <div className="bg-blue-300 h-screen w-screen flex justify-center items-center">
      <div className="flex w-[900px] h-[700px] bg-slate-500 rounded-md">
        <div className="basis-1/3 bg-slate-700 rounded-l-md">
          <Sidebar />
        </div>
        <div className="basis-2/3">
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default App;
