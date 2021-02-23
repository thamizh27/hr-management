import chat_line from "./chat_line";
import React from "react";

const chats = () => {
  const [chatData, setChatData] = useState([]);

  return (
    <div className="chats">
      {chatData.map((item) => (
        <chat_content data={item} isLeft={false} />
      ))}
      <chat_line date="8th october" />
    </div>
  );
};

export default chats;
