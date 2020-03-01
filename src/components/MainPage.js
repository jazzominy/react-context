import React from "react";
import Header from "./Header";
import MessageList from "./MessageList";
import { EmailConsumer } from "./EmailContext";
const MainPage = ({ onLogout }) => (
  <main>
    <Header />
    <EmailConsumer>
      {({ currentEmail, onSelectEmail }) => {
        return currentEmail ? (
          <MessageViewer onClick={onSelectEmail} />
        ) : (
          <MessageList />
        );
      }}
    </EmailConsumer>
  </main>
);

const MessageViewer = () => (
  <EmailConsumer>
    {({ currentEmail, onSelectEmail }) => (
      <div className="MessageViewer">
          <button onClick={() => onSelectEmail(null)}>Back</button>
        <h2>{currentEmail.subject}</h2>
        <div>{currentEmail.body}</div>
      </div>
    )}
  </EmailConsumer>
);

export default MainPage;
