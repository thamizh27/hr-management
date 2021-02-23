import React from "react";

export const chat_action_buttons = () => {
  return (
    <div className="chat-action-btns">
      <ul>
        <li>
          <a href="#" className="edit-msg">
            <i className="fa fa-pencil" />
          </a>
        </li>
        <li>
          <a href="#" className="del-msg">
            <i className="fa fa-trash-o" />
          </a>
        </li>
      </ul>
    </div>
  );
};
