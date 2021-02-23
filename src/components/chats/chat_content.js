import { chat_action_buttons } from "./chat_action_buttons";
import React, { useState } from "react";

const chat_content = () => {
  const [content, setContent] = useState(initialState);
  const [time, setTime] = useState(initialState);
  const [isLeft, setIsLeft] = useState(initialState);

  return (
    // TODO:
    <div className={`chat isLeft ? ${chat - left} : chat-right`}>
      <div className="chat-body">
        <div className="chat-bubble">
          <div className="chat-content">
            <p>{content}</p>
            <span className="chat-time">{time}</span>
          </div>
          <chat_action_buttons />
        </div>
      </div>
    </div>
  );
};

export default chat_content;
