import React from "react";

const chat_line = () => {
  const [date, setDate] = useState(initialState);

  return (
    <div className="chat-line">
      <span className="chat-date">{date}</span>
    </div>
  );
};

export default chat_line;
