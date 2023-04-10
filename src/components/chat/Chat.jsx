import React from "react";
import Navbar from "../../pages/chats_items/Navbar";
import ChatItems from "../../pages/chats_items/ChatItems";
import Messages from "../../pages/chats_items/Messages";

const Chat = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <ChatItems />
      <Messages />
    </div>
  );
};

export default Chat;
