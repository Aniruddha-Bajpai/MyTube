import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage.js";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice.js";
import { generateRandomName } from "../utils/helper.js";
function LiveChat() {
  const dispatch = useDispatch();
  const chatMessage = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("API polling");
      dispatch(
        addMessage({
          name: "Aniruddha Bajpai",
          message: "This is a demo, of how live chat is being made",
        })
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col">
      <div className="border border-b p-4">
        <select defaultValue="Top chat" className="m-1">
          <option className="border-none">Live chat</option>
          <option className="w-full">Top chat</option>
        </select>
      </div>
      <div className="p-2 h-[400px] overflow-auto flex flex-col-reverse ">
        {chatMessage.map((msg, indx) => (
          <ChatMessage
            key={indx + "-" + msg.name}
            name={generateRandomName()}
            message="Hire me!"
          />
        ))}
      </div>
    </div>
  );
}

export default LiveChat;
