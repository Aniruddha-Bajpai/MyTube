import React from "react";

function ChatMessage({ name, message }) {
  return (
    <div className="w-full p-1 flex gap-3">
      <img
        className="h-7 border rounded-full border-gray-400 "
        src="https://cdn.icon-icons.com/icons2/3054/PNG/512/account_profile_user_icon_190494.png"
        alt="user"
      />
      <span className="text-gray-600">{name}</span>
      <span>{message}</span>
    </div>
  );
}

export default ChatMessage;
