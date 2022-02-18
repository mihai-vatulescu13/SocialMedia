import React from "react";
import "./conversation.css";

export const Conversation = ({ profilePicture, name }) => {
  return (
    <div className="conversation-container">
      <div className="converstaion-details">
        <div className="conversation-card">
          <img
            src={profilePicture}
            alt="user follow"
            className="conversation-user-img"
          />
          <h4>{name}</h4>
        </div>
      </div>
    </div>
  );
};
